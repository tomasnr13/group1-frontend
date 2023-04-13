import "./style.css";
import React, { useState, useEffect } from 'react';
import { SimplePaper } from "../paper";
import Box from '@mui/material/Box';

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
            const fetchedProducts = await fetchProducts();
            setProducts(fetchedProducts);
            console.log(fetchedProducts);

        };
        fetchData();
    }, []);
    return (
        <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
            },
        }}
        >
        
          {products?.map((piece,index) => (
            <SimplePaper key={index} piece={piece}/>
          ))}
      
      </Box>
    )
}