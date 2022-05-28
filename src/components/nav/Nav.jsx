import React from 'react';
import './nav.css';
import {BiHome} from 'react-icons/bi';
import {BiUser} from 'react-icons/bi';
import {GiTrophyCup} from 'react-icons/gi';
import {RiHandHeartLine} from 'react-icons/ri';
import {AiOutlinePhone} from 'react-icons/ai';
import {useState} from 'react';


const Nav = () => {
    const [activeNav,setActiveNav] = useState('#')
    return(
        <nav>
            <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHome/></a>
            <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser/></a>
            <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiTrophyCup/></a> 
            <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiHandHeartLine/></a>
            <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlinePhone/></a>
        </nav>
    ) 
}

export default Nav  