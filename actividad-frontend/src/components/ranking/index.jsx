import "./style.css";
import React, { useState, useEffect } from 'react';

/**
 * Este componente es de ejemplo y solo sirve para marcar sitios en el layout.
 */

const fetchCategories = async () => {
    try {
      const response = await fetch('/products/categories');
      const data = await response.json();
      console.log("Categories ", data);
      return data; // Assuming you want to display the total confirmed cases globally
    } catch (error) {
      console.error("Error fetching cattegories: ", error);
      return null;
    }
  };

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
    const [categories, setCategories] = useState([]);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    
    useEffect(() => {
        const fetchData = async () => {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
        };
        fetchData();
    }, []);

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
    
    const handleFilter = async () => {
        // Perform filtering logic here
        const filter = {
            type,
            startDate,
            endDate
        };
        // Pass the filter object to the parent component
        const ranking = await fetchRanking({type,startDate,endDate});
        console.log(ranking);
    };

    return (
        <div className="ranking" style={{ width, height }}>
            <div>
            <h2>Filter Selector</h2>
            
            <label htmlFor="typeSelect">Type:</label>
            <select
                id="typeSelect"
                value={type}
                onChange={(e) => setType(e.target.value)}
                >
                <option value="">-- All --</option>
                {categories?.map((element, index) => (
                    <option key={index} value={element}>
                    {element}
                    </option>
                ))}
            </select>
            <label htmlFor="startDateInput">Start Date:</label>
            <input
                id="startDateInput"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
            <label htmlFor="endDateInput">End Date:</label>
            <input
                id="endDateInput"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            />
            <button onClick={handleFilter}>Filter</button>
            </div>
        </div>
    )
}