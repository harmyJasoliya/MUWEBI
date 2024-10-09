import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Bigim() {
    return (
        <>
            <Typography
                component='div'
                className='back1'
                sx={{
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                }}
            >


                <Container>
                    <Container>
                        <Typography
                            component='div'
                            className='front'
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

                            Services simple
                        </Typography>
                        
                        </Typography>
                    </Container>
                </Container>
            </Typography>

            <Typography
                component='div'
                className=''

            >
                <Container>
                    <Typography
                        src='https://www.themezaa.com/html/pofo/images/services-img1.jpg'
                        sx={{

                        }}
                    >

                    </Typography>
                </Container>
            </Typography>
        </>
    );
}
export default Bigim;