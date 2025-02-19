import { useState } from "react";
import { books as bookData } from "./constants/mockData.js";

import { createContext } from "react";
import Books from "./components/Books.jsx";
import Layout from "./layouts/Layout.jsx";

export const DataContext = createContext()

function App() {

  const [books, setBooks] = useState(bookData);
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState([]);


  const handleLikedList = (book, status) => {
    if (status) {
      const newLikedList = liked.filter((i) => i.id !== book.id);
      setLiked(newLikedList);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };

  const searchHandler = () => {
    if (search) {
      const newBooks = bookData.filter((book) =>
        book.title.toLowerCase().includes(search)
      );
      setBooks(newBooks)
    } else {
      setBooks(bookData)
    }
  };


  const contextValue = {books, setBooks, liked, setLiked, search, setSearch, handleLikedList, searchHandler}


  return (
    <DataContext.Provider value={contextValue}>
      <Layout>
        <Books />
      </Layout>
    </DataContext.Provider>
  );
}

export default App;
