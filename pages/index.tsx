import React from "react";
import Hero from "../components/hero/Hero";
import CareerPaths from "../components/careerPaths/CareerPaths";
import Jumpstart from "../components/jumpstart/Jumpstart";
import MostPopularCourses from "../components/mostPopularCourses/MostPopularCourses";
import NavigaAllCourse from "../components/navigaAllCourse/NavigaAllCourse";

interface Props {
  type: string;
}

const index: React.FC = (Props) => {
  return (
    <>
      <Hero type="" />
      <div className="gradient flex justify-center">
        <div className="w-[1200px]">
          <CareerPaths />
          <Jumpstart />
          <MostPopularCourses />
          <NavigaAllCourse />
        </div>
      </div>
    </>
  );
};

export default index;
