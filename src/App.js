import "./App.css";
import { useState } from "react";
import AddBook from "./components/AddBook";
import BooksList from "./components/BooksList";
import Menu from "./components/Navbar";
import BookDataService from "./services/book-services";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [bookId, setBookId] = useState("");
  const getBookIdHandler = (doc) => {
    // console.log(doc);

    setBookId(doc.id);
    
  };
  return (
    <div className="App">
      <Menu> </Menu>
      <br />
      <AddBook id={bookId} setBookId={setBookId}></AddBook>
      <br />
      <BooksList getBookId={getBookIdHandler}></BooksList>
    </div>
  );
}

export default App;
