import React from 'react';
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom';
import eventData from './event.json'; // Import the JSON directly


const EventPhone = () => {
    return (
        <>
            {/* Event Layout for Mobile */}
            <div className="event-container rounded-lg">
                {/* Dynamically setting the image */}
                <img
                    style={{
                        width: '90%',
                        height: 'auto',
                        justifyContent: 'center', // Ensure the child (image) is centered horizontally
                        alignItems: 'center',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginBottom: '2rem',
                    }}
                    className="img-fluid rounded-3xl"
                    src={eventData.imagePath} // Dynamically set image source
                    alt="Event"
                />

                {/* Dynamically setting the event name */}
                <h1 className="text-4xl text-center event-header" style={{ fontFamily: 'Josefin_Sans',marginLeft: '20px', }}>
                    {eventData.eventName}
                </h1>

                <div className="text-lg mt-4">
                    <p
                        style={{
                            marginLeft: '40px',
                            marginRight: 'auto',
                            width : '80%'
                        }}
                        className={'text-2xl mb-2 text-center '}
                    >
                        {eventData.description}
                    </p>
                    <div style={{textAlign: 'center', marginTop: '20px'}}>
                        <Link to={eventData.formLink}>
                        <button className="css-button-sliding-to-left--green mr-20">
                            Register Now
                        </button>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    );
};

export default EventPhone;
