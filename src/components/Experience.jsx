import React from 'react'
import person from '../assets/person.png'
import star from '../assets/star.png'
import { RiShoppingBag4Fill } from "react-icons/ri";

const Experience = () => {
    return (
        <div className="bg-sky-2 py-16">
            <div className='container'>

                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='flex max-lg:justify-center '>
                        <img src={person} alt="" className='h-full w-[600px] object-cover rounded-xl ' />
                    </div>
                    <div className='py-16'>
                        <div className='flex justify-end'>
                            <img src={star} alt="" />
                        </div>
                        <div>
                            <p className='text-lg  font-normal	text-secondary tracking-[7px] mb-3'>Work Experience</p>

                            <h2 className='font-jost font-normal text-4xl md:text-5xl xl:text-6xl 	'>My Experience</h2>

                            <p className='text-lg font-normal text-black-2 leading-[32px] my-8'>Sed ut perspiciatis unde omnis iste natus kobita tumi sopno
                                charini hoye khbor nio na sit voluptatem.</p>

                        </div>

                        <div className='flex flex-col gap-4  md:gap-9'>
                            <div>
                                <div className='flex items-start    md:flex-row  gap-3 md:gap-6'>
                                    <div className='min-w-[60px] min-h-[60px] md:min-w-[72px] md:min-h-[72px] bg-primary-light flex items-center justify-center rounded-lg'>
                                        <RiShoppingBag4Fill className="bg-primary-light text-white    " size={24} />

                                    </div>
                                    <div className='' >
                                        <div>
                                            <h2 className='text-xl md:text-2xl font-Jost text-black-1'>Senior System Engineer</h2>
                                            <p className='text-md md:text-lg whitespace-nowrap text-black-1 mt-1'>eThemeStudio <span className='text-black-3'>( 2018 - Running )</span></p>
                                        </div>
                                        <div className='mt-4 '>
                                            <p className='md:w-[500px] hidden md:block' >Ludantium totam rem aperia meaque ipsa quae ab
                                                illo inven tore veritatis et quasi architecto beatae et
                                                vitae ullam molesti quae quasi.</p>
                                        </div>

                                    </div>


                                </div>
                                <div className='mt-4  block md:hidden '>
                                    <p className='' >Ludantium totam rem aperia meaque ipsa quae ab
                                        illo inven tore veritatis et quasi architecto beatae et
                                        vitae ullam molesti quae quasi.</p>
                                </div>

                            </div>


                            <div>
                                <div className='flex items-start flex   md:flex-row  gap-3 md:gap-6'>
                                    <div className='min-w-[60px] min-h-[60px] md:min-w-[72px] md:min-h-[72px] bg-primary-light flex items-center justify-center rounded-lg'>
                                        <RiShoppingBag4Fill className="bg-primary-light text-white    " size={24} />

                                    </div>
                                    <div className='' >
                                        <div>
                                            <h2 className='text-xl md:text-2xl font-Jost text-black-1'>Senior System Engineer</h2>
                                            <p className='text-md md:text-lg whitespace-nowrap text-black-1 mt-1'>eThemeStudio <span className='text-black-3'>( 2018 - Running )</span></p>
                                        </div>
                                        <div className='mt-4 '>
                                            <p className='md:w-[500px] hidden md:block' >Ludantium totam rem aperia meaque ipsa quae ab
                                                illo inven tore veritatis et quasi architecto beatae et
                                                vitae ullam molesti quae quasi.</p>
                                        </div>

                                    </div>


                                </div>
                                <div className='mt-4  block md:hidden '>
                                    <p className='' >Ludantium totam rem aperia meaque ipsa quae ab
                                        illo inven tore veritatis et quasi architecto beatae et
                                        vitae ullam molesti quae quasi.</p>
                                </div>

                            </div>

                            <div>
                                <div className='flex items-start flex   md:flex-row  gap-3 md:gap-6'>
                                    <div className='min-w-[60px] min-h-[60px] md:min-w-[72px] md:min-h-[72px] bg-primary-light flex items-center justify-center rounded-lg'>
                                        <RiShoppingBag4Fill className="bg-primary-light text-white    " size={24} />

                                    </div>
                                    <div className='' >
                                        <div>
                                            <h2 className='text-xl md:text-2xl font-Jost text-black-1'>Senior System Engineer</h2>
                                            <p className='text-md md:text-lg whitespace-nowrap text-black-1 mt-1'>eThemeStudio <span className='text-black-3'>( 2018 - Running )</span></p>
                                        </div>
                                        <div className='mt-4 '>
                                            <p className='md:w-[500px] hidden md:block' >Ludantium totam rem aperia meaque ipsa quae ab
                                                illo inven tore veritatis et quasi architecto beatae et
                                                vitae ullam molesti quae quasi.</p>
                                        </div>

                                    </div>


                                </div>
                                <div className='mt-4  block md:hidden '>
                                    <p className='' >Ludantium totam rem aperia meaque ipsa quae ab
                                        illo inven tore veritatis et quasi architecto beatae et
                                        vitae ullam molesti quae quasi.</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience