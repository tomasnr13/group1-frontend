import React, { useState, useEffect } from 'react';

//fetch the data from the API
const fetchSummary = async () => {
  try {
    const response = await fetch('/report-summary');
    const data = await response.json();
    console.log("data ", data);
    return data; // Assuming you want to display the total confirmed cases globally
  } catch (error) {
    console.error("Error fetching summary: ", error);
    return null;
  }
};

export const Summary = ({ width, height }) => {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedSummary = await fetchSummary();
      setSummary(fetchedSummary);
    };
    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex', height: height }}>
      <div style={{ flex: 1, backgroundColor: '#f0f0f0', margin: "1em" }}>
        {/* First partition */}
        <div style={{ display: "flex", flexDirection: "row" , alignItems: "center", justifyContent: "center", justifyItems: "center"}}>
            <h1>{summary?.totalProducts} </h1>
            <p> pedidos</p>
        </div>
      </div>
      <div style={{ flex: 1, margin: "1em" }}>
        {/* Second partition */}
        <div style={{ display: "flex", flexDirection: "row" , alignItems: "center", justifyContent: "center", justifyItems: "center"}}>
            <h1>{summary?.totalOrders} </h1>
            <p> unidades</p>
        </div>
      </div>
      <div style={{ flex: 1, margin: "1em" }}>
        {/* Third partition */}
        <div style={{ display: "flex", flexDirection: "row" , alignItems: "center", justifyContent: "center", justifyItems: "center"}}>
            <h1>{summary?.totalSales}</h1>
            <p>importe</p>
        </div>
      </div>
      <div style={{ flex: 1, margin: "1em" }}>
        {/* Blank partition */}
        
      </div>
    </div>
  );
};
