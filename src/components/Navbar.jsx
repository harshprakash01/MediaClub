import * as React from 'react';
import ExampleNavigationMenu from '../materialUi/navbar.jsx';

const Navbar = () => {
  return (
    <nav style={{ position: 'fixed', top: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 1000 , color: "white"}}>
      <ul>
        <ExampleNavigationMenu />
        {/* Add other navigation items here if needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
