import React, { useEffect } from "react";
import "./Hero.css";
import Typewriter from "typewriter-effect/dist/core";

const Hero = () => {

    useEffect(() => {
        const typewriter = new Typewriter("#typewriter", {
            strings: ["desarrollador web.", "programador."],
            autoStart: true,
            loop: true,
            delay: 100,
        });
        return () => {
            typewriter.stop();
        };
    }, []);

    return (
        <>
            <section className='hero-container' id="inicio">
                <div className="hero-content">
                    <h2>
                        <p>Hola, soy Roger un <strong id='typewriter'>desarrolador web. </strong></p>
                    </h2>
                    <p>
                        Desarrollador apasionado con una firme determinación de construir una carrera profesional excepcional.
                    </p>
                </div>
            </section>
        </>
    );
};

export default Hero;
