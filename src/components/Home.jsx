import Navbar from "./Navbar";
import { Button } from "./ui/button";
import image from "../assets/homeShape/image.png";
import line from "../assets/homeShape/line.png";
import tag from "../assets/homeShape/tag.png";
import twoStars from "../assets/homeShape/twoStars.png";
import imgOne from "../assets/homeSecondPart/imgOne.png"
import imgTwo from "../assets/homeSecondPart/imgTwo.png"
import imgThree from "../assets/homeSecondPart/imgThree.png"
import imgFour from "../assets/homeSecondPart/imgFour.png"

function Home() {
  return (
    <div>
      <Navbar />
      <div className="bg-primary-light ">
        <div>
          <div className="flex items-center container  max-md:pl-4 max-md:pr-0 pt-20 sm:pt-36 lg:pt-48">
            <div className="flex-1 relative z-[2]">
              <span className="absolute top-[-100px] md:top-[-120px] lg:top-[-200px] left-0 block">
                <img src={twoStars} alt="" className="w-14 md:w-20" />
              </span>

              <span className="font-KaiseiDecol block leading-7 tracking-[4px] uppercase md:text-2xl text-secondary-light">
                Hello I’m
              </span>

              <h1 className="text-white my-2 md:my-4 whitespace-nowrap text-[35px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-jost">
                Youssef Ali
              </h1>

              <p className="text-white max-sm:text-sm whitespace-nowrap font-jost  lg:text-xl">
                Chinese Instructor & Project manager
              </p>
              <Button className="px-3  sm:px-5 md:px-6  lg:px-8 xl:px-10  sm:py-6   bg-primary my-4 sm:mt-10 lg:mt-14 hover:bg-primary rounded-sm">
                SAY HELLO
              </Button>
            </div>
            <div className="flex-1 z-[1] flex justify-center relative">
              <span className="absolute max-sm:hidden top-[-40px] sm:top-[-10px] md:top-[-60px] right-0 block">
                <img src={twoStars} alt="" className="w-14 md:w-20" />
              </span>

              <span className="absolute max-sm:rotate-[30deg] top-[-20px] sm:top-[-10px] md:top-[-60px] left-0 block">
                <img src={tag} alt="" className="w-16 md:w-24" />
              </span>

              <span className="absolute max-sm:hidden bottom-[60px] right-0 lg:right-20 block">
                <img src={line} alt="" className="w-8 md:w-12" />
              </span>

              <div className="absolute right-0 left-[50%]  translate-x-[-50%] bottom-[-170px] w-[450px] h-[450px]  sm:w-[550px] sm:h-[550px] lg:w-[700px] lg:h-[700px]  bg-[#DFD0B833] rounded-full "></div>
              
              <div className="flex justify-center z-[1]">
                <img src={image} alt="" className="object-cover h-[320px] sm:h-[450px]  lg:h-[600px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-sky-1 py-20 sm:py-48 z-10 relative">
          <div className="grid  xl:items-start md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 container max-sm:px-4">
          <div  className="flex flex-col shadow-skyShadow items-center   py-20  gap-6 bg-white rounded-[30px] ">
              <img src={imgOne} alt="" className="w-16"/>
              <p className="text-black-2 px-4 lg:px-6  text-center text-sm">
              Licentiate&rsquo;s Degree  Specialized Translation In  Chinese Language
              </p>
          </div>
          <div className="flex flex-col shadow-skyShadow items-center xl:mt-20   py-20 gap-6 bg-white rounded-[30px] ">
              <img src={imgTwo} alt="" className="w-16"/>
              <p className="text-black-2 px-4 lg:px-6  text-center text-sm">
              Faculty Of Al-Alsun Language -  Ainshams University
              </p>
          </div>
          <div className="flex flex-col shadow-skyShadow items-center    py-20 gap-6 bg-white rounded-[30px] ">
              <img src={imgThree} alt="" className="w-16"/>
              <p className="text-black-2 px-4 lg:px-6  text-center text-sm">
              Chinese And English (Second  Language) Department Credit  Hours
              </p>
          </div>
          <div className="flex flex-col shadow-skyShadow items-center xl:mt-20   py-20 gap-6 bg-white rounded-[30px] ">
              <img src={imgFour} alt="" className="w-16"/>
              <p className="text-black-2 px-4 lg:px-6  text-center text-sm">
              Bachelors Of Certified  Translation Gpa: 3.7
              </p>
          </div>
          </div>
      </div>
    </div>
  );
}

export default Home;
