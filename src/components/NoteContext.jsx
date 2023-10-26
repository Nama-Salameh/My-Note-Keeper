import React, { createContext, useContext, useReducer } from "react";

const NotesContext = createContext();

export function useNotes() {
  return useContext(NotesContext);
}

export function useNotesDispatch() {
  return useContext(NotesContext).dispatch;
}

export const NotesProvider = ({ children }) => {
  const [notes, dispatch] = useReducer(notesReducer, initialNotes);

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

const notesReducer = (notes, action) => {
  switch (action.type) {
    case "add": {
      return [
        ...notes,
        {
          id: action.id,
          title: action.title,
          content: action.content,
          date: action.date,
        },
      ];
    }
    case "delete": {
      return notes.filter((note) => note.id !== action.id);
    }
    case "update": {
      return notes.map((note) => {
        if (note.id === action.id) {
          return {
            ...note,
            title: action.title,
            content: action.content,
            date: action.date,
          };
        }
        return note;
      });
    }
    default:
      return notes;
  }
};

const initialNotes = [];
