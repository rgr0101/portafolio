import React, { useRef } from "react";
import "./WorkExperience.css";
import { WORK_EXPERIENCE } from "../../utils/data";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import Slider from "react-slick";

const WorkExperience = () => {
    const sliderRef = useRef();

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000, 
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <section className='experience-container' id="experience">
            <h5>Experiencia</h5>

            <div className='experience-container'>
                <Slider ref={sliderRef} {...settings}>
                    {WORK_EXPERIENCE.map((item) => {
                        return (
                            <ExperienceCard key={item.title} details={item} />
                        );
                    })}
                </Slider>
            </div>
        </section>
    );
};

export default WorkExperience;
