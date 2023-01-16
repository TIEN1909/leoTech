import Link from "next/link";
import React from "react";

type Props = {};
const subjects: {
  href: string;
  name: string;
}[] = [
  {
    href: "/",
    name: "Web Development",
  },
  {
    href: "/",
    name: "Web Design",
  },
  {
    href: "/",
    name: "Mobile Development",
  },
  {
    href: "/",
    name: "DevOps",
  },
  {
    href: "/",
    name: "AI",
  },
  {
    href: "/",
    name: "Data Analytics",
  },
  {
    href: "/",
    name: "Data Engineering",
  },
  {
    href: "/",
    name: "Data Science ",
  },
  {
    href: "/",
    name: "Computer Science",
  },
  {
    href: "/",
    name: "Machine Learning",
  },
];

const MenuSubjects = (props: Props) => {
  return (
    <>
      <div className="mt-[80px] ">
        <h2 className="text-[30px] font-bold mb-8">Subjects</h2>
        {subjects.map((subject) => (
          <ul key={subject.name}>
            <li className=" mb-2">
              <Link
                className="block py-3 hover:text-[#7b5eeb] transition"
                href={subject.href}
              >
                {subject.name}
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default MenuSubjects;
