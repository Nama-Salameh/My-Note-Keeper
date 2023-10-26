import { Button, TextField, Dialog, DialogContent, DialogTitle } from "@mui/material";
import style from "./NoteForm.module.css";

const AddNoteDialog = ({
  isExpanded,
  handleCancelClick,
  title,
  setTitle,
  content,
  setContent,
  handleSaveClick,
}) => {
  return (
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
  );
};

export default AddNoteDialog;
