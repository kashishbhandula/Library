import { async } from "@firebase/util";
import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup} from "react-bootstrap";
import BookDataService from "../services/book-services";

const AddBook = ({ id, setBookId }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (title === "" || author === "") {
      setMessage({ error: true, msg: "All fields are mandatory" });
      return;
    }
    const newBook = {
      title: title,
      author,
      status,
    };
    console.log(newBook);
    try {
      if (id !== undefined && id !== "") {
        await BookDataService.updateBook(newBook);
        setMessage({ error: false, msg: "Updated successfully" });
        setBookId("");
        
      } else {
        await BookDataService.addBooks(newBook);
        setMessage({ error: false, msg: "New Book added successfully" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
    setTitle("");
    setAuthor("");
  };
  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await BookDataService.getBook(id);
      console.log(docSnap);
      setTitle(docSnap.data().title);
      setTitle(docSnap.data().author);
      setTitle(docSnap.data().status);
    } catch (err) {
      setMessage({ error: true, msd: err.message });
    }
  };
  useEffect(() => {
    console.log("the id is here");
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  const style={
    display:"flex",
    flexDirection:"column",
    width: "auto"

    
      
  }
  return (
    
    <div className="container" >
      {message?.msg && (
        <Alert
          variant={message?.error ? "danger" : "success"}
          dismissible
          onClose={() => setMessage("")}
        >
          {message?.msg}
        </Alert>
      )}
      <form onSubmit={handleSubmit} style={style}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />

        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default AddBook;
