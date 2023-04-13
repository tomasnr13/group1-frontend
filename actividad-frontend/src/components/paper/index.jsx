import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';




export const SimplePaper = ({piece}) =>  {
    styles = {
        paperContainer: {
            margin:3,
            height: 300,
            width: 200,
            alignSelf: 'center',
            backgroundImage: `url(${piece.imageUrl})`
        }
    };

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
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'absolute', bottom: 0, left: 0, width: '100%', p: 1 }}>
                <Box sx={{ backgroundColor: 'red', width: 40, height: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>${piece.price}</Box>
                <Box sx={{ backgroundColor: 'black', color: 'white', width: 20, height: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>${piece.id}</Box>
            </Box>
        </Paper>
      
    </Box>
  );
}