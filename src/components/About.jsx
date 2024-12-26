
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
              <a href="/YoussefAliYoussefCV.pdf" download>
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
                I am a Chinese language lecturer
              </h2>
              <p className="text-lg max-sm:max-w-[500px] max-sm:text-center font-normal text-black-2 leading-[32px] my-8">
                and translator with extensive experience in teaching and translation. Additionally, I serve as an Academic and Executive Director for language institutes, where I oversee educational programs, ensure academic excellence, and lead strategic initiatives to enhance institutional performance. My expertise lies in fostering cross-cultural communication and developing innovative learning solutions.
              </p>


            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-8   my-8  border-t border-b border-border-1 py-6 text-black-2">
              <div className="space-y-3">
                <p>Name</p>
                <p>Age</p>
                <p>Occupation</p>
              </div>

              <div className="space-y-3">
                <p>Youssef Ali </p>
                <p>29 Years</p>
                <p>Chinese Instructor </p>
              </div>

              <div className="space-y-3">
                <p>Phone</p>
                <p>Email</p>
                <p>Nationality</p>
              </div>

              <div className="space-y-3">
                <div>
                  <a href="https://wa.me/+9660530241747"  target='_blank'>+9660530241747 </a>
                </div>
                <div>
                  <a href="mailto:youssefali909080@gmail.com">youssefali909080@gmail.com</a>
                </div>
                <p>Egyptian</p>
              </div>
            </div>
            <div className="text-left lg:text-right mt-4">
              <h2 className="font-normal text-xl	uppercase ">
              Youssef Ali 
                <span className="ml-2 text-sm text-black-3">
                Chinese Instructor
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
