
import BookCard from "./BookCard.jsx";
import SlideCard from "./SlideCard.jsx";
import SearchBox from "./SearchBox.jsx";

import styles from "./Books.module.css";
import { useContext } from "react";
import { DataContext } from "../App.jsx";

function Books() {
  
  const {books, liked} = useContext(DataContext)

  return (
    <>
      <SearchBox />
      <div className={styles.container}>
        <div className={styles.cards}>
          {books.map((book) => (
            <BookCard
              key={book.id}
              data={book}
            />
          ))}
        </div>
        <div>
          {!!liked.length && (
            <div className={styles.favorite}>
              <h4>Favorites</h4>
              {liked.map((book) => (
                <SlideCard key={book.id} data={book} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Books;
