
import about from "../assets/about.png";
import AnimatedCircle from "./shared/AnimatedCircle";


const About = () => {
  return (
    <div id="about" className="bg-sky-2 pt-24 sm:pb-16">
      <div className="container max-sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-20 xl:gap-0 ">
          <div className="relative flex items-center justify-center lg:pr-8">
            <div className="w-fit relative">
              <p className=" text-sky-1 z-[100] absolute  rotate-[270deg] left-[-340px] bottom-[160px] text-[170px]  font-jost">Youssef</p>
              <img src={about} alt="" className="relative z-10 " />
              <div className=" w-32 h-32 absolute top-7 right-4 border-4 border-black transform translate-x-1/2 -translate-y-1/2 z-0"></div>
              <div className=" w-14 h-14 absolute top-44 right-[0px] rotate-45 bg-sky-2  transform translate-x-1/2 -translate-y-1/2 z-10"></div>
              <div className=" w-8 h-14 absolute  right-16  bg-secondary  transform translate-x-1/2 -translate-y-1/2 z-10"></div>
              <div className=" w-20 h-20 absolute  left-[-100px] top-28  bg-secondary  transform translate-x-1/2 -translate-y-1/2 z-10"></div>
              <a href="/src/assets/Youssef Ali Youssef CV.pdf" download>
              <AnimatedCircle />
              </a>
            </div>

   
          </div>

          <div>
            <div className="flex items-center flex-col">
              <p className="text-lg  font-normal	text-secondary tracking-[7px] mb-3">
                About Me
              </p>
              <h2 className="font-jost max-lg:text-center font-normal text-4xl md:text-5xl xl:text-6xl 	">
                I Develop System that Works
              </h2>
              <p className="text-lg max-sm:max-w-[500px] max-sm:text-center font-normal text-black-2 leading-[32px] my-8">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia dese runt mollit anim id est laboru doloremque
                laudantium, totaeaque ipsa quae ab illo inven tore veritatis et
                quasi architecto beatae vitae.
              </p>

              <p className="text-lg font-normal text-black-2 ">
                Oremque laudantium, totaeaque ipsa quae
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-8   my-8  border-t border-b border-border-1 py-6 text-black-2">
              <div className="space-y-3">
                <p>Name</p>
                <p>Age</p>
                <p>Occupation</p>
              </div>

              <div className="space-y-3">
                <p>James Smith</p>
                <p>29 Years</p>
                <p>System Engineer</p>
              </div>

              <div className="space-y-3">
                <p>Phone</p>
                <p>Email</p>
                <p>Nationality</p>
              </div>

              <div className="space-y-3">
                <p>+123 456 7890</p>
                <p>hello@thames.com</p>
                <p>Bangladeshi</p>
              </div>
            </div>
            <div className="text-left lg:text-right mt-4">
              <h2 className="font-normal text-xl	uppercase ">
                Bruce Wayne{" "}
                <span className="ml-2 text-sm text-black-3">
                  Software Architect, Google Inc.
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
