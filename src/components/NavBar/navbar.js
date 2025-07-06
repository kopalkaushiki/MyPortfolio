import React, { useState } from 'react';
import './navbar.css';
import kologo from '../../assets/kologo.png';
import menu from '../../assets/menu.png';
import {Link} from 'react-scroll';

const Navbar=()=> {
    const [showMenu, setShowMenu] = useState(false)
    return(
        <nav className="navbar">
            <img src={kologo} alt="Logo " class="logo"  /> 
              <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={1000} className="desktopMenuListItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='aboutme' spy={true} smooth={true} offset={-50} duration={1000}className="desktopMenuListItem" onClick={()=>setShowMenu(false)}>About Me</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-20} duration={1000}className="desktopMenuListItem"onClick={()=>setShowMenu(false)}>Technical Skills</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-20} duration={1000}className="desktopMenuListItem"onClick={()=>setShowMenu(false)}>Projects</Link>
                <Link activeClass='active' to='education' spy={true} smooth={true} offset={-20} duration={1000}className="desktopMenuListItem"onClick={()=>setShowMenu(false)} >Education</Link>
                <Link activeClass='active' to='extracur' spy={true} smooth={true} offset={-300} duration={1000}className="desktopMenuListItem" onClick={()=>setShowMenu(false)}>Extra Curricular</Link>
                <Link activeClass='active' to='cert' spy={true} smooth={true} offset={-200} duration={1000}className="desktopMenuListItem" onClick={()=>setShowMenu(false)}>Certificates</Link>
            </div>
            <img src={menu} alt="Menu" className="MenuImg" onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style ={{display: showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={1000} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='aboutme' spy={true} smooth={true} offset={-50} duration={1000}className="listItem" onClick={()=>setShowMenu(false)}>About Me</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-20} duration={1000}className="listItem"onClick={()=>setShowMenu(false)}>Technical Skills</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-20} duration={1000}className="listItem"onClick={()=>setShowMenu(false)}>Projects</Link>
                <Link activeClass='active' to='education' spy={true} smooth={true} offset={-20} duration={1000}className="listItem"onClick={()=>setShowMenu(false)} >Education</Link>
                <Link activeClass='active' to='extracur' spy={true} smooth={true} offset={-300} duration={1000}className="listItem" onClick={()=>setShowMenu(false)}>Extra Curricular</Link>
                <Link activeClass='active' to='cert' spy={true} smooth={true} offset={-200} duration={1000}className="listItem" onClick={()=>setShowMenu(false)}>Certificates</Link>
            </div>
            
        </nav>
    )
}
export default Navbar
 
