import React from 'react'
import Headroom from 'react-headroom'
import Logo from '../Assets/rockstar.svg'
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RiShareBoxFill } from 'react-icons/ri';
import { FiSearch } from 'react-icons/fi';
import { LuUser } from "react-icons/lu";

const Navbar = () => {
  return (
    <Headroom>
      <nav className='navbar'>
        <div className="nav-logo">
          <a href="/"><img src={ Logo } alt="" /></a>
        </div>
        <div className='nav-first-options'>
          <button className='nav-button'>Games <MdKeyboardArrowDown /></button>
          <button className='nav-button'>Newswire</button>
          <button className='nav-button'>Videos</button>
          <button className='nav-button'>Downloads</button>
          <button className='nav-button'>Store <RiShareBoxFill /></button>
          <button className='nav-button'>Support  <RiShareBoxFill /></button>
        </div>
        <div className='nav-other-options'>
          <button className='nav-button-launcher'>Get Launcher</button>
          <button className='nav-button-search'><FiSearch className='nav-button-search-logo'/></button>
          <button className='nav-button-user'><LuUser className='nav-button-user-logo'/></button>
        </div>
      </nav>
    </Headroom>
  )
}

export default Navbar