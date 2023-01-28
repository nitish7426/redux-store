import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ value, onClick, btn }) => {
  return (
    <div
      className="p-5 border border-black/10 rounded-xl flex gap-4 items-center shadow-lg"
      key={value.id}
    >
      <div className="h-40 w-40">
        <img
          className="max-h-40 max-w-[10rem] w-auto mx-auto"
          src={value.image}
          alt=""
        />
      </div>
      <div className="flex-1 space-y-2">
        <Link
          to={`/${value.id}`}
          className="font-semibold uppercase hover:text-black/80"
        >
          {value.title}
        </Link>
        <p className="text-lg font-medium tracking-wider">{value.price}$</p>
        <p className="py-1 px-2 text-xs border border-black/20 rounded-md capitalize font-medium w-fit">
          {value.category}
        </p>
        <button
          className="btn btn-sm text-white rounded bg-blue-500 border-none hover:bg-blue-600 text-xs uppercase py-2 px-4 font-semibold"
          onClick={onClick}
        >
          {btn}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
