import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function ContectBig() {
    return (
        <>
              <Typography
                component='div'
                className='contectback'
                sx={{
                    backgroundSize: 'cover',
                    
                }}
            >


                <Container>
                    <Container>
                        <Typography
                             component='div'
                             className='contectfront'
                            sx={{
                                color: 'white',
                                textAlign:'center',
                                padding:'auto',
                             }}

                        >
                        <Typography component='p'>
                        We are located in downtown New York
                        </Typography>
                        <Typography
                            variant='h2'
                            sx={{
                                fontSize: '55px',

                            }}
                        >

                            Contect simple
                        </Typography>
                        
                        </Typography>
                    </Container>
                </Container>
            </Typography>
           
        </>
    );
}
export default ContectBig;