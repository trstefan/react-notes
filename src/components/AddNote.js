import React from "react";
import { useState } from "react";

export const AddNote = ({ handleAddNote }) => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    //console.log(event.target.value);
    setText(event.target.value);
  };
  const saveText = () => {
    if (text.trim().length > 0) {
      handleAddNote(text);
      setText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a new add..."
        value={text}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <button className="save" onClick={saveText}>
          Save
        </button>
      </div>
    </div>
  );
};
