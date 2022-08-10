import "./App.css";
import { useState } from "react";
import AddBook from "./components/AddBook";
import BooksList from "./components/BooksList";
import Menu from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [bookId, setBookId] = useState("");
  const getBookIdHandler = (id) => {
    console.log(id);
    setBookId(id);
  };
  return (
    <div className="App">
      <Menu> </Menu>
      <br/>
      <AddBook id={bookId} setBookId={setBookId}></AddBook>
      <br/>
      <BooksList getBookId={getBookIdHandler}></BooksList>
    </div>
  );
}

export default App;
