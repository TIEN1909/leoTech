import Link from "next/link";
import React from "react";

type Props = {};

const languages: {
  href: string;
  name: string;
}[] = [
  {
    href: "/",
    name: "HTML && CSS",
  },
  {
    href: "/",
    name: "SQL",
  },
  {
    href: "Python",
    name: "Python",
  },
  {
    href: "/",
    name: "JavaScript",
  },
  {
    href: "/",
    name: "PHP",
  },
  {
    href: "/",
    name: "Ruby",
  },
  {
    href: "/",
    name: "Go",
  },
  {
    href: "/",
    name: "Kotlin",
  },
  {
    href: "/",
    name: "Fultter",
  },
];

const MenuLanguages = (props: Props) => {
  return (
    <>
      <div className="mt-[80px] ">
        <h2 className="text-[30px] font-bold mb-8">Languages</h2>
        {languages.map((language) => (
          <ul key={language.name}>
            <li className=" mb-2">
              <Link
                className="block py-3 hover:text-[#7b5eeb] transition"
                href={language.href}
              >
                {language.name}
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default MenuLanguages;
