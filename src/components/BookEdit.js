import React from "react";
import useBooksContext from "../hooks/use-books-context";

export default function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = React.useState(book.title);
  const { editBookById } = useBooksContext();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" onChange={handleChange} value={title} />
      <button className="button-is-primary">Save</button>
    </form>
  );
}
