import React, { useState } from "react";
import { useNotesDispatch } from "../NoteContext.jsx";
import TextField from "@mui/material/TextField";
import {
  Button,
  Paper,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import style from "./NoteForm.module.css";
import { v4 as uuidv4 } from "uuid";

const NoteForm = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useNotesDispatch();

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
    if (title.trim() === "" || content.trim() === "") {
      setExpanded(false);
      return;
    }
    const currentDate = new Date();
    const id = generateUniqueId();
    dispatch({
      type: "add",
      id,
      title,
      content,
      date: currentDate.toLocaleDateString(),
    });

    setTitle("");
    setContent("");
    setExpanded(false);
  };

  return (
    <div>
      {isExpanded ? (
        <Dialog open={isExpanded} onClose={handleCancelClick}>
          <div className={style.dialogContent}>
            <DialogTitle>Add a note</DialogTitle>
            <DialogContent>
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
                  multiline
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className={style.noteContentTextField}
                />
              </form>
            </DialogContent>
            <div className={style.buttonsContainer}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSaveClick}
                className={style.saveButton}
              >
                Save
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleCancelClick}
                className={style.closeButton}
              >
                Close
              </Button>
            </div>
          </div>
        </Dialog>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={handleNoteClick}
          className={style.addButton}
        >
          Add a Note
        </Button>
      )}
    </div>
  );
};
export default NoteForm;
