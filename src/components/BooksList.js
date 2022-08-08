import React, { useEffect,useState } from "react";


import BookDataService from "../services/book-services";

const BooksList = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);
};
const getBooks = async () => {
  const data = await BookDataService.getAllBooks();
  console.log(data.docs);
};
export default BooksList;
