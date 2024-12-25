import React from 'react';
import about from '../assets/about.png';

const About = () => {
    return (
        <div className="bg-sky-2 py-16">
            <div className="container max-sm:px-4">
            
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-0 ">
                    <div className="relative">
                        <div className="flex items-center">
                            <h2 className="text-xl  font-bold rotate-[270deg] -ml-14 md:-mr-2">youssef</h2>
                            <img src={about} alt="" className="relative z-10 " />
                        </div>


                        <div className=" w-32 h-32 absolute top-10 right-52 border-2 border-black transform translate-x-1/2 -translate-y-1/2 z-0">
                        </div>
                    </div>

                    <div>
                        <div className=''>
                            <p className='text-lg  font-normal	text-secondary tracking-[7px] mb-3'>About Me</p>
                            <h2 className='font-jost font-normal text-4xl md:text-5xl xl:text-6xl 	'>I Develop System that
                                Works</h2>
                            <p className='text-lg font-normal text-black-2 leading-[32px] my-8'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese
                                runt mollit anim id est laboru doloremque laudantium, totaeaque ipsa quae
                                ab illo inven tore veritatis et quasi architecto beatae vitae.</p>

                            <p className='text-lg font-normal text-black-2 '>Oremque laudantium, totaeaque ipsa quae</p>
                        </div>

                        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8   my-8  border-t border-b border-border-1 py-6 text-black-2'>
                            <div className='space-y-3'>
                                <p>Name</p>
                                <p>Age</p>
                                <p>Occupation</p>

                            </div>

                            <div className='space-y-3'>
                                <p>James Smith</p>
                                <p>29 Years</p>
                                <p>System Engineer</p>

                            </div>

                            <div className='space-y-3'>
                                <p>Phone</p>
                                <p>Email</p>
                                <p>Nationality</p>

                            </div>

                            <div className='space-y-3'>
                                <p>+123 456 7890</p>
                                <p>hello@thames.com</p>
                                <p>Bangladeshi</p>

                            </div>

                        </div>
                        <div className='text-left lg:text-right mt-4'>
                            <h2 className='font-normal text-xl	uppercase '>Bruce Wayne <span className='ml-2 text-sm text-black-3'>Software Architect, Google Inc.</span></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
