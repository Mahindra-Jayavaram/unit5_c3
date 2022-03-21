// import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { BookCard } from "../BookCard/BookCard";

export const Home = () => {

  // get all books when user lands on the page
  const [books, setBooks] = useState([]);

  useEffect(()=>{
    getData();
  },[])

  const getData = ()=>{
    axios.get("http://localhost:8080/books").then((res)=>{
      setBooks(res.data);
      console.log(res.data)
    })
  }


  // populate them as mentioned below

  const Main = styled.div`
    /* Apply some responsive styling to children */
  `;

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      />

      <Main className="mainContainer" style={{
        display : "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        width: "100%",
      }}>
        {
          books.map((book) =>(
            <BookCard id = {book.isbn} title = {book.title} imageUrl = {book.thumbnailUrl} price = {book.pageCount}/>
          ))
        }

      </Main>
    </div>
  );
};
