import React from "react";
import person from "../assets/person.png";
import star from "../assets/star.png";
import { RiShoppingBag4Fill } from "react-icons/ri";

const Experience = () => {
  return (
    <div id="work" className="bg-sky-2 py-16">
      <div className="container max-sm:px-4">
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
          <div className="flex max-lg:justify-center ">
            <img
              src={person}
              alt=""
              className="h-full w-[600px] object-cover rounded-xl "
            />
          </div>
          <div className="max-sm:py-6  py-16 ">
            <div className="flex justify-end">
              <img src={star} alt="" />
            </div>
            <div className="max-lg:flex max-lg:flex-col max-lg:items-center">
              <p className="text-lg  font-normal	text-secondary tracking-[7px] mb-3">
                Work Experience
              </p>

              <h2 className="font-jost font-normal text-4xl md:text-5xl xl:text-6xl text-primary	">
                My Experience
              </h2>

              {/* <p className="text-lg font-normal text-black-2 leading-[32px] max-lg:max-w-[600px] max-lg:text-center my-8">
              Executive and Academic Director of Baad Institute for 
              Languages 
              </p> */}
            </div>

            <div className="flex flex-col gap-8 md:gap-9 my-12 ">
              <div>
                <div className="flex items-start flex-col max-md:items-center max-lg:justify-center max-lg:mt-4 md:flex-row  gap-3 md:gap-6">
                  <div className="min-w-[60px] min-h-[60px] md:min-w-[72px] md:min-h-[72px] bg-primary-light flex items-center justify-center rounded-lg">
                    <RiShoppingBag4Fill
                      className="bg-primary-light text-white    "
                      size={24}
                    />
                  </div>
                  <div  className="max-md:text-center">
                    <div>
                      <h2 className="text-xl md:text-2xl font-Jost text-black-1">
                        Executive and Academic Director
                      </h2>
                      <p className="text-md md:text-lg whitespace-nowrap text-black-1 mt-1">
                        Baad Institute for Languages
                        {/* <span className="text-black-3">( 2018 - Running )</span> */}
                      </p>
                    </div>
                    <div className="mt-4 ">
                      {/* <p className="xl:w-[500px] hidden  max-xl:w-[400px] md:block">
                        Ludantium totam rem aperia meaque ipsa quae ab illo
                        inven tore veritatis et quasi architecto beatae et vitae
                        ullam molesti quae quasi.
                      </p> */}
                    </div>
                  </div>
                </div>
                <div className="mt-4  flex justify-center md:hidden ">
                  {/* <p className="max-md:max-w-[500px] text-center">
                    Ludantium totam rem aperia meaque ipsa quae ab illo inven
                    tore veritatis et quasi architecto beatae et vitae ullam
                    molesti quae quasi.
                  </p> */}
                </div>
              </div>

              <div>
                <div className=" items-start flex flex-col max-md:items-center max-lg:justify-center  md:flex-row  gap-3 md:gap-6">
                  <div className="min-w-[60px] min-h-[60px] md:min-w-[72px] md:min-h-[72px] bg-primary-light flex items-center justify-center rounded-lg">
                    <RiShoppingBag4Fill
                      className="bg-primary-light text-white    "
                      size={24}
                    />
                  </div>
                  <div className="max-md:text-center">
                    <div>
                      <h2 className="text-xl md:text-2xl font-Jost text-black-1">
                        Chinese Instructor & Supervisor
                      </h2>
                      <p className="text-md md:text-lg whitespace-nowrap text-black-1 mt-1">
                        AlKon Internationl School

                        <span className="text-black-3"> ( Apr 2024-present  )</span>
                      </p>
                    </div>
                    <div className="mt-4 ">
                      {/* <p className="xl:w-[500px] hidden max-xl:w-[400px] md:block">
                        Ludantium totam rem aperia meaque ipsa quae ab illo
                        inven tore veritatis et quasi architecto beatae et vitae
                        ullam molesti quae quasi.
                      </p> */}
                    </div>
                  </div>
                </div>
                <div className="mt-4  flex justify-center md:hidden ">
                  {/* <p className="max-md:max-w-[500px] text-center">
                    Ludantium totam rem aperia meaque ipsa quae ab illo inven
                    tore veritatis et quasi architecto beatae et vitae ullam
                    molesti quae quasi.
                  </p> */}
                </div>
              </div>

              <div>
                <div className=" items-start flex flex-col max-md:items-center max-lg:justify-center  md:flex-row  gap-3 md:gap-6">
                  <div className="min-w-[60px] min-h-[60px] md:min-w-[72px] md:min-h-[72px] bg-primary-light flex items-center justify-center rounded-lg">
                    <RiShoppingBag4Fill
                      className="bg-primary-light text-white    "
                      size={24}
                    />
                  </div>
                  <div className="max-md:text-center">
                    <div>
                      <h2 className="text-xl md:text-2xl font-Jost text-black-1">
                        Chinese Instructor
                      </h2>
                      <p className="text-md md:text-lg whitespace-nowrap text-black-1 mt-1">
                        Enjaz Institute
                        <span className="text-black-3"> (  Sep 2023- April2024  )</span>
                      </p>
                    </div>
                    <div className="mt-4 ">
                      <p className="xl:w-[500px] hidden max-xl:w-[400px] md:block">
                        Taught Chinese language courses for five months at Enjaz Language
                        Institute in Dammam, a branch of the Continuing Education Center
                        at Imam Abdul Rahman bin Faisal University. Instructed around 200
                        students, focusing on language proficiency and cultural awareness.
                        Employed diverse teaching methods, including both in-person and
                        online instruction, to meet the varied learning preferences of
                        students. Provided technical training on translation assistance
                        programs like CAT tools, CAI tools, and subtitling software to
                        enhance translation efficiency and accuracy for both students and
                        instructors.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4  flex justify-center md:hidden ">
                  <p className="max-md:max-w-[500px] text-center">
                    Taught Chinese language courses for five months at Enjaz Language
                    Institute in Dammam, a branch of the Continuing Education Center
                    at Imam Abdul Rahman bin Faisal University. Instructed around 200
                    students, focusing on language proficiency and cultural awareness.
                    Employed diverse teaching methods, including both in-person and
                    online instruction, to meet the varied learning preferences of
                    students. Provided technical training on translation assistance
                    programs like CAT tools, CAI tools, and subtitling software to
                    enhance translation efficiency and accuracy for both students and
                    instructors.
                  </p>
                </div>
              </div>

              <div>
                <div className=" items-start  flex flex-col max-md:items-center max-lg:justify-center  md:flex-row  gap-3 md:gap-6">
                  <div className="min-w-[60px] min-h-[60px] md:min-w-[72px] md:min-h-[72px] bg-primary-light flex items-center justify-center rounded-lg">
                    <RiShoppingBag4Fill
                      className="bg-primary-light text-white    "
                      size={24}
                    />
                  </div>
                  <div className="max-md:text-center">
                    <div>
                      <h2 className="text-xl md:text-2xl font-Jost text-black-1">
                        Chinese Instructor
                      </h2>
                      <p className="text-md md:text-lg whitespace-nowrap text-black-1 mt-1">
                        Bayt ElHekma
                        <span className="text-black-3"> (  Sep 2021- 2023   )</span>
                      </p>
                    </div>
                    <div className="mt-4 ">
                      <p className="xl:w-[500px] hidden max-xl:w-[400px] md:block">
                        Chinese Language Instructor: Provided comprehensive Chinese language training at
                        Bayt AlHekma from 2021 to 2023
                        Design and Video Production: Developed educational videos, Designs and
                        promotional materials to support learning objectives and attract new students to
                        the program
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4  flex justify-center md:hidden ">
                  <p className="max-md:max-w-[500px] text-center">
                    Chinese Language Instructor: Provided comprehensive Chinese language training at
                    Bayt AlHekma from 2021 to 2023
                    Design and Video Production: Developed educational videos, Designs and
                    promotional materials to support learning objectives and attract new students to
                    the program
                  </p>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
