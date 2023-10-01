import Carts from "./Carts";
import img from "./photos/icons8-search-50.png";
const SearchResult = () => {
  return (
    <div className="result">
      <h1>Your Search Results:</h1>
      <div className="carts">
        <Carts
          thumbnail={img}
          name="aaloo bada"
          ingredients="aalu ,mirchi salt,tel"
          quantity="quantity"
          recipe="View Recipe"
        />
        <Carts
          thumbnail={img}
          name="aaloo bada"
          ingredients="aalu ,mirchi salt,tel"
          quantity="quantity"
          recipe="View Recipe"
        />
        <Carts
          thumbnail={img}
          name="aaloo bada"
          ingredients="aalu ,mirchi salt,tel"
          quantity="quantity"
          recipe="View Recipe"
        />
         <Carts
          thumbnail={img}
          name="aaloo bada"
          ingredients="aalu ,mirchi salt,tel"
          quantity="quantity"
          recipe="View Recipe"
        />
        <Carts
          thumbnail={img}
          name="aaloo bada"
          ingredients="aalu ,mirchi salt,tel"
          quantity="quantity"
          recipe="View Recipe"
        />
        <Carts
          thumbnail={img}
          name="aaloo bada"
          ingredients="aalu ,mirchi salt,tel"
          quantity="quantity"
          recipe="View Recipe"
        />
      </div>
    </div>
  );
};
export default SearchResult;
