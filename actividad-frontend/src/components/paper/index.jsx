import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


export const SimplePaper = ({piece}) =>  {
    var styles = {
        paperContainer: {
            margin:3,
            height: 350,
            width: 250,
            alignSelf: 'center',
            //backgroundImage: `url(${piece.imageUrl})`
            backgroundImage: `url("../../public/assets/products/dress_a.jpg")`
        }
    };

  return (
    
      <Paper style={styles.paperContainer}
            sx={{
                backgroundColor: 'white',
                backgroundSize: 'cover',
                position: 'relative',
                '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                left: 0,
                width: 50,
                height: 50,
                },
            }}
            >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'absolute', top: 3, left: 0, width: '93%', p: 1 }}>
                <Box sx={{ backgroundColor: 'red', fontSize: 10,color: 'white', width: 50, height: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{piece.price}€</Box>
                <Box sx={{ backgroundColor: 'black', fontSize: 10, color: 'white', width: 20, height: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{piece.id}</Box>
            </Box>
        </Paper>
  );
}