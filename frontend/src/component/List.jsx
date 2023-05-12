import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiAddToQueue } from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai";
import { MdOutlineDeleteForever } from "react-icons/md";

const List = () => {
  const [data, setData] = useState([]);

  const handleCreate = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const getAllBooks = async () => {
    try {
      const response = await axios
        .get("http://127.0.0.1:8000/api/books")
        .then((data) => {
          setData(data.data);
        });

      return;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <>
      <span>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>AUTHOR</th>
              <th>PUBLISHER</th>
              <th> {<BiAddToQueue onClick={handleCreate} />}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((book) => (
              <tr key={data.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>

                <td> {<AiFillEdit />}</td>
                <td> {<MdOutlineDeleteForever />}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </span>
    </>
  );
};

export default List;
