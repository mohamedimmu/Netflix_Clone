import React, { useEffect, useState } from 'react';
import './Navbar.css'

function Navbar() {
    const [show, handleShow] = useState(false);

    // useEffect(() => {
    //     window.addEventListener('scroll', ()=> {
    //         if(window.scrollY > 100) {
    //             handleShow(true);
    //         }else{
    //             handleShow(false)
    //             console.log("hello1")
    //         };
    //     });
    //     return () => {
    //         console.log("hello2");
    //         window.removeEventListener('scroll');
            
    //     }
    // }, [])

    

    useEffect(() => {
        const sectionBannner = document.querySelector(".banner__content");
        const options = {
            root: null,
            threshold: 0,
            rootMargin: "-200px"
        }
        const obs = new IntersectionObserver(function(entries){
            const ent = entries[0].isIntersecting;
            if(!ent){
                handleShow(true);
            }else handleShow(false)
        }, options)
    
        obs.observe(sectionBannner);

    }, [])
    


  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
         />
         <img
         className="nav__avatar"
         src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
         alt="Netflix Avatar"
         />
    </div>
  )
}

export default Navbar