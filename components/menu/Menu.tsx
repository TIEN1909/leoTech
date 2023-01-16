import React from "react";
import MenuLanguages from "./MenuLanguages";
import MenuSubjects from "./MenuSubjects";
type Props = {};

const Menu = (props: Props) => {
  return (
    <>
      <div>
        <MenuLanguages />
        <MenuSubjects />
      </div>
    </>
  );
};

export default Menu;
