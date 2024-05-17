require('dotenv').config(); 
const express = require("express");
const ytdl = require("ytdl-core");
const cors = require("cors");
const { fetchSongDetails } = require("./getSongDetails");
const favicon = require('serve-favicon');
const path = require('path'); 
const app = express();
const PORT = 3000;
const WebSocket = require('ws');
const http = require('http');
const url = require('url');
const API_KEY = process.env.API_KEY;
const AuthUrl = "http://localhost:5173";
app.use(cors());
app.use(favicon(path.join(__dirname, 'public', 'images', 'logo.ico')));
app.get("/playSong", async (req, res) => {
  try {
    const songDetails = await fetchSongDetails(req.query.songName);
    const songData = await fetchSongData(songDetails);

    // Respond with the song data
    res.json(songData);
  } catch (error) {
    console.error("Error playing song:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Function to fetch song data
async function fetchSongData(songDetails) {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?q=${encodeURIComponent(
      songDetails.name + songDetails.artists[0].name
    )}&part=snippet&type=video&maxResults=1&key=${API_KEY}`
  );
  const data = await response.json();

  if (data && data.items && data.items.length > 0) {
    const videoId = data.items[0].id.videoId;
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    const title = songDetails.name;
    const thumbnail = songDetails.album.images[0].url;
    const owner = songDetails.artists[0].name;

    const audioFile = await convertToAudio(
      `https://www.youtube.com/watch?v=${videoId}`
    );

    return {
      title,
      embedUrl,
      thumbnail,
      owner,
      videoId,
      audioFile,
    };
  } else {
    throw new Error("No video found");
  }
}

// Function to convert YouTube video to audio
async function convertToAudio(youtubeUrl) {
  const info = await ytdl.getInfo(youtubeUrl);
  const audioFormat = ytdl.chooseFormat(info.formats, { filter: "audioonly" });
  return audioFormat.url;
}

app.get("/", (req, res) => {
  res.json({ message: "hello there" });
});

const generateShareUrl = (username) => {
  console.log("generating link")
  return `listen?username=${(username)}`;
};
app.get("/generateShareUrl", (req, res) => {
  const { username } = req.query;
  // Generate a unique share URL for the provided username
  const shareUrl = generateShareUrl(username);
  // Send the generated share URL as the response
  res.json({ shareUrl });
});
const wss = new WebSocket.Server({ noServer: true });
const clients = new Map(); // Store connected clients

// Function to broadcast an object message to clients with the same WebSocket URL
function broadcastMessage(message, url) {
    console.log('Broadcasting message:', message, 'to clients with URL:', url);

    // Convert the object to a JSON string
    const jsonMessage = JSON.stringify(message);

    // Iterate over all clients and send the message to clients with the same URL
    clients.forEach((client, clientUrl) => {
        if (clientUrl === url && client.readyState === WebSocket.OPEN) {
            client.send(jsonMessage);
        }
    });
}

// Handle new connections
wss.on('connection', (ws, req) => {
    const queryParams = url.parse(req.url, true).query;
    const username = queryParams.username;

    if (!username) {
        console.log('Connection rejected: No username provided');
        ws.close();
        return;
    }

    const clientUrl = req.url; // Get the WebSocket URL of the client

    console.log(`${username} connected with URL: ${clientUrl}`);

    // Store client in clients map with its WebSocket URL as the key
    clients.set(clientUrl, ws);

    // Handle messages from clients
   // Handle messages from clients
// Handle messages from clients
ws.on('message', (message) => {
    try {
        // Convert the Buffer message to a string
        const messageString = message.toString('utf8');

        // Parse the JSON message
        const parsedMessage = JSON.parse(messageString);

       

        // Broadcast the message to clients with the same WebSocket URL
        broadcastMessage(parsedMessage, clientUrl);
    } catch (error) {
        console.error('Error parsing message:', error);
    }
});



    // Handle client disconnections
    ws.on('close', () => {
        console.log(`${username} disconnected with URL: ${clientUrl}`);

        // Remove client from clients map
        clients.delete(clientUrl);
    });
});

// Create HTTP server
const server = http.createServer();

// Upgrade HTTP server to WebSocket server
server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request);
    });
});
const WSPORT = 8080;
// Start the HTTP server
server.listen(WSPORT, () => {
    console.log(`WebSocket server started on port ${WSPORT}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
