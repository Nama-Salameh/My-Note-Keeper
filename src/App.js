import style from "./App.module.css";
import NoteKeeperHeader from "./components/NoteKeeperHeader/NoteKeeperHeader.jsx";
import NoteForm from "./components/NoteForm/NoteForm";
import NoteList from "./components/NoteList/NoteList";
import {NotesProvider} from "./components/NoteContext";
import { useState } from "react";
function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className={style.appContainer}>
      <NotesProvider>
        <NoteKeeperHeader onSearchChange={setSearchText}/>
        <NoteForm />
        <NoteList searchText={searchText}/>
      </NotesProvider>
    </div>
  );
}

export default App;
