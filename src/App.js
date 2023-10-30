import style from "./App.module.css";
import NoteKeeperHeader from "./components/NoteKeeperHeader/NoteKeeperHeader.jsx";
import NoteForm from "./components/NoteForm/NoteForm";
import NoteList from "./components/NoteList/NoteList";
import {NotesProvider} from "./components/NoteContext";
import React ,{ useState } from "react";
function App() {

  return (
    <div className={style.appContainer}>
      <NotesProvider>
        <NoteKeeperHeader/>
        <NoteList/>
      </NotesProvider>
    </div>
  );
}

export default App;
