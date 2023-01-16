import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <div className="bg-[#ffba12] flex justify-between items-center text-xl px-[106px] py-[36px] text-white mt-[100px]">
        <div className="flex gap-x-6">
          <Link href={"/privacy"}>Privacy</Link>
          <Link href={"/terms"}>Terms of Use</Link>
        </div>
        <h1 className="">
          © 2022 LEO TECH VIET NAM CO.,LTD. All Rights Reserved.
        </h1>
        <div className="flex gap-x-[15px]">
          <Link href={"/"}>
            <FaFacebookF />
          </Link>
          <Link href={"/"}>
            <FaTwitter />
          </Link>
          <Link href={"/"}>
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
