import axios from "axios";
import ProductCard from "../components/ProductCard";
import { SideBar } from "../components";

import { useState, useEffect } from "react";

export default function HomePage(props) {
  const [products, setProducts] = useState([]);

  const [starChecked, setStarChecked] = useState({
    oneStars: false,
    twoStars: false,
    threeStars: false,
    fourStars: false,
    fiveStars: false,
  });

  const [catChecked, setCatChecked] = useState({
    electronics: false,
    man: false,
    woman: false,
    jewelery: false,
  });

  const allProducts = async () => {
    try {
      const response = await axios.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.warn("No data found", error);
    }
  };
  const sortedproduct = products.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });

  useEffect(() => {
    allProducts();
  }, []);

  const filteredProducts = sortedproduct
    .filter((product) => {
      if (!props.searchval) {
        return sortedproduct;
      }
      return product.title
        .toLowerCase()
        .includes(props.searchval.toLowerCase());
    })
    .filter((product) => {
      if (
        !catChecked.electronics &&
        !catChecked.jewelery &&
        !catChecked.man &&
        !catChecked.woman
      ) {
        return true;
      }

      if (catChecked.electronics === true) {
        return product.category.title === "Electronics";
      }
      if (catChecked.jewelery === true) {
        return product.category.title === "Jewelery";
      }
      if (catChecked.man === true) {
        return product.category.title === "Men's Clothing";
      }
      if (catChecked.woman === true) {
        return product.category.title === "Women's Clothing";
      }
      return true;
    })
    .filter((product) => {
      if (
        !starChecked.oneStars &&
        !starChecked.twoStars &&
        !starChecked.threeStars &&
        !starChecked.fourStars &&
        !starChecked.fiveStars
      ) {
        return true;
      }
      if (starChecked.oneStars === true) {
        return product.rating >= 1 && product.rating <= 2;
      }
      if (starChecked.twoStars === true) {
        return product.rating >= 2 && product.rating <= 3;
      }
      if (starChecked.threeStars === true) {
        return product.rating >= 3 && product.rating <= 4;
      }
      if (starChecked.fourStars === true) {
        return product.rating >= 4 && product.rating <= 4.99;
      }
      if (starChecked.fiveStars === true) {
        return product.rating === 5;
      }
      return true;
    });

  // const filterBox = sortedproduct.filter((product) => {
  // const categoryFiltered = sortedproduct

  return (
    <div className="side-main">
      <SideBar
        filterval={catChecked}
        filterset={setCatChecked}
        starval={starChecked}
        starset={setStarChecked}
      />
      <div className="">
        {filteredProducts.map((product, index) => {
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
