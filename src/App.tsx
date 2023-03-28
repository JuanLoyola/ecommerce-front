import React, { useState, useEffect } from "react";
import axios from "axios";

// react components
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Navbar />
      <main className='w-full lg:max-w-7xl flex flex-col justify-center items-center gap-y-10'>
        <h1 className="font-bold text-lg lg:text-2xl xl:text-3xl uppercase mt-5">Stock inmediato</h1>
        <ProductList products={products} />
      </main>

    </div>
  );
}

export default App;
