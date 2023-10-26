import { Paper, Typography } from "@mui/material";
import style from "./Note.module.css";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useNotesDispatch } from "../NoteContext";
import EditNoteDialog from "./EditNoteDialog";
import DeleteNoteConfirm from "./DeleteNoteConfirm";
import Linkify from "react-linkify"; // Import react-linkify

const Note = ({ note, backgroundColor }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);
  const [editedNote, setEditedNote] = useState({
    title: note.title,
    content: note.content,
    date: note.date,
  });
  const dispatch = useNotesDispatch();

  const handleOpenEditingDialog = () => {
    setEditDialogOpen(true);
  };

  const handleCloseEditingDialog = () => {
    setEditDialogOpen(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleOpenDeletionModal = () => {
    setDeleteModalOpen(true);
  };

  const handleCloseDeletionModal = () => {
    setDeleteModalOpen(false);
  };

  const handleDeleteNote = () => {
    dispatch({
      type: "delete",
      id: note.id,
    });
    setDeleteModalOpen(false);
  };

  const handleUpdateNote = () => {
    dispatch({
      type: "update",
      id: note.id,
      title: editedNote.title,
      content: editedNote.content,
      date: editedNote.date,
    });
    setEditDialogOpen(false);
  };

  return (
    <Paper
      elevation={3}
      className={style.noteContainer}
      style={{ backgroundColor: note.backgroundColor || backgroundColor }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleOpenEditingDialog}
    >
      <Typography variant="h6">{note.title}</Typography>
      <Typography variant="body1" className={style.content}>
        <Linkify>{note.content}</Linkify>
      </Typography>
      <p className={style.taskDate}>{note.date}</p>
      {isHovered && (
        <div className={style.trashIcon}>
          <FaTrash
            onClick={(e) => {
              e.stopPropagation();
              handleOpenDeletionModal();
            }}
          />
        </div>
      )}

      <DeleteNoteConfirm
        isDeleteModalOpen={isDeleteModalOpen}
        handleCloseDeletionModal={handleCloseDeletionModal}
        handleDeleteNote={handleDeleteNote}
        note={note}
      />
      {isEditDialogOpen && (
        <EditNoteDialog
          isEditDialogOpen={isEditDialogOpen}
          handleCloseEditingDialog={handleCloseEditingDialog}
          editedNote={editedNote}
          setEditedNote={setEditedNote}
          handleUpdateNote={handleUpdateNote}
          note={note}
        />
      )}
    </Paper>
  );
};

export default Note;
