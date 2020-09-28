import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";

function Home() {
  const url = `https://5f70fd9b64a3720016e60135.mockapi.io/products?page=1&limit=10`;
  const [products, setProducts] = useState({
    loading: false,
    data: null,
    error: false,
  });
  useEffect(() => {
    setProducts({
      loading: true,
      data: null,
      error: false, // to handle errors
    });
    axios
      .get(url)
      .then((response) => {
        setProducts({
          loading: false,
          data: response.data,
          error: false,
        });
      })
      .catch(() => {
        //handling error
        setProducts({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

  let content = null;

  if (products.error) {
    content = (
      <div>
        <p> There's a huge error huhhaha </p>
      </div>
    );
  }

  if (products.loading) {
    content = <Loader />;
  }

  if (products.data) {
    content = products.data.map((product) => (
      <div key={product.id}>
        <ProductCard product={product} />
      </div>
    ));
  }

  return (
    <div>
      <h1>Dummy Products</h1>
      {content}
    </div>
  );
}

export default Home;
