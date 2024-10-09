import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Abbigimg() {
    return (
        <>
              <Typography
                component='div'
                className='aboutback'
                sx={{
                    backgroundSize: 'cover',
                    
                }}
            >


                <Container>
                    <Container>
                        <Typography
                             component='div'
                             className='abfront'
                            sx={{
                                color: 'white',
                                textAlign:'center',
                                padding:'auto',
                             }}

                        >
                        <Typography component='p'>
                         We are awesome designer
                        </Typography>
                        <Typography
                            variant='h2'
                            sx={{
                                fontSize: '55px',

                            }}
                        >

                            About simple
                        </Typography>
                        
                        </Typography>
                    </Container>
                </Container>
            </Typography>
            {/* <Typography
                component='div'
                className='aboutback'
               
            >

                <Container>
                    <Container>
                        <Typography
                            component='div'
                            className='aboutfront'
                            sx={{
                                color: 'white',

                            }}

                        >
                         <Typography component='p'>
                         We are awesome designer
                        </Typography>
                        <Typography
                            variant='h2'
                            sx={{
                                fontSize: '55px',

                            }}
                        >

                            About simple
                        </Typography>
                        
                        </Typography>
                    </Container>
                </Container>
            </Typography>

            <Typography
                component='div'
                className='abbig'
            ></Typography> */}
        </>
    );
}
export default Abbigimg;