import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const fetchData = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  };
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery("product " + id, fetchData);

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
    <div className="flex flex-col md:flex-row px-4 py-6 items-center gap-6 md:gap-12">
      <div className="h-96 w-full md:w-1/3">
        <img
          className="h-auto max-h-96 w-auto mx-auto"
          src={product.image}
          alt=""
        />
      </div>
      <div className="flex flex-col items-center md:items-start gap-2 md:gap-4 flex-1">
        <span className="text-xl  md:text-2xl font-semibold text-center md:text-start">
          {product.title}
        </span>
        <span className="text-xl font-bold">Price : {product.price}$</span>
        <span className="text-sm capitalize font-medium">
          Category : {product.category}
        </span>
        <span className="text-sm bg-blue-500 text-white font-semibold px-2 py-1 rounded flex items-center">
          Rating : {product.rating.rate}
          <AiFillStar className="inline leading-none mr-1" />
          <span className="font-normal">({product.rating.count})</span>
        </span>
        <button
          className="py-2 px-4 bg-blue-500 rounded-md text-white font-semibold capitalize hover:bg-blue-400"
          onClick={() => addToCart(product)}
        >
          add to cart
        </button>
        <span>Description : {product.description}</span>
      </div>
    </div>
  );
};

export default ProductDetails;
