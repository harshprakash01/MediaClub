import  {useState} from 'react';
import "../CSS/PhoneNabar.css"

const PhoneNavbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (<>
            <>
                <div className="wrap">
                    <img src={"/assets/logo.png"} alt="logo" className="phone-nav-logo" />
                    <div className={`burger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                        <div className="strip burger-strip-2">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </>

        </>

    );
};


export default PhoneNavbar;