import SearchBar from '../SearchBar/SearchBar';
import style from './NoteKeeperHeader.module.css'
import NoteForm from '../NoteForm/NoteForm';
const NoteKeeperHeader = () => {
  return (
    <div className={style.headerContainer} >
      <h3 className={style.title}>My Note Keeper</h3>
      <NoteForm/>
    </div>
  );
};
export default NoteKeeperHeader;
