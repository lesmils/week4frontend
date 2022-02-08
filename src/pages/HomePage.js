import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  const allProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/products");
      //Sort products by name
      let sortedproduct = response.data.sort(function (a, b) {
        console.log(response);
        return a.title.localeCompare(b.title);
      });

      setProducts(sortedproduct);
    } catch (error) {
      console.warn("No data found", error);
    }
  };

  useEffect(() => {
    allProducts();
  }, []);

  console.warn(products);
  return (
    <div>
      <h1>products</h1>
      <div>
        {products.map((product, index) => {
          return (
            <li>
              <ProductCard
                key={index}
                name={product.title}
                price={product.price}
                mainImage={product.mainImage}
                id={product.id}
              />
            </li>
          );
        })}
      </div>
    </div>
  );
}
console.warn(ProductCard);
