import  { useState } from 'react';
const backend = "https://backend.neristmedia.club";
// const backend ="http://localhost:3000";
// eslint-disable-next-line react/prop-types
const TeamMemberForm = ({ onFormSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        imageSrc: '',
        altText: '',
        link: ''
    });

    const [imageFile, setImageFile] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const uploadImage = async () => {
        if (!imageFile) return null;

        const formData = new FormData();
        formData.append('image', imageFile);

        const response = await fetch(`${backend}/api/team/image`, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to upload image');
        }

        const result = await response.json();
        return result.imageUrl; // Assuming the server responds with an object containing the image URL
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            let imageSrc = formData.imageSrc;

            if (imageFile) {
                imageSrc = await uploadImage();
            }

            const response = await fetch(`${backend}/api/addTeamMember`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...formData, imageSrc })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Form submitted successfully:', result);

            if (onFormSubmit) {
                onFormSubmit(result.teamMembers);
            }

            // Clear form fields after successful submission
            setFormData({
                name: '',
                role: '',
                imageSrc: '',
                altText: '',
                link: ''
            });
            setImageFile(null);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form className="team-member-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="role">Role:</label>
                <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="imageFile">Image:</label>
                <input
                    type="file"
                    id="imageFile"
                    name="imageFile"
                    onChange={handleFileChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="altText">Alt Text:</label>
                <input
                    type="text"
                    id="altText"
                    name="altText"
                    value={formData.altText}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="link">Link (optional):</label>
                <input
                    type="url"
                    id="link"
                    name="link"
                    value={formData.link}
                    onChange={handleInputChange}
                />
            </div>

            <button type="submit">Add Team Member</button>
        </form>
    );
};

export default TeamMemberForm;
