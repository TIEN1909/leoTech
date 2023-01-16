import axios from "axios";
import React from "react";
import AllCours from "../components/allCourse/AllCours";
import CareerPaths from "../components/careerPaths/CareerPaths";
import Hero from "../components/hero/Hero";
import Menu from "../components/menu/Menu";
import Paging from "../components/paging/Paging";
interface Props {
  type: string;
}

const result = axios.get('https://jsonplaceholder.typicode.com/posts')
console.log(result);
const Catalog: React.FC = (Props) => {
  return (
    <>
      <Hero type="catalog" />
      <div className="gradient flex justify-center">
        <div className="w-[1200px] flex gap-x-[30px] items-start ">
          <div className="w-[270px] h-full ">
            <Menu />
          </div>
          <div className="w-[900px]">
            <CareerPaths type="catalog" />
            <AllCours />
            <Paging />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
