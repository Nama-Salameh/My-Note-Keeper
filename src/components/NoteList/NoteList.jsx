import React from "react";
import style from "./NoteList.module.css";
import { useNotes } from "../NoteContext";
import Note from "../Note/Note";

const NoteList = ({ searchText }) => {
  const { notes } = useNotes();
  const backgroundColors = ["white", "rgb(255,229,204)", "rgb(255,255,204)"];

  const filteredNotes = notes.filter((note) => {
    const noteText = note.title + " " + note.content;
    return noteText.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div className={style.notesContainer} style={{ marginTop: "1rem" }}>
      {filteredNotes.map((note , index) => (
        <Note key={note.id} note={note}  backgroundColor={backgroundColors[index % backgroundColors.length]}/>
      ))}
    </div>
  );
};

export default NoteList;
