import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faCodepen, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import "../CSS/teammemberdetails.css"

const TeamMemberDetails = () => {
    const { id } = useParams();
    const [member, setMember] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTeamMember = async () => {
            try {
                const response = await fetch('http://localhost:3000/getTeamMembers');
                const data = await response.json();
                const foundMember = data.find(member => member.id === parseInt(id, 10));
                setMember(foundMember);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching team member:', error);
            }
        };

        fetchTeamMember();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!member) {
        return <div>Team member not found</div>;
    }

    return (
        <main className="profile">
            <div className="profile-bg"></div>
            <section className="container">
                <aside className="profile-image">
                    <img src={member.imageSrc} alt={member.name} className="profile-pic" />
                    <a className="camera" href="#">
                        <i className="fas fa-camera"></i>
                    </a>
                </aside>
                <section className="profile-info" style={{ color: "black" }}>
                    <h1 className="first-name">{member.name.split(' ')[0]}</h1>
                    <h1 className="second-name">{member.name.split(' ')[1]}</h1>
                    <h2>ABOUT</h2>
                    <p>{member.about}</p>

                    <aside className="social-media-icons">
                        {member.twitter && (
                            <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        )}
                        {member.codepen && (
                            <a href={member.codepen} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faCodepen} />
                            </a>
                        )}
                        {member.github && (
                            <a href={member.github} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        )}
                        {member.medium && (
                            <a href={member.medium} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faMedium} />
                            </a>
                        )}
                    </aside>
                </section>
            </section>
            <section className="statistics">
                <button className="icon arrow left"></button>
                <button className="icon arrow right"></button>
                <p><strong>{member.followers}</strong> Followers</p>
                <p><strong>{member.following}</strong> Following</p>
                <p><strong>{member.likes}</strong> Likes</p>
            </section>
            <button className="icon close"></button>
        </main>
    );
};

export default TeamMemberDetails;
