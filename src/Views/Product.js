import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
/**
 * this component will fetch data from mockApi i created
 * using axios to fetch data
 */
function Product() {
  const { id } = useParams(); //useParams is used for variable in a url in the following line of code
  const url = `https://5f70fd9b64a3720016e60135.mockapi.io/products/${id}`; //here, id is dynamic
  const [product, setProduct] = useState({
    loading: false,
    data: null,
    error: false,
  });

  let content = null;

  //useEffect takes two arguments, 1- function of code we want to run,
  //2- a variable to monitor, if the var changes we'll re run the request
  useEffect(() => {
    setProduct({
      loading: true,
      data: null,
      error: false, // to handle errors
    });
    axios
      .get(url)
      .then((response) => {
        setProduct({
          loading: false,
          data: response.data,
          error: false,
        });
      })
      .catch(() => {
        //handling error
        setProduct({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]); // so now, when the url changes, the code inside will re-run

  if (product.error) {
    content = (
      <div>
        <p> There's a huge error huhhaha </p>
      </div>
    );
  }

  if (product.loading) {
    content = <Loader />;
  }

  //since the default state is null, it wont return anything, causing an error, that's why checking if product has something
  //getting product data from products(mockapi)
  if (product.data) {
    content = (
      <div>
        <h3>{product.data.name}</h3>;
        <div>
          <img src={product.data.images[0].imageUrl} alt={product.data.name} />
        </div>
        <div>$ {product.data.price}</div>
        <div>{product.data.description}</div>
      </div>
    );
  }
  return <div>{content}</div>;
}

export default Product;
