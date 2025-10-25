import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(shopContext);
  const [bestSeller, setBestSeller] = useState([]);
  useEffect(() => {
    setBestSeller(products.filter((item) => item.bestseller).slice(0, 5));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1="BEST" text2="SELLERS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, nemo
          natus? Sit impedit
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            id={item._id}
            image={item.image}
            price={item.price}
            name={item.name}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
