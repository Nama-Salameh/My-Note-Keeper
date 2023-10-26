import { Paper, Typography } from "@mui/material";
import style from "./Note.module.css";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useNotesDispatch } from "../NoteContext";
import EditNoteDialog from "./EditNoteDialog";
import NoteModal from "./NoteModal";
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

  return (
    <Paper
      elevation={3}
      className={style.noteContainer}
      style={{ backgroundColor: note.backgroundColor || backgroundColor }}
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

      <NoteModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        handleDeleteNote={handleDeleteNote}
        note={note}
      />
      <EditNoteDialog
        isDialogOpen={isDialogOpen}
        handleCloseDialog={handleCloseDialog}
        editedTitle={editedTitle}
        setEditedTitle={setEditedTitle}
        editedContent={editedContent}
        setEditedContent={setEditedContent}
        handleUpdateNote={handleUpdateNote}
        note={note}
      />
    </Paper>
  );
};

export default Note;
