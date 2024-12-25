import React from "react";
import { FaMedal } from "react-icons/fa6";
import education from "../assets/education.png";
import star from "../assets/star.png";

const Education = () => {
  return (
    <div className="bg-sky-2 py-8 lg:py-16">
      <div className="container max-sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2   gap-4">
          <div className="order-last lg:order-first">
            

             <div className="max-md:py-6  py-16 ">
                        <div className="flex justify-end">
                          <img src={star} alt="" />
                        </div>
                        <div className="max-lg:flex max-lg:flex-col max-lg:items-center">
                          <p className="text-lg  font-normal	text-secondary tracking-[7px] mb-3">
                          Education
                          </p>
            
                          <h2 className="font-jost font-normal text-4xl md:text-5xl xl:text-6xl text-primary	">
                          My Achievements
                          </h2>
            
                          <p className="text-lg font-normal text-black-2 leading-[32px] max-lg:max-w-[600px] max-lg:text-center my-8">
                            Sed ut perspiciatis unde omnis iste natus kobita tumi sopno
                            charini hoye khbor nio na sit voluptatem.
                          </p>
                        </div>
            
                        <div className="flex flex-col gap-8 md:gap-9">
                          <div>
                            <div className="flex items-start max-lg:justify-center max-lg:mt-4 md:flex-row  gap-3 md:gap-6">
                              <div className="min-w-[60px] min-h-[60px] md:min-w-[72px] md:min-h-[72px] bg-primary-light flex items-center justify-center rounded-lg">
                                <FaMedal
                                  className="bg-primary-light text-white    "
                                  size={24}
                                />
                              </div>
                              <div >
                                <div>
                                  <h2 className="text-xl md:text-2xl font-Jost text-black-1">
                                    Senior System Engineer
                                  </h2>
                                  <p className="text-md md:text-lg whitespace-nowrap text-black-1 mt-1">
                                    eThemeStudio{" "}
                                    <span className="text-black-3">( 2018 - Running )</span>
                                  </p>
                                </div>
                                <div className="mt-4 ">
                                  <p className="xl:w-[500px] hidden  max-xl:w-[400px] md:block">
                                    Ludantium totam rem aperia meaque ipsa quae ab illo
                                    inven tore veritatis et quasi architecto beatae et vitae
                                    ullam molesti quae quasi.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="mt-4  flex justify-center md:hidden ">
                              <p className="max-md:max-w-[500px] text-center">
                                Ludantium totam rem aperia meaque ipsa quae ab illo inven
                                tore veritatis et quasi architecto beatae et vitae ullam
                                molesti quae quasi.
                              </p>
                            </div>
                          </div>
            
                          <div>
                            <div className=" items-start flex max-lg:justify-center  md:flex-row  gap-3 md:gap-6">
                              <div className="min-w-[60px] min-h-[60px] md:min-w-[72px] md:min-h-[72px] bg-primary-light flex items-center justify-center rounded-lg">
                                <FaMedal
                                  className="bg-primary-light text-white    "
                                  size={24}
                                />
                              </div>
                              <div className="">
                                <div>
                                  <h2 className="text-xl md:text-2xl font-Jost text-black-1">
                                    Senior System Engineer
                                  </h2>
                                  <p className="text-md md:text-lg whitespace-nowrap text-black-1 mt-1">
                                    eThemeStudio{" "}
                                    <span className="text-black-3">( 2018 - Running )</span>
                                  </p>
                                </div>
                                <div className="mt-4 ">
                                  <p className="xl:w-[500px] hidden max-xl:w-[400px] md:block">
                                    Ludantium totam rem aperia meaque ipsa quae ab illo
                                    inven tore veritatis et quasi architecto beatae et vitae
                                    ullam molesti quae quasi.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="mt-4  flex justify-center md:hidden ">
                              <p className="max-md:max-w-[500px] text-center">
                                Ludantium totam rem aperia meaque ipsa quae ab illo inven
                                tore veritatis et quasi architecto beatae et vitae ullam
                                molesti quae quasi.
                              </p>
                            </div>
                          </div>
            
                          <div>
                            <div className=" items-start flex max-lg:justify-center  md:flex-row  gap-3 md:gap-6">
                              <div className="min-w-[60px] min-h-[60px] md:min-w-[72px] md:min-h-[72px] bg-primary-light flex items-center justify-center rounded-lg">
                                <FaMedal
                                  className="bg-primary-light text-white    "
                                  size={24}
                                />
                              </div>
                              <div className="">
                                <div>
                                  <h2 className="text-xl md:text-2xl font-Jost text-black-1">
                                    Senior System Engineer
                                  </h2>
                                  <p className="text-md md:text-lg whitespace-nowrap text-black-1 mt-1">
                                    eThemeStudio{" "}
                                    <span className="text-black-3">( 2018 - Running )</span>
                                  </p>
                                </div>
                                <div className="mt-4 ">
                                  <p className="xl:w-[500px] hidden max-xl:w-[400px] md:block">
                                    Ludantium totam rem aperia meaque ipsa quae ab illo
                                    inven tore veritatis et quasi architecto beatae et vitae
                                    ullam molesti quae quasi.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="mt-4  flex justify-center md:hidden ">
                              <p className="max-md:max-w-[500px] text-center">
                                Ludantium totam rem aperia meaque ipsa quae ab illo inven
                                tore veritatis et quasi architecto beatae et vitae ullam
                                molesti quae quasi.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
          </div>

          <div className="flex  max-lg:justify-center ">
            <img
              src={education}
              alt=""
              className="h-full w-[600px] object-cover rounded-xl pb-8 sm:pb-16 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
