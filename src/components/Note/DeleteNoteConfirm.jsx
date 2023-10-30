import React from "react";
import { Modal, Button, Typography } from "@mui/material";
import style from "./Note.module.css";

const DeleteNoteConfirm = ({
  isDeleteModalOpen,
  handleCloseDeletionModal,
  handleDeleteNote,
}) => {
  return (
    <Modal open={isDeleteModalOpen} onClose={handleCloseDeletionModal}>
      <div className={style.modalContent}>
        <Typography variant="h6">Note Deletion</Typography>
        <Typography>Are you certain you wish to delete this note?</Typography>
        <div className={style.buttonsContainer}>
          <Button
            variant="contained"
            color="grey"
            onClick={(e) => {
              e.stopPropagation();
              handleCloseDeletionModal();
            }}
            className={style.cancelButton}
          >
            Close
          </Button>
          <Button
            variant="contained"
            color="grey"
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteNote();
            }}
            className={style.deleteButton}
          >
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteNoteConfirm;
