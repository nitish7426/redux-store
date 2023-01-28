import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { add } from "../redux/cartSlice";
import ProductCard from "../components/ProductCard";
import { useQuery } from "react-query";

const Home = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  };

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery("products", fetchData);

  const addToCart = (product) => {
    dispatch(add(product));
  };
  if (isLoading) {
    return (
      <div className="h-[calc(100vh-4rem)] w-full flex items-center justify-center">
        <div className="h-8 w-8 border-4 border-blue-500 rounded-full animate-spin border-l-transparent"></div>
      </div>
    );
  }
  return (
    <div className="py-6 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 min-h-screen">
      {products.map((value) => (
        <ProductCard
          key={value.id}
          value={value}
          onClick={() => addToCart(value)}
          btn="add to cart"
        />
      ))}
    </div>
  );
};

export default Home;
