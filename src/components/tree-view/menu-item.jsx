import { useState } from "react";
import MenuList from "./menu-list";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

//   collecting and displaying children
  const handleToggleChildren = (getCurrentLabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  };


  return (
    <li key={item.label} >
      <div  className="menu-item" >
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <IoMdArrowDropup  color='#fff'/>
            ) : (
              <IoMdArrowDropdown  color='#fff' />
            )}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
      {/* 
      {item && item.children.length > 0 ? (
        <MenuList list={item.children} />
      ) : null} */}
    </li>
  );
};
export default MenuItem;
