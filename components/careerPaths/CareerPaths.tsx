import Link from "next/link";
import React from "react";

interface Props {
  type: string;
}

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
    name: "Become a Full-Stack  Software Engineer ",
  },
  {
    img: "../../assets/img/full-stack-software-engineer.png",
    title: "Web Development",
    href: "/",
    name: "Become a Full-Stack Software Engineer",
  },
];
const CareerPaths: React.FC<Props> = (props) => {
  const { type } = props;
  return (
    <>
      {type !== "catalog" ? (
        <div className=" ">
          <h1 className="text-[55px] pt-14 pb-9 font-medium text-[#2a2a2a]">
            Career paths
          </h1>
          <div className=" flex flex-wrap justify-between gap-x-[30px] ">
            {careerPaths.map((path, index) => (
              <Link
                href={path.href}
                key={path.img}
                className="w-[270px] h-[353px] bg-white px-5 pt-5 rounded-md box-shadow"
              >
                <div className="w-[230px] h-[133px] mb-6">
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
      ) : (
        <div className=" ">
          <h1 className="text-[55px] pt-14 pb-9 font-medium text-[#2a2a2a]">
            Career paths
          </h1>
          <div className=" flex flex-wrap  gap-x-[30px]">
            {careerPaths.map((path) => (
              <Link
                href={path.href}
                key={path.img}
                className="w-[195px] h-[267px] bg-white px-[15px] pt-[15px] rounded-md box-shadow"
              >
                <div className="w-[165px] h-[95px] mb-6">
                  <img
                    src={path.img}
                    alt={path.title}
                    className="w-full h-full"
                  />
                </div>
                <h2 className=" text-sm font-medium text-[#d2d2d2] uppercase">
                  {path.title}
                </h2>
                <p className=" text-sm font-medium hover:text-[#7b5eeb] transition">
                  {path.name}
                </p>
                <button className=" uppercase font-bold text-[15px] text-[#ffba12] mt-12">
                  Read more
                </button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CareerPaths;
