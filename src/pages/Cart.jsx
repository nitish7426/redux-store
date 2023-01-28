import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { remove } from "../redux/cartSlice";
const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeItem = (index) => {
    dispatch(remove(index));
  };
  return (
    <div className="px-4 py-6 min-h-[calc(100vh-4rem)]">
      {products.length == 0 ? (
        <div className="text-xl capitalize text-center">
          cart is empty. please add some products
        </div>
      ) : (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((value) => (
            <ProductCard
              value={value}
              onClick={() => removeItem(value.id)}
              btn="remove item"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
