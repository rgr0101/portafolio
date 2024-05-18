import React from "react";
import "./MobileNavbar.css";

const MobileNavbar = ({ isOpen, toggleMenu }) => {
    
    return (
        <>
            <div
                className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}
            >
                <div className='mobile-menu-container'>
                    <div className='logo'>
                        <p>
                            Roger <strong>Pacheco</strong>
                        </p>
                    </div>

                    <ul>
                        <li>
                            <a href='#' className='menu-item'>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href='#' className='menu-item'>
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href='#' className='menu-item'>
                                Experience
                            </a>
                        </li>
                        <li>
                            <a href='#' className='menu-item'>
                                Contact
                            </a>
                        </li>

                        <button className='contact-btn' onClick={() => {}}>
                            Hire Me
                        </button>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MobileNavbar;
