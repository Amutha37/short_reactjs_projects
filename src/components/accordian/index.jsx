// single selection
// multiple selection
import { useState } from "react";
import data from "./data";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enabaleMultiSelection, setEnableMultiSelection] = useState(false);
  const [multipleSelection, setMultipleSelection] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId) => {
    let copyMultipleSelectionId = [...multipleSelection];
    const findIndexOfCurrentId = copyMultipleSelectionId.indexOf(getCurrentId);
    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) copyMultipleSelectionId.push(getCurrentId);
    else copyMultipleSelectionId.splice(findIndexOfCurrentId, 1);
    setMultipleSelection(copyMultipleSelectionId);
  };
  // console.log(
  //   "selected",
  //   selected,
  //   "enabaleMultiSelection",
  //   enabaleMultiSelection,
  //   multipleSelection
  // );
  return (
    <div className="wrapper">
       <h3>Accordian</h3>
      <button onClick={() => setEnableMultiSelection(!enabaleMultiSelection)}>
        {enabaleMultiSelection
          ? "Enable Single Selection"
          : "Enabale Multi Selection"}
      </button>

      <div className="accordian">
       
        {data && data.length > 0 ? (
          data.map((dataItem, id) => (
            <div key={id} className="item">
              <div
                onClick={
                  enabaleMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3> {dataItem.question}</h3>

                {multipleSelection.indexOf(dataItem.id) !== -1 || selected === dataItem.id ? (
                  <span className='arrowUpDown'>
               
                  <IoMdArrowDropup />
                </span>
                  )
                : (
                  <span className='arrowUpDown'>
                      <IoMdArrowDropdown />
                  </span>
                ) }


              </div>
              {enabaleMultiSelection
                ? multipleSelection.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
              {/*  Single selection or multiple selection */}
              {/* {selected === dataItem.id  || multipleSelection.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
