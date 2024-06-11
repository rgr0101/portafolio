import React, { useState }  from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import MobileNavbar from "./MobileNavbar/MobileNavbar";

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    };

    return (
        <>
            <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu}/>

            <nav className='nav-wrapper'>
                <div className='nav-content'>
                    <div className="logo">
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

                    <button className='menu-btn' onClick={(toggleMenu)}>
                        {openMenu ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
