import React, { useState, useEffect, useRef } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
    const [percentages, setPercentages] = useState({ "Web Development": 0, "Hardware Development": 0, "Software Development": 0, "System Application": 0, "Project management": 0, "Data Administration": 0 });
    const sectionRef = useRef(null);

    const targetPercentages = { "Web Development": 80, "Hardware Development": 95, "Software Development": 90, "System Application": 75, "Project management": 60, "Data Administration": 50 };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    // Start animating when section comes into view
                    animateSkills();
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const animateSkills = () => {
        // Start animating from 0 to target value
        const interval = setInterval(() => {
            setPercentages((prev) => {
                let updated = { ...prev };
                let allComplete = true;

                Object.keys(updated).forEach((key) => {
                    if (updated[key] < targetPercentages[key]) {
                        updated[key] = Math.min(updated[key] + 1, targetPercentages[key]);
                        allComplete = false;
                    }
                });

                if (allComplete) clearInterval(interval);
                return updated;
            });
        }, 10); // Adjust this interval for smoothness (30ms is smooth)
    };

    return (
        <div id="skills" className="bg-sky-2 py-8 md:py-16">
            <div className="container max-sm:px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="flex flex-col max-lg:items-center">
                        <h2 className="font-jost font-normal text-4xl md:text-5xl xl:text-6xl text-primary">
                            My Skills
                        </h2>
                        <p className="text-lg max-sm:text-center max-sm:w-[400px] max-sm:px-4 font-normal text-black-2 leading-[32px] my-8">
                            Sed ut perspiciatis unde omnis iste natus Sed ut perspiciatis unde omnis iste natus
                            kobita tumi sopno charini hoye khbor nio na sit voluptatem accusantium dolore.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {/* Repeat for each skill */}
                        {Object.keys(percentages).map((skillKey, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div ref={sectionRef} className="w-32 h-32">
                                    <CircularProgressbar
                                        value={percentages[skillKey]}
                                        text={`${percentages[skillKey]}%`}
                                        styles={{
                                            path: {
                                                stroke: '#3C5B6F',
                                            },
                                            text: {
                                                fill: '#000',
                                                fontSize: '20px',
                                            },
                                            trail: {
                                                stroke: '#e6e6e6',
                                            },
                                        }}
                                    />
                                </div>
                                <div>
                                    <p className="text-center black-1 text-lg mt-4">
                                        {skillKey.replace('skill', 'Skill ')}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
