import "./style.css";
import React, { useState, useEffect } from 'react';

/**
 * Este componente es de ejemplo y solo sirve para marcar sitios en el layout.
 */
const fetchProducts = async ({}) => {
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

const fetchRanking = async ({type, fromDate, toDate}) => {
    try {
        const response = await fetch('/ranking?type='+type+'&fromDate='+fromDate+'&toDate='+toDate);
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
    const [ranking, setRanking] = useState(null);
    const [type, setType] = useState(null);
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            const products = await fetchProducts();
            setProducts(products);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const ranking = await fetchRanking({type,fromDate,toDate});
            setRanking(ranking);
        };
        fetchData();
    }, []);
    return (
        <div className="ranking" style={{ width, height }}>
            <div className="tab"></div>
        </div>
    )
}