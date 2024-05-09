import React, { useReducer, useState } from "react";
import { reducer } from "./reducer";

const booksData = [
  { id: 1, name: "Pather panchal" },
  { id: 2, name: "Padma nodi majhi" },
  { id: 3, name: "Srikanta" },
];

const Modal = ({ modalText }) => {
  return <p className=" text-green-500 font-semibold">{modalText}</p>;
};

const UseReducer = () => {
  //   const [books, setBooks] = useState(booksData);
  //   const [modalText, setModalText] = useState("");
  //   const [isModalOpen, setIsModalOpen] = useState(false);

  const [bookState, dispatch] = useReducer(reducer, {
    books: booksData,
    isModalOpen: false,
    modalText: "",
  });
  const [bookName, setBookName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooks = { id: new Date().getTime().toString(), name: bookName };

    dispatch({ type: "ADD", payload: newBooks });
    setBookName("");
  };

  const removeBooks = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  return (
    <div>
      <h3 className=" text-3xl">Book Lists</h3>
      <form onSubmit={handleSubmit}>
        <input
          className=" border-2 "
          type="text"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
        <button
          className=" bg-red-500 py-1 px-4 text-white rounded-md"
          type="submit"
        >
          add books
        </button>
      </form>

      {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}

      {bookState.books.map((book) => {
        const { id, name } = book;
        return (
          <li key={id} className=" text-2xl font-bold">
            {name}{" "}
            <button
              onClick={() => removeBooks(id)}
              className=" bg-red-500 py-1 px-3 text-white text-base rounded-md"
            >
              Remove books
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default UseReducer;
