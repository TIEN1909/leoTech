import Link from "next/link";
import React from "react";

interface Props {
  type: string;
}

const Hero: React.FC<Props> = (props) => {
  const { type } = props;
  return (
    <>
      {type !== "catalog" ? (
        <>
          <div className=" h-[500px] flex justify-center items-start">
            <div className="flex flex-col justify-center items-center ">
              <h1 className="text-[80px] mt-[75px] uppercase">
                LEOTECH ACADEMY
              </h1>
              <p className=" text-2xl mb-[50px]">Learn to code from zero</p>
              <Link
                href={"/"}
                className="bg-[#ffba12] rounded-full py-4 px-[50px] font-medium uppercase text-[#7b5eeb] text-[18px] "
              >
                Take The Quiz
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className=" h-[395px] flex justify-center items-start">
            <div className="flex flex-col justify-center items-center ">
              <h1 className="text-[80px] mt-[75px] uppercase">Here we go!</h1>
              <p className=" text-2xl mb-[50px]">
                Learn Anything, Anytime, & Anywhere
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Hero;
