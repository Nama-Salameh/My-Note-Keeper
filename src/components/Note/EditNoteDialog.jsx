import { Dialog, Button } from "@mui/material";
import { useState, useEffect } from "react";
import style from "./Note.module.css";

const EditNoteDialog = ({
  isEditDialogOpen,
  handleCloseEditingDialog,
  editedNote,
  setEditedNote,
  handleUpdateNote,
  note,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    setCurrentDate(new Date());
  }, [editedNote.title, editedNote.content]);

  const handleTitleChange = (e) => {
    setEditedNote({ ...editedNote, title: e.target.value });
  };

  const handleContentChange = (e) => {
    setEditedNote({ ...editedNote, content: e.target.value });
  };

  return (
    <Dialog open={isEditDialogOpen} onClose={handleCloseEditingDialog}>
      <div className={style.dialogContent}>
        <input
          type="text"
          value={editedNote.title}
          onChange={handleTitleChange}
          className={style.titleInput}
        />
        <input
          type="text"
          value={editedNote.content}
          onChange={handleContentChange}
          className={style.contentInput}
        />
        <p className={style.taskDate}>{note.date}</p>
        <div className={style.buttonsContainer}>
          <Button
            onClick={handleCloseEditingDialog}
            className={style.cancelEditionButton}
          >
            Cancel
          </Button>
          <Button onClick={handleUpdateNote} className={style.doneButton}>
            Done
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default EditNoteDialog;
