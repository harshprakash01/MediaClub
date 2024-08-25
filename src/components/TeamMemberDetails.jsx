import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../CSS/teammemberdetails.css";
const backend = "https://backend.neristmedia.club"; // Update with your Vercel deployment URL
// const backend ="http://localhost:3000/";

const TeamMemberDetails = () => {
    const { id } = useParams();
    const [member, setMember] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTeamMember = async () => {
            try {
                const response = await fetch(`${backend}/getTeamMembers`);
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
                </aside>
                <section className="profile-info" style={{color: "black"}}>
                    <h1 className="first-name">{member.name.split(' ')[0]}</h1>
                    <h1 className="second-name">{member.name.split(' ')[1]}</h1>
                    <h2>ABOUT</h2>
                    <p>{member.about}</p>

                    <aside className="social-media-icons">
                        {member.twitter && (
                            <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="#1DA1F2"
                                          d="M23.643 4.714c-.835.37-1.735.62-2.677.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.906-2.06-1.47-3.4-1.47-2.572 0-4.65 2.078-4.65 4.65 0 .364.042.718.12 1.06-3.873-.194-7.305-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.13 3.733 4.568-.392.106-.803.162-1.227.162-.3 0-.59-.028-.877-.083.59 1.84 2.313 3.18 4.352 3.215-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.115-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.483 2.323-2.42z"/>
                                </svg>
                            </a>
                        )}
                        {member.codepen && (
                            <a href={member.codepen} target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="#000000"
                                          d="M7.68 2.568l.437 1.187 2.538 6.91-1.6 3.953 3.01 2.353-.337 1.177-3.326-2.607-3.328 2.607-.34-1.177 3.01-2.353-1.6-3.954 2.54-6.91 1.437-1.187h-9.538zm-.68 2h8l-1.847 5h-4.14l-1.846-5zm6.804 6h-2.684l1.342 3.664-2.563 2-.326 1.12 2.882-2.258 2.878 2.257-.328-1.12-2.56-2-3.2-.664v2.664l4 3.136 4-3.136v-2.664l-3.2.664zm-8.804 7h17v-2h-17v2z"/>
                                </svg>
                            </a>
                        )}
                        {member.link && (<a href={member.link} target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="#0077B5"
                                          d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>

                                </svg>
                            </a>
                        )}
                        {member.github && (
                            <a href={member.github} target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="#181717"
                                          d="M12 2C6.475 2 2 6.475 2 12c0 4.419 2.865 8.166 6.839 9.49.5.092.682-.218.682-.482 0-.237-.009-.866-.014-1.7-2.782.603-3.37-1.34-3.37-1.34-.455-1.156-1.111-1.464-1.111-1.464-.908-.622.069-.61.069-.61 1.004.072 1.531 1.03 1.531 1.03.891 1.527 2.34 1.087 2.91.832.091-.644.348-1.086.634-1.336-2.22-.252-4.555-1.11-4.555-4.937 0-1.09.39-1.984 1.032-2.68-.103-.253-.448-1.268.097-2.644 0 0 .837-.268 2.75 1.023A9.433 9.433 0 0 1 12 5.655c.84.005 1.688.113 2.485.334 1.913-1.29 2.748-1.023 2.748-1.023.546 1.376.2 2.39.097 2.644.644.696 1.03 1.59 1.03 2.68 0 3.836-2.339 4.682-4.567 4.928.36.307.681.916.681 1.847 0 1.335-.012 2.412-.012 2.742 0 .267.18.578.688.481C19.138 20.162 22 16.417 22 12c0-5.525-4.475-10-10-10z"/>
                                </svg>
                            </a>
                        )}
                        {member.instagram && (
                            <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path
                                        fill="#181717"
                                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                </svg>
                            </a>)}
                    </aside>
                </section>
            </section>
        </main>
    );
};

export default TeamMemberDetails;
