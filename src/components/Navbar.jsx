import logo from '/assets/logo.png'; // Import the logo image
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div id="header">
            <div className="container2">
                <nav id="header-nav">
                    <Link to="/"><img src={logo} className="logo text" alt="logo"/></Link>
                    <ul id="sidemenu text" style={{}}>
                        <li className="text"> <a><Link to="/">Home</Link></a></li>
                        <li></li>
                        <li  className="text"><a href="/#about">About</a></li>
                        <li  className="text"></li>
                        <li  className="text"><a><Link to="/team">Team</Link></a></li>
                        <li className="text"></li>
                        <li className="text"><a><Link to="/work">Work</Link></a></li>
                        <li className="text"></li>
                        <li className="text"><a><Link to="/contact">Contact</Link></a></li>
                        <li className="text"></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
