import * as React from 'react';
// import App from './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

// icon
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';


function Lastimg() {
    return (

        <>
            <Typography
                component='div'
                className='Last'
                sx={{
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                }}
            >

            </Typography>

            <Typography
                component='div'
                className='Lasttext'
                sx={{
                    margin: '100px 400px 100px 400px'
                }}
            >

                <Container>
                    <Typography
                        sx={{
                            marginLeft:'200px',
                             color: '#ff214f'
                        }}
                    >
                        <FormatQuoteIcon
                            sx={{
                                // color:'',
                                fontSize:'200px',
                                rotate:'180deg'
                               
                            }}
                        />
                    </Typography>
                    <Typography
                        component='div'
                        className='pera'
                        variant='h5'

                        sx={{
                            textAlign: 'center',
                            fontFamily: "'Montserrat', sans-serif'",
                            container: 'inherit',
                            fontsize: '25px'
                        }}
                    >
                        This is an excellent company! I personally enjoyed the energy and the professional support the whole team gave to us into creating website.
                    </Typography>

                    <Typography
                        variant='h6'
                        sx={{
                            color: 'gray',
                            fontSize: '15px',
                            textAlign: 'center',
                            marginTop:'30px',
                           
                        }}
                    >
                        MATTIE STEPANEK

                    </Typography>
                </Container>
            </Typography>

        </>
    );
}
export default Lastimg;