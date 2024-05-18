import React, { useEffect } from "react";
import "./Hero.css";
import Typewriter from "typewriter-effect/dist/core";

const Hero = () => {

    useEffect(() => {
        const typewriter = new Typewriter("#typewriter", {
            strings: ["web developer", "student"],
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
            <section className='hero-container'>
                <div className="hero-content">
                    <h2>
                        <p>Hi, Im Roger a  <strong id='typewriter'>web developer </strong></p>
                    </h2>
                    <p>
                        Passionate Developer | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, veritatis
                    </p>
                </div>
            </section>
        </>
    );
};

export default Hero;
