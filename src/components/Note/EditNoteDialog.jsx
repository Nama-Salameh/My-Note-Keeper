import { Dialog, Button} from "@mui/material";
import style from "./Note.module.css";

const EditNoteDialog = ({ isDialogOpen, handleCloseDialog, editedTitle, setEditedTitle, editedContent, setEditedContent, handleUpdateNote, note }) => {
  return (
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
  );
};

export default EditNoteDialog;
