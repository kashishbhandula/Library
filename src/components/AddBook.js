import { async } from "@firebase/util";
import React, { useState } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import BookDataService from "../services/book-services";
const AddBook = () => {
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
      await BookDataService.addBooks(newBook);
      setMessage({ error: false, msg: "New Book added successfully" });
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };
  return (
    <div className="container">
       {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}
      <form onSubmit={handleSubmit}>
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
