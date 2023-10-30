import { useState } from "react";
import style from "./NoteList.module.css";
import { useNotes } from "../NoteContext";
import Note from "../Note/Note";
import SearchBar from "../SearchBar/SearchBar";
import NoteForm from "../NoteForm/NoteForm";
const NoteList = () => {
  const { notes } = useNotes();
  const [searchText, setSearchText] = useState("");
  const backgroundColors = ["white", "rgb(255,229,204)", "rgb(255,255,204)"];

  const filteredNotes = notes.filter((note) => {
    const noteText = note.title + " " + note.content;
    return noteText.toLowerCase().includes(searchText.toLowerCase());
  });

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  return (
    <div>
      <SearchBar onSearchChange={handleSearchChange} />
      <div className={style.notesContainer}>
        {filteredNotes.map((note, index) => (
          <Note
            key={note.id}
            note={note}
            backgroundColor={backgroundColors[index % backgroundColors.length]}
          />
        ))}
      </div>
    </div>
  );
};

export default NoteList;
