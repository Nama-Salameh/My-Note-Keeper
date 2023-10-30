import { useState } from "react";
import { useNotesDispatch } from "../NoteContext.jsx";
import { Button } from "@mui/material";
import style from "./NoteForm.module.css";
import { v4 as uuidv4 } from "uuid";
import AddNoteDialog from "./AddNodeDialog.jsx";

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
    if (title.trim() === "" && content.trim() === "") {
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
        <AddNoteDialog
          isExpanded={isExpanded}
          handleCancelClick={handleCancelClick}
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
          handleSaveClick={handleSaveClick}
        />
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
