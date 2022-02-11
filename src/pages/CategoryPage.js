import axios from "axios";
import { useState, useEffect } from "react";
import { SideBar } from "../components";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const [category, setCategory] = useState([]);
  const routeParams = useParams();

  const getCategory = async () => {
    try {
      const response = await axios.get(`/categories/${routeParams.id}`);
      console.log(response.data);
      setCategory(response.data.products);
    } catch (error) {
      console.warn("No data found", error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const sortedCategory = category.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });

  // console.warn(category);
  return (
    <div className="side-main">
      <SideBar />
      <div className="">
        <h2>Category</h2>
        {sortedCategory.map((product, index) => {
          return (
            <ProductCard
              key={index}
              title={product.title}
              price={product.price}
              rating={product.rating}
              mainImage={product.mainImage}
              id={product.id}
            />
          );
        })}
      </div>
    </div>
  );
}
console.warn(ProductCard);
