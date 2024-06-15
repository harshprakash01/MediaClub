import React, { useState, useEffect } from 'react';
import TeamCard from '../HelperComponents/TeamCard'; // Assuming this is correctly imported
import '../CSS/background.scss'; // Assuming this is correctly imported

const backend = "https://media-club-backend-six.vercel.app"; // Update with your Vercel deployment URL

const Team = () => {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        const fetchTeamMembers = async () => {
            try {
                const response = await fetch(`${backend}/getTeamMembers`);
                if (!response.ok) {
                    throw new Error('Failed to fetch team members');
                }
                const data = await response.json();

                // Check if data is an array (for safety)
                if (!Array.isArray(data)) {
                    throw new Error('Team members data is not an array');
                }

                setTeamMembers(data);
            } catch (error) {
                console.error('Error fetching team members:', error);
                // Handle error state or retry mechanism
            }
        };

        fetchTeamMembers();
    }, []);

    console.log('teamMembers:', teamMembers); // For debugging purposes

    return (
        <section>
            <h2 className="heading-font">Our Team</h2>
            <p className="p-font">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, praesentium veritatis voluptatibus ut
                consequuntur quas consequatur omnis id rem obcaecati.
            </p>
            <div className="cards">
                {teamMembers.map(member => (
                    <TeamCard
                        key={member.id}
                        imageSrc={member.imageSrc}
                        altText={member.altText}
                        name={member.name}
                        role={member.role}
                        link={member.link}
                    />
                ))}
            </div>
        </section>
    );
};

export default Team;
