import React, { useState, useEffect, useRef } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
    const [percentages, setPercentages] = useState({ "Transcript – Subtitle Skills  ": 0, "Microsoft Office Skills  ": 0, "Dubbing Videos ": 0, "Social Media Designer ": 0, "Video Montage & Editing. ": 0, "CatTools & CaiTools skills  ": 0 });
    const sectionRef = useRef(null);

    const targetPercentages = { "Transcript – Subtitle Skills  ": 95, "Microsoft Office Skills  ": 95, "Dubbing Videos ": 90, "Social Media Designer ": 90, "Video Montage & Editing. ": 85, "CatTools & CaiTools skills  ": 85 };

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
                <div className="grid grid-cols-1  gap-6">
                    <div className="flex flex-col max-lg:items-center">
                        <h2 className="font-jost font-normal text-4xl md:text-5xl xl:text-6xl text-primary text-center mb-16">
                            My Skills
                        </h2>
                       
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
