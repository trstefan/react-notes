import React from "react";
import { AddNote } from "./AddNote";
import { Note } from "./Note";
export const NotesGrid = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <Note key={note.id} {...note} handleDeleteNote={handleDeleteNote} />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};
