import React from "react";
import "./ActionDropdown.css";
import { useState, useRef, useEffect } from "react";

const ActionDropdown = ({ onEdit, onDelete }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const handleClickOutside = (event)=>{
    if (dropdownRef.current&& !dropdownRef.current.contains(event.target)){
      setOpen(false);
    }
  };

  useEffect(()=>{
    document.addEventListener('mousedown',handleClickOutside);
    return()=> document.removeEventListener('mousedown',handleClickOutside);
  },[]);

  return (
    <div className="dropdown-wrapper" ref={dropdownRef}>
      <button className="dots-button" onClick={() => setOpen(!open)}>
        ⋮
      </button>
      {open && (
        <div className="dropdown-menu">
          <button onClick={onEdit} className="dropdown-item edit-item">
            Edit
          </button>
          <button onClick={onDelete} className="dropdown-item delete-item">
            Delete
          </button>
        </div>
      )}
    </div>
    
  );
 // console.log("Dropdown rendered");

};

export default ActionDropdown;
