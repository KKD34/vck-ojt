import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  const [ isDrawerOpen ,setIsDrawerOpen ] = useState(false);
  const toggleDrawer = () => { setIsDrawerOpen (! isDrawerOpen);

  };
  const closeDrawer = () => {
    setIsDrawerOpen (false);
  }
  return (
    <>
    <header className="main-header">
    <h3 className="logo"> Vivekanand College</h3>
    <nav className='main-desktop-nav'>
      <Link to="/home" className="main">Home</Link>
      <Link to="/about" className="main">About</Link>
      <Link to="/courses" className="main">Courses</Link>
      <Link to="/contact" className="main">Contact</Link>
      <Link to="/admission" className="main" style={{ backgroundColor:"#28a745",fontWeight:"700",marginRight:"50px" , borderRadius:"5px",padding:"10px 20px"}}>Apply Now!</Link>
    </nav>
    <button className=" hamburger-menu" onClick={toggleDrawer}>
      <span className='hamburger-icon'></span>
      <span className='hamburger-icon'></span>
      <span className='hamburger-icon'></span>
      
    </button>
    {/* Drawer menu for mobile */}
    <nav className={`drawer-nav ${isDrawerOpen ? "open" : ""}`}>
        <button className="close-drawer-btn" onClick={toggleDrawer}>
          ✕
        </button>
     <Link to="/home" className="main"  onClick={closeDrawer} >Home</Link>
     
      <Link to="/about" className="main"  onClick={closeDrawer} >About</Link>
      
    
      <Link to="/courses" className="main"  onClick={closeDrawer} >Courses</Link>
      
      <Link to="/contact" className="main"  onClick={closeDrawer} >Contact</Link>
     
      <Link to="/admission" className="main"  onClick={closeDrawer}  style={{ backgroundColor:"green",marginRight:"80px"}}>Apply Now!</Link>
    </nav>

    {isDrawerOpen && <div className="drawer-overlay" onClick={toggleDrawer}>
      </div>}

    </header>
    </>
  )
}
export default Header;