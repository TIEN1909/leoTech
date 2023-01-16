import React from "react";
import Link from "next/link";
type Props = {};

const NavigaAllCourse = (props: Props) => {
  return (
    <>
      <div className=" mt-20 flex justify-center">
        <Link
          href={"/"}
          className="bg-[#ffba12] rounded-full py-4 px-[50px] font-medium uppercase text-[#7b5eeb] text-[18px] "
        >
          Take The Quiz
        </Link>
      </div>
    </>
  );
};

export default NavigaAllCourse;
