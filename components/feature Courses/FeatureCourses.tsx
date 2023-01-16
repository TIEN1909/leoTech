import React from "react";
import Link from "next/link";
type Props = {};
const careerPaths: {
  img: string;
  title: string;
  href: string;
  name: string;
}[] = [
  {
    img: "../../assets/img/full-stack-software-engineer.png",
    title: "Web Development",
    href: "/",
    name: "Become a Full-Stack Software Engineer",
  },
  {
    img: "../../assets/img/full-stack-software-engineer.png",
    title: "Web Development",
    href: "/",
    name: "Become a Full-Stack Software Engineer",
  },
  {
    img: "../../assets/img/full-stack-software-engineer.png",
    title: "Web Development",
    href: "/",
    name: "Become a Full-Stack Software Engineer",
  },
];
const FeatureCourses = (props: Props) => {
  return (
    <>
      <div className=" ">
        <h1 className="text-[55px] pt-14 pb-9 font-medium text-[#2a2a2a]">
          Most popular Courses
        </h1>
        <div className=" flex flex-wrap justify-between gap-y-[50px] gap-x-[30px]">
          {careerPaths.map((path) => (
            <Link
              href={path.href}
              key={path.img}
              className=" bg-white px-5 pt-5 rounded-md box-shadow max-w-[370px] min-h-[387px] "
            >
              <div className="max-w-[330px] h-[186px] mb-6 overflow-hidden">
                <img
                  src={path.img}
                  alt={path.title}
                  className="w-full h-full"
                />
              </div>
              <h2 className=" text-base font-medium text-[#d2d2d2]">
                {path.title}
              </h2>
              <p className=" text-lg font-medium hover:text-[#7b5eeb] transition">
                {path.name}
              </p>
              <button className=" uppercase font-bold text-[15px] text-[#ffba12] mt-12">
                Read more
              </button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeatureCourses;
