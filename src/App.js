import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import { PAGE_SIZE } from "./constants";
import Pagination from "./components/Pagination";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const getProducts = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=-1");
    const json = await data.json();
    console.log(json);
    setData(json.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const start = PAGE_SIZE * currentPage;
  const end = start + PAGE_SIZE;
  const noOfPages = Math.ceil(data.length / PAGE_SIZE);
  console.log(PAGE_SIZE, start, end);
  return !data.length ? (
    <h1>No data found</h1>
  ) : (
    <div className="App">
      <h1>Pagination</h1>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        noOfPages={noOfPages}
      />
      <div className="product-container">
        {data.slice(start, end).map((d) => (
          <ProductCard key={d.id} title={d.title} image={d.thumbnail} />
        ))}
      </div>
    </div>
  );
}
