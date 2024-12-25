import { LuDownload } from "react-icons/lu";

function AnimatedCircle() {
 
  return (
    <div className="absolute bottom-[-60px] left-[-60px] z-[20] w-fit   rounded-full bg-white">
      <div className="flex justify-center items-center">
        <LuDownload className="text-3xl text-[#85DD6D] absolute" />
        <svg id="rotatingText" viewBox="0 0 200 200" width="120" height="120">
          <defs>
            <path
              id="circle"
              d="M 100, 100
                m -75, 0
                a 75, 75 0 1, 0 150, 0
                a 75, 75 0 1, 0 -150, 0
                "
            ></path>
          </defs>
          <text width="400">
            <textPath
              alignmentBaseline="top"
              xlinkHref="#circle"
              className="text text-black-1 tracking-[3.7px] text-[17px] fill:#111 "
            >
              DOWNLOAD MY CV - DOWNLOAD MY CV
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}

export default AnimatedCircle;
