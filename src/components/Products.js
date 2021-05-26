import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
  return (
    <section>
      <div className="flex flex-wrap justify-center w-3/4 m-auto h-full m-0 border-2 border-solid pt-14 ">
        {products.map((product) => (
          <Product
            id={product.id}
            title={product.title}
            price={product.price}
            quantity={product.quantity}
            location={product.location}
            description={product.description}
            category={product.category}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
