import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import eventData from './event.json'; // Import the JSON directly

// Helper function to convert RGB to Hex
const rgbTHex = (r, g, b) => {
    const toHex = (n) => n.toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};
//
// const Event1 = () => {
//     return (
//         <>
//             {/* Dynamically setting the event name */}
//             <h1 className="text-8xl text-center event-header mb-8" style={{ fontFamily: 'Josefin_Sans' }}>
//                 {eventData.eventName}
//             </h1>
//
//             <div className="text6xl mt-8">
//                 <p
//                     style={{
//                         float: 'left',
//                         width: '60%',
//                         marginLeft: '50px',
//                     }}
//                     className={'text-6xl mb-2'}
//                 >
//                     {eventData.eventName}
//                 </p>
//                 <p
//                     style={{
//                         float: 'left',
//                         width: '50%',
//                         marginLeft: '50px',
//                     }}
//                     className={'text-2xl'}
//                 >
//                     {eventData.description}
//                     <div style={{ textAlign: 'center', marginLeft: '60px', marginTop: '20px' }}>
//                         <Popup trigger={<button className="css-button-sliding-to-left--green"> Register Now </button>} modal>
//               <span style={{ backgroundColor: rgbTHex(155, 31, 83) }}>
//                 <div
//                     style={{
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                     }}
//                     className="mt-28"
//                 >
//                   {/* Dynamically setting the iframe link */}
//                     <iframe
//                         src={eventData.formLink} // Using the form link from the JSON
//                         width="640"
//                         height="800"
//                     >
//                     Loading…
//                   </iframe>
//                 </div>
//               </span>
//                         </Popup>
//                     </div>
//                 </p>
//                 <div style={{ textAlign: 'center', marginTop: '20px' }}></div>
//             </div>
//
//             {/* Dynamically setting the image */}
//             <img
//                 style={{
//                     width: '30%',
//                     height: '50%',
//                     float: 'right',
//                     marginRight: '50px',
//                 }}
//                 className="img-fluid rounded-t-full rounded-b-full "
//                 src={eventData.imagePath} // Dynamically set image source
//                 alt="Event"
//             />
//         </>
//     );
// };

const Event1 = () =>{
    return (
        <>
            <h1 className="text-8xl text-center event-header mb-8" style={{fontFamily: 'Josefin_Sans'}}>
                COMING SOON <br></br> STAY TUNED
            </h1>
        </>
    )
}

export default Event1;
