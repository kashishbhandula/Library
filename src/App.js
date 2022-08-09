import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import AddBook from "./components/AddBook";
import BooksList from "./components/BooksList";

function App() {
  const [bookId, setBookId] = useState("");
  const getBookIdHandler = (id) => {
    console.log(id);
    setBookId(id);
  };
  return (
    <div className="App">
      <AddBook id={bookId} setBookId={setBookId}></AddBook>
      <BooksList getBookId={getBookIdHandler}></BooksList>
    </div>
  );
}

export default App;
