import { Paper, Typography, Modal, Button, Dialog } from "@mui/material";
import style from "./Note.module.css";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useNotesDispatch } from "../NoteContext";

const Note = ({ note, backgroundColor }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);

  const dispatch = useNotesDispatch();

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleDeleteNote = () => {
    dispatch({
      type: "delete",
      id: note.id,
    });
    setModalOpen(false);
  };

  const handleUpdateNote = () => {
    dispatch({
      type: "update",
      id: note.id,
      title: editedTitle,
      content: editedContent,
    });
    setDialogOpen(false);
  };
  const paperStyle = {
    backgroundColor: note.backgroundColor || backgroundColor,
  };

  return (
    <Paper
      elevation={3}
      className={style.noteContainer}
      style={paperStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleOpenDialog}
    >
      <Typography variant="h6">{note.title}</Typography>
      <Typography variant="body1">{note.content}</Typography>
      <p className={style.taskDate}>{note.date}</p>
      {isHovered && (
        <div className={style.trashIcon}>
          <FaTrash
            onClick={(e) => {
              e.stopPropagation();
              handleOpenModal();
            }}
          />
        </div>
      )}

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <div className={style.modalContent}>
          <Typography variant="h6">Note Deletion</Typography>
          <Typography>Are you certain you wish to delete this note?</Typography>
          <div className={style.buttonsContainer}>
            <Button
              variant="contained"
              color="grey"
              onClick={(e) => {
                e.stopPropagation();
                handleCloseModal();
              }}
              className={style.cancelButton}
            >
              Close
            </Button>
            <Button
              variant="contained"
              color="grey"
              onClick={handleDeleteNote}
              className={style.deleteButton}
            >
              Delete
            </Button>
          </div>
        </div>
      </Modal>

      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <div className={style.dialogContent}>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className={style.titleInput}
          />
          <input
            type="text"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className={style.contentInput}
          />
          <p className={style.taskDate}>{note.date}</p>
          <div className={style.buttonsContainer}>
            <Button
              onClick={handleCloseDialog}
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
    </Paper>
  );
};

export default Note;
