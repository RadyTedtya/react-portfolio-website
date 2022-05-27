import React from "react";
import './nav.css';
import {BiHome} from 'react-icons/bi';
import {BiUser} from 'react-icons/bi';
import {GiTrophyCup} from 'react-icons/gi';
import {RiHandHeartLine} from 'react-icons/ri';
import {AiOutlinePhone} from 'react-icons/ai';


const Nav = () => {
    return(
        <nav>
            <a href="#"><BiHome/></a>
            <a href="#about"><BiUser/></a>
            <a href="#experience"><GiTrophyCup/></a> 
            <a href="#services"><RiHandHeartLine/></a>
            <a href="#contact"><AiOutlinePhone/></a>
        </nav>
    ) 
}

export default Nav  