import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

export default function DetailsPage() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  async function getProductDetails() {
    const productResponse = await axios.get(
      `http://localhost:4000/products/${id}`
    );
    console.log(productResponse.data);
    setProduct(productResponse.data);
  }

  useEffect(() => {
    getProductDetails();
  }, []);

  console.warn(product);

  return product ? (
    <div>
      <ProductCard
        key={product.id}
        title={product.title}
        rating={product.rating}
        price={product.price}
        mainImage={product.mainImage}
        description={product.description}
      />
    </div>
  ) : (
    <p>Loading ...</p>
  );
}
