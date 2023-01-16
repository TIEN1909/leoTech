import Image from "next/image";
import React from "react";
import Link from "next/link";
type Props = {};

const Header = (props: Props): React.ReactElement => {
  return (
    <>
      <div className="flex justify-between items-center h-[151px] px-[70px]">
        <Link href={"/"}>
          <img src=".././assets/img/leo-tech.png" width={193} height={75} />
        </Link>
        <ul className="flex justify-center items-center gap-x-[46px]">
          <li>
            <Link
              className=" text-xl hover:text-[#ffba12] transition "
              href={"/"}
            >
              Course
            </Link>
          </li>
          <li>
            <Link
              className=" text-xl hover:text-[#ffba12] transition "
              href={"/catalog"}
            >
              Catalog
            </Link>
          </li>
          <li>
            <Link
              className=" text-xl hover:text-[#ffba12] transition "
              href={"/resources"}
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              className=" text-xl hover:text-[#ffba12] transition "
              href={"/community"}
            >
              Community
            </Link>
          </li>
          <li>
            <Link
              className=" text-xl hover:text-[#ffba12] transition "
              href={"/contactUs"}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <button className=" bg-green-600 rounded-full text-white px-[30px] py-2 font-bold hover:text-[#ffba12] transition">
          DONATE
        </button>
      </div>
    </>
  );
};

export default Header;
