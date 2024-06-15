const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const admin = require('firebase-admin');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Firebase Admin SDK initialization
const serviceAccount = require('./ignored/nerist-media-club-firebase.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://nerist-media-club-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const db = admin.database();

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, 'uploads');
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Load initial teamMembers data from file on server start
let teamMembers = [];
const dataFilePath = path.join(__dirname, 'teamMembersData.json');

if (fs.existsSync(dataFilePath)) {
    const dataFileContent = fs.readFileSync(dataFilePath, 'utf8');
    try {
        teamMembers = JSON.parse(dataFileContent);
    } catch (error) {
        console.error('Error parsing teamMembers data file:', error);
    }
} else {
    console.log('Data file does not exist. Creating new one.');
    saveDataToFile(); // Create an empty file initially
}

// Function to save teamMembers data to file
function saveDataToFile() {
    fs.writeFileSync(dataFilePath, JSON.stringify(teamMembers, null, 2), 'utf8');
}

// Route to handle image uploads
app.post('/team/image', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    // Construct the full URL including the backend server address
    const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;

    res.json({ imageUrl });
});

// Route to handle adding team members
app.post('/addTeamMember', (req, res) => {
    const { name, role, imageSrc, altText, link } = req.body;

    if (!name || !role || !imageSrc || !altText) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const newTeamMember = {
        id: teamMembers.length + 1,
        name,
        role,
        imageSrc,
        altText,
        link
    };

    teamMembers.push(newTeamMember);
    saveDataToFile(); // Save updated data to file
    res.json({ message: 'Team member added successfully', teamMembers });
});

// Route to get all team members
app.get('/getTeamMembers', (req, res) => {
    res.json({ teamMembers });
});

// Route to check and add email
app.get("/getEmail", async (req, res) => {
    const email = req.query.email;
    if (!email) {
        return res.status(400).send("Email is required");
    }

    try {
        const emailRef = db.ref('emails');
        const snapshot = await emailRef.orderByValue().equalTo(email).once('value');

        if (snapshot.exists()) {
            return res.status(300).send("Email already exists");
        } else {
            await emailRef.push(email);
            return res.status(200).send("Email added successfully");
        }
    } catch (error) {
        console.error("Error checking or adding email:", error);
        return res.status(500).send("Internal Server Error");
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
