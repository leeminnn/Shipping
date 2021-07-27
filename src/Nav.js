import React, { useEffect, useState } from 'react'
import './CSS/Nav.css';
import {Link} from 'react-scroll';



function Navigation() {
    const [show, handleShow] = useState(false);
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >100 ) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className='nav'>
            <div style={{float:'left'}}>
                <img
                    className="nav_logo"
                    src="https://s3.amazonaws.com/unroll-images-production/projects%2F9735%2F1624606824234-tinder-logo-removebg-preview.png"
                />
            </div>
            <div style={{float:'right', paddingRight:'5%'}}>
                    <div style={{float:'left', marginRight: '20px'}}>
                        <Link activeClass="active" to="form" spy={true} smooth={true}>Sign Up</Link>
                    </div>
                    <div style={{float:'right'}}>
                        <Link activeClass="active" to="footer" spy={true} smooth={true}>Contact Us</Link>
                    </div>
            </div>
            
        </div>
    )
}

export default Navigation