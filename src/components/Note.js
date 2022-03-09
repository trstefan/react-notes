import React from "react";
import { MdDelete } from "react-icons/md";
export const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDelete onClick={() => handleDeleteNote(id)}></MdDelete>
      </div>
    </div>
  );
};
