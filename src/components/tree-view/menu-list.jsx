import MenuItem from "./menu-item";

const MenuList = ({ list = [] }) => {
  return (
    <ul key={list.label} className='menu-list-container'>
      {list && list.length
        ? list.map((listItem) => <MenuItem item={listItem} />)
        : null}
    </ul>
  );
};

export default MenuList;
