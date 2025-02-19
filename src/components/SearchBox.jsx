import { IoSearchSharp } from "react-icons/io5";

import styles from "./SearchBox.module.css"
import { useContext } from "react";
import { DataContext } from "../App";


function SearchBox() {

  const {search, setSearch, searchHandler} = useContext(DataContext)

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search Title"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <button onClick={searchHandler}>
        <IoSearchSharp />
      </button>
    </div>
  );
}

export default SearchBox;
