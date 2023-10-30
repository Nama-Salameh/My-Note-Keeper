import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import style from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = ({ onSearchChange }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
    onSearchChange(text);
  };

  return (
    <TextField
      variant="outlined"
      placeholder="Search"
      InputProps={{
        startAdornment: <SearchIcon color="disabled" fontSize="medium" />,
      }}
      className={style.searchBar}
      onChange={handleSearchChange}
    />
  );
};
export default SearchBar;
