import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

export default function DetailsPage() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  async function getProductDetails() {
    const productResponse = await axios.get(`/products/${id}`);
    console.log(productResponse.data);
    setProduct(productResponse.data);
  }

  useEffect(() => {
    getProductDetails();
  }, []);

  return product ? (
    <div>
      <Link to="/"> &laquo; Go back</Link>

      <ProductCard
        key={product.id}
        title={product.title}
        rating={product.rating}
        price={product.price}
        mainImage={product.mainImage}
        description={product.description}
        hideButton={true}
      />
    </div>
  ) : (
    <p>Loading ...</p>
  );
}
