import React, { useState } from "react";
import { useNotesDispatch } from '../NoteContext.jsx';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import style from "./NoteForm.module.css";
import { v4 as uuidv4 } from "uuid";

const NoteForm = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useNotesDispatch();

  const noteColors = ['white', 'orange', 'yellow'];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);


function generateUniqueId() {
  return uuidv4();
}
  
  const handleNoteClick = () => {
    if (!isExpanded) {
      setExpanded(true);
    }
  };

  const handleCancelClick = () => {
    setTitle("");
    setContent("");
    setExpanded(false);
  };

  const handleSaveClick = () => {
    const currentDate = new Date();
    const id = generateUniqueId();
    dispatch({
      type :"add",
      id,
      title,
      content,
      date: currentDate.toLocaleDateString(),
    });

    setTitle("");
    setContent("");
    setExpanded(false);
    setCurrentColorIndex((currentColorIndex + 1) % noteColors.length);
  };

  return (
    <Paper
      elevation={3}
      onClick={handleNoteClick}
      className={`${style.addNoteFormContainer} ${
        isExpanded
          ? style.additionalExpandedClass
          : style.additionalNotExpandedClass
      }`}
    >
      {isExpanded ? (
        <form className={style.addNoteForm}>
          <TextField
            label="Title"
            variant="outlined"
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={style.titleTextField}
          />
          <TextField
            label="Take a note..."
            variant="outlined"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={style.noteContentTextField}
          />
          <div className={style.buttonsContainer}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveClick}
              className={style.button}
            >
              Save
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCancelClick}
              className={style.button}
            >
              Close
            </Button>
          </div>
        </form>
      ) : (
        <p>Take a note...</p>
      )}
    </Paper>
  );
};
export default NoteForm;
