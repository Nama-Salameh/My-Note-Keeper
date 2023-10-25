import SearchBar from './SearchBar/SearchBar';
import style from './NoteKeeperHeader.module.css'
const NoteKeeperHeader = ({ onSearchChange }) => {
  return (
    <div className={style.headerContainer} >
      <h3 className={style.title}>My Note Keeper</h3>
      <SearchBar onSearchChange={onSearchChange}/>
    </div>
  );
};
export default NoteKeeperHeader;
