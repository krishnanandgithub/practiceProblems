import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [books, addBooks] = useState([]);

  useEffect(() => {
    fetch("./library.json")
      .then((res) => res.json())
      .then((data) => addBooks(data));
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {books.map(({ title, author, year }) => (
            <tr>
              <td>{title}</td>
              <td>{author}</td>
              <td>{year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
