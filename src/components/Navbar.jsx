import React from "react";
import { BiCart } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const products = useSelector((state) => state.cart);
  console.log(products);
  return (
    <nav className="h-16 w-full px-6 py-2 flex items-center justify-between border-b sticky top-0 bg-white">
      <Link to={"/"}>
        <h3 className="capitalize text-2xl font-semibold">react store</h3>
      </Link>
      <Link className="relative" to={"/cart"}>
        <BiCart size={30} />
        <p className="h-4 w-4 rounded-full bg-slate-300 text-center text-xs font-bold absolute -right-1 top-0">
          {products.length}
        </p>
      </Link>
    </nav>
  );
};

export default Navbar;
