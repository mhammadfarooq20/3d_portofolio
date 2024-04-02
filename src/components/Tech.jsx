/* eslint-disable react-refresh/only-export-components */
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
    <h2 className="text-center font-bold text-3xl text-white" >Technologies</h2>
    <h1 className="text-white text-5xl font-bold flex   justify-center">
    Play with Balls
  </h1>
    <div className="flex flex-row flex-wrap justify-center gap-10">
     
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
