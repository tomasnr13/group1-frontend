import "./style.css";
import React, { useState, useEffect } from 'react';

/**
 * Este componente es de ejemplo y solo sirve para marcar sitios en el layout.
 */
const fetchProducts = async () => {
    try {
        console.log("here")
        const response = await fetch('/products');
        const data = await response.json();
        console.log("data ", data);
        return data; // Assuming you want to display the total confirmed cases globally
    } catch (error) {
        console.error("Error fetching data: ", error);
        return null;
    }
};

export const Ranking = ({ width, height }) => {
    //fetch the data from the API
    const [products, setProducts] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const products = await fetchProducts();
            setProducts(products);
        };
        fetchData();
    }, []);
    console.log(products);
    return (
        <div className="ranking" style={{ width, height }}>
            <div className="tab"></div>
        </div>
    )
}