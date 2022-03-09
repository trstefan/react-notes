import "./App.css";
import { Header } from "./components/Header";
import { NotesGrid } from "./components/NotesGrid";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is a first test note",
      date: "03/02/2012",
    },
    {
      id: nanoid(),
      text: "This is a  second test note",
      date: "04/02/2012",
    },
  ]);

  const [darkmode, setDarkMode] = useState(false);

  //retrive all the notes on the refresh
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  //save a note to the local storage
  useEffect(() => {
    localStorage.setItem("react-notes-app", JSON.stringify(notes));
  }, [notes]);

  //add a new note
  const addNote = (text) => {
    //console.log(text);
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    setNotes([...notes, newNote]);
  };

  // delete a note
  const deleteNote = (id) => {
    //console.log(id);
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkmode && "darkmode"}`}>
      <div className="App">
        <Header handleChangeMode={setDarkMode} />
        <NotesGrid
          notes={notes}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        ></NotesGrid>
      </div>
    </div>
  );
}

export default App;
