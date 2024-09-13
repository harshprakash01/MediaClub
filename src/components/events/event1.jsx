import React from "react";

const Event1 = () => {
    return (
        <>
            <h1 className="text-8xl text-center event-header"
                style={{fontFamily:'Josefin_Sans'}}
            >Event</h1>
            <div className="text6xl mt-8">
                <p style={{
                    float: 'left',
                    width: '60%',
                    marginLeft: '50px'
                }}
                   className={'text-6xl mb-2'}>
                    Name
                </p>
                <p style={{
                    float: 'left',
                    width: '60%',
                    marginLeft: '50px'
                }}
                   className={'text-2xl'}>
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                    default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                    infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                    <div style={{textAlign: 'center', marginLeft:'60px', marginTop: '20px'}}>
                        <button
                            className="css-button-sliding-to-left--green"
                        >
                            Registration
                        </button>
                    </div>
                </p>

            </div>
            <img
                style={{
                    width: '30%',
                    height: '50%',
                    float: 'right',
                    marginRight: '50px'
                }}
                className="img-fluid"
                src={('../../../public/assets/img.png')}
                alt="Event"
            />



        </>
    );
}

export default Event1;
