import React, { useState, useEffect } from "react";


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
    
  
export const FilterSelector = ({ onFilter }) => {
    
    const [type, setType] = useState(null);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
        };
        fetchData();
    }, []);
    
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const handleFilter = () => {
        // Perform filtering logic here
        const filter = {
        type,
        startDate,
        endDate
        };
        // Pass the filter object to the parent component
        onFilter(filter);
    };

  return (
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
  );
};

