import React from 'react';
import TeamCard from '../HelperComponents/TeamCard.jsx'
import '../CSS/background.scss'

const Team = () => {
    return (
        <section>
            <h2 className={"heading-font"}>our team</h2>
            <p className={"p-font"}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, praesentium
                veritatis voluptatibus ut consequuntur quas consequatur omnis id rem obcaecati.</p>
            <div className="cards">
                <TeamCard
                    imageSrc="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    altText="Joss Anderson"
                    name="Joss Anderson"
                    role="Art Director"
                    link="https://harshprakash.com"
                />
                <TeamCard
                    imageSrc="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    altText="Joss Anderson"
                    name="Joss Anderson"
                    role="Art Director"
                />
                <TeamCard
                    imageSrc="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    altText="Joss Anderson"
                    name="Joss Anderson"
                    role="Art Director"
                />
                <TeamCard
                    imageSrc="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    altText="Joss Anderson"
                    name="Joss Anderson"
                    role="Art Director"
                />
            </div>
        </section>
    );
};

export default Team;
