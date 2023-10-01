import { useState } from "react";
import icon from "./photos/icons8-search-50.png";
const SearchBar = () => {


  const[state,setState]=useState([]);

  async function getData() {
    const get = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    const data = await get.json();
    console.log(data);
  }

  return (
    <div className="search">
      <input
        className="input"
        type="text"
        placeholder="Enter ingredients "
      ></input>
      <img
        onClick={() => {
          getData();
        }}
        src={icon}
        alt=""
      ></img>
    </div>
  );
};
export default SearchBar;
