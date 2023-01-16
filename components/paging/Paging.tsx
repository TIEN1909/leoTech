import React from "react";
import Link from "next/link";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
type Props = {};

const Paging = (props: Props) => {
  return (
    <>
      <div className="flex justify-center  mt-[50px]">
        <div className="flex items-center gap-x-1">
          <Link
            href={"/"}
            className=" flex justify-center items-center rounded  bg-white border h-[38px] min-w-[41px] "
          >
            <AiOutlineDoubleLeft />
          </Link>
          <Link
            href={"/"}
            className=" flex justify-center items-center rounded  bg-white border h-[38px] min-w-[41px] "
          >
            1
          </Link>
          <Link
            href={"/"}
            className=" flex justify-center items-center rounded  bg-white border h-[38px] min-w-[41px] "
          >
            2
          </Link>
          <Link
            href={"/"}
            className=" flex justify-center items-center rounded  bg-white border h-[38px] min-w-[41px] "
          >
            3
          </Link>
          <Link
            href={"/"}
            className=" flex justify-center items-center rounded  bg-white border h-[38px] min-w-[41px] "
          >
            <AiOutlineDoubleRight />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Paging;
