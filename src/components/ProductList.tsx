import React, { useState, useEffect } from "react";
import axios from "axios";

interface Product {
    id: number;
    name: string;
    image_url: string;
    description: string;
    price: number;
}

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        axios
            .get<Product[]>("http://localhost:5000/products")
            .then((response) => setProducts(response.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <ul className="grid grid-cols-2 gap-5">
                {products.map((product) => (
                    // Card
                    <li
                        className="h-[28em] w-full max-w-lg bg-white shadow rounded-md p-5 flex flex-col justify-between items-center"
                        key={product.id}
                    >
                        <h3 className="text-lg lg:text-xl text-red-800">{product.name}</h3>

                        {/* Image box */}
                        <div className="h-60 grid place-content-center">
                            <img className="h-50 w-48 object-contain" src={product.image_url} alt={product.name} title={product.name} />
                        </div>

                        {/* Description box */}
                        <div className="w-full max-w-xs inline-flex justify-center items-center truncate">
                            <p className="truncate">{product.description}</p>
                        </div>

                        <p className="w-full inline-flex gap-x-5 justify-center items-center">
                            Precio final:
                            <span>
                                <p className="font-bold text-red-500">
                                    ${product.price}
                                </p>
                            </span>
                        </p>

                        <button className="bg-red-400 hover:bg-red-500 text-white px-7 py-2 rounded-md transition-all inline-flex justify-center items-center gap-x-2">
                            Conoce más
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                            </svg>


                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
