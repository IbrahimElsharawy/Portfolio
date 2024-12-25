import React, { useState, useEffect, useRef } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
    const [percentages, setPercentages] = useState({ skill1: 0, skill2: 0, skill3: 0 ,skill4:0, skill5:0,skill6:0, });

    const sectionRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setPercentages({ skill1: 80, skill2: 95, skill3: 90 ,skill4:75, skill5:60,skill6:50});
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

    return (
        <div id='skills' className="bg-sky-2 py-8 md:py-16">
            <div className="container max-sm:px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className='flex flex-col max-lg:items-center'>
                        <h2 className="font-jost font-normal text-4xl md:text-5xl xl:text-6xl text-primary">
                            My Skills
                        </h2>
                        <p className="text-lg max-sm:text-center max-sm:w-[400px] max-sm:px-4 font-normal text-black-2 leading-[32px] my-8">
                            Sed ut perspiciatis unde omnis iste natus Sed ut perspiciatis unde omnis iste natus
                            kobita tumi sopno charini hoye khbor nio na sit voluptatem accusantium dolore.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

                        <div className='flex flex-col items-center'>
                            <div ref={sectionRef} className="w-32 h-32">
                                <CircularProgressbar
                                    percentage={percentages.skill1}
                                    text={`${percentages.skill1}%`}
                                    styles={{
                                        path: {
                                            stroke: '#3C5B6F', // أخضر مثلاً
                                        },
                                        text: {
                                            fill: '#000', // أسود
                                            fontSize: '20px',
                                        },
                                        trail: {
                                            stroke: '#e6e6e6', // رمادي فاتح
                                        },
                                    }}
                                />

                            </div>

                            <div>
                                <p className='text-center black-1 text-lg mt-4'>Web Development</p>

                            </div>
                        </div>



                        <div className='flex flex-col items-center'>
                            <div ref={sectionRef} className="w-32 h-32">
                                <CircularProgressbar
                                    percentage={percentages.skill2}
                                    text={`${percentages.skill2}%`}
                                    styles={{
                                        path: {
                                            stroke: '#3C5B6F', // أخضر مثلاً
                                        },
                                        text: {
                                            fill: '#000', // أسود
                                            fontSize: '20px',
                                        },
                                        trail: {
                                            stroke: '#e6e6e6', // رمادي فاتح
                                        },
                                    }}
                                />

                            </div>

                            <div>
                                <p className='text-center black-1 text-lg mt-4'>Web Development</p>

                            </div>
                        </div>


                        <div className='flex flex-col items-center'>
                            <div ref={sectionRef} className="w-32 h-32">
                                <CircularProgressbar
                                    percentage={percentages.skill3}
                                    text={`${percentages.skill3}%`}
                                    styles={{
                                        path: {
                                            stroke: '#3C5B6F', // أخضر مثلاً
                                        },
                                        text: {
                                            fill: '#000', // أسود
                                            fontSize: '20px',
                                        },
                                        trail: {
                                            stroke: '#e6e6e6', // رمادي فاتح
                                        },
                                    }}
                                />

                            </div>

                            <div>
                                <p className='text-center black-1 text-lg mt-4'>Web Development</p>

                            </div>
                        </div>



                        <div className='flex flex-col items-center'>
                            <div ref={sectionRef} className="w-32 h-32">
                                <CircularProgressbar
                                    percentage={percentages.skill4}
                                    text={`${percentages.skill4}%`}
                                    styles={{
                                        path: {
                                            stroke: '#3C5B6F', // أخضر مثلاً
                                        },
                                        text: {
                                            fill: '#000', // أسود
                                            fontSize: '20px',
                                        },
                                        trail: {
                                            stroke: '#e6e6e6', // رمادي فاتح
                                        },
                                    }}
                                />

                            </div>

                            <div>
                                <p className='text-center black-1 text-lg mt-4'>Web Development</p>

                            </div>
                        </div>


                        <div className='flex flex-col items-center'>
                            <div ref={sectionRef} className="w-32 h-32">
                                <CircularProgressbar
                                    percentage={percentages.skill5}
                                    text={`${percentages.skill5}%`}
                                    styles={{
                                        path: {
                                            stroke: '#3C5B6F', // أخضر مثلاً
                                        },
                                        text: {
                                            fill: '#000', // أسود
                                            fontSize: '20px',
                                        },
                                        trail: {
                                            stroke: '#e6e6e6', // رمادي فاتح
                                        },
                                    }}
                                />

                            </div>

                            <div>
                                <p className='text-center black-1 text-lg mt-4'>Web Development</p>

                            </div>
                        </div>


                        <div className='flex flex-col items-center '>
                            <div ref={sectionRef} className="w-32 h-32">
                                <CircularProgressbar
                                    percentage={percentages.skill6}
                                    text={`${percentages.skill6}%`}
                                    styles={{
                                        path: {
                                            stroke: '#3C5B6F', // أخضر مثلاً
                                        },
                                        text: {
                                            fill: '#000', // أسود
                                            fontSize: '20px',
                                        },
                                        trail: {
                                            stroke: '#e6e6e6', // رمادي فاتح
                                        },
                                    }}
                                />

                            </div>

                            <div>
                                <p className='text-center  black-1 text-lg mt-4'>Web Development</p>

                            </div>
                        </div>




                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
