import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <div>
      <Link to={`/products/${props.product.id}`}>
        <div
          style={{
            backgroundImage: `url('${props.product.images[0].imageUrl}')`,
          }}
          className="w-full h-64 bg-blue bg-cover"
        ></div>
      </Link>
      <div p-3>
        <h3>
          <Link to={`/products/${props.product.id}`}>{props.product.name}</Link>
        </h3>
        <div>$ {props.product.price}</div>
        <div>{props.product.description}</div>
        <Link
          to={`/products/${props.product.id}`}
          className="bg-blue-500 text-white p-2 flex justify-center w-full"
        >
          View
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
