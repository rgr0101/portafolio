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
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a href='#skills' className='menu-item'>
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href='#experience' className='menu-item'>
                                Experiencia
                            </a>
                        </li>
                        <li>
                            <a href='#contact' className='menu-item'>
                                Contacto
                            </a>
                        </li>

                        <a className='contact-btn' href="https://drive.google.com/file/d/12jzWLYOBAepnfooBUPABKhzNlZymdmuZ/view?usp=sharing" target="blank">
                            Descargar CV
                        </a>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MobileNavbar;
