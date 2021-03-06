import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const NavBar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(()=>{
        const linksH = linksRef.current.getBoundingClientRect().height;
        if(showLinks){
            linksContainerRef.current.style.height = `${linksH}px`
        }else{
            linksContainerRef.current.style.height = `0px`
        }
    }, [showLinks])
  return (
    <nav>
        <div className="nav-center">
            <div className="nav-header">
                <img src={logo} alt="Logo" />
                <button className='nav-toggle' onClick={()=> setShowLinks(!showLinks)}><FaBars /></button>
            </div>
            {/* <div className={`${showLinks?'links-container show-container':'links-container'}`}>
                <ul className="links">
                    {links.map((link)=>{
                        const {id, url, text} = link;
                        return <li key={id}><a href={url}>{text}</a></li>
                    })}
                </ul>
            </div> */}
            <div className='links-container' ref={linksContainerRef}>
                <ul className="links" ref={linksRef}>
                    {links.map((link)=>{
                        const {id, url, text} = link;
                        return <li key={id}><a href={url}>{text}</a></li>
                    })}
                </ul>
            </div>
            <ul className="social-icons">
                {social.map((soc)=>{
                    const{id, url, icon} = soc;
                    return <li key={id}><a href={url}>{icon}</a></li>
                })}
            </ul>
        </div>
    </nav>
  )
}

export default NavBar