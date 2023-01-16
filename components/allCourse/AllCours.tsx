import Link from "next/link";
import React from "react";

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
    name: "Mastering React",
  },
  {
    img: "../../assets/img/full-stack-software-engineer.png",
    title: "Web Development",
    href: "/",
    name: "Mastering Python",
  },
  {
    img: "../../assets/img/full-stack-software-engineer.png",
    title: "Web Development",
    href: "/",
    name: "Mastering Ruby",
  },
  {
    img: "../../assets/img/full-stack-software-engineer.png",
    title: "Web Development",
    href: "/",
    name: "Mastering JavaScript",
  },
  {
    img: "../../assets/img/full-stack-software-engineer.png",
    title: "Web Development",
    href: "/",
    name: "Mastering Node.js",
  },
  {
    img: "../../assets/img/full-stack-software-engineer.png",
    title: "Web Development",
    href: "/",
    name: "Mastering TypeScript",
  },
  {
    img: "../../assets/img/full-stack-software-engineer.png",
    title: "Web Development",
    href: "/",
    name: "Mastering JavaScript",
  },
  {
    img: "../../assets/img/full-stack-software-engineer.png",
    title: "Web Development",
    href: "/",
    name: "Mastering Node.js",
  },
  {
    img: "../../assets/img/full-stack-software-engineer.png",
    title: "Web Development",
    href: "/",
    name: "Mastering TypeScript",
  },
  {
    img: "../../assets/img/full-stack-software-engineer.png",
    title: "Web Development",
    href: "/",
    name: "Mastering Node.js",
  },
  {
    img: "../../assets/img/full-stack-software-engineer.png",
    title: "Web Development",
    href: "/",
    name: "Mastering TypeScript",
  },
];
const AllCours = (props: Props) => {
  return (
    <>
      <div className=" ">
        <h1 className="text-[55px] pt-14 pb-9 font-medium text-[#2a2a2a]">
          All Courses
        </h1>
        <div className=" flex flex-wrap  gap-y-[50px] gap-x-[30px]">
          {careerPaths.map((path) => (
            <Link
              href={path.href}
              key={path.img}
              className=" bg-white px-[15px] pt-[15px] rounded-md box-shadow max-w-[270px] min-h-[302px] "
            >
              <div className="max-w-[240px] h-[135px] mb-6 overflow-hidden">
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
              <button className=" uppercase font-bold text-[15px] text-[#ffba12] mt-9">
                Read more
              </button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllCours;
