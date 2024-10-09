import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function TeamBigimg() {
    return (
        <>
              <Typography
                component='div'
                className='Teamback'
                sx={{
                    backgroundSize: 'cover',
                    
                }}
            >


                <Container>
                    <Container>
                        <Typography
                             component='div'
                             className='Teamfront'
                            sx={{
                                color: 'white',
                                textAlign:'center',
                                padding:'auto',
                             }}

                        >
                        
                        <Typography
                            variant='h2'
                            sx={{
                                fontSize: '55px',

                            }}
                        >

                            Team member
                        </Typography>
                        <Typography component='p'>
                        Unlimited power and customization possibilities
                        </Typography>
                        </Typography>
                    </Container>
                </Container>
            </Typography>
           
        </>
    );
}
export default TeamBigimg;