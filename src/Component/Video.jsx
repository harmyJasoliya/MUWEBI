import * as React from 'react';
// import App from './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// icon
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';



function Video() {
    return (
        <>
            <Typography
                variant='h6'
                sx={{
                    color: 'gray',
                    fontSize: '15px',
                    textAlign: 'center'
                }}
            >
                HOW TO MAKE DECORATIVE LIGHT

            </Typography>
            <Typography
                component='div'
                className='pr2'
                sx={{
                    margin: '10px 100px 100px 100px'
                }}
            >
                <Container>
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
                        Holistic brand redesign focusing product design, interface design, studio photograph style, icon design, editorial design, web design & motion design.
                    </Typography>
                </Container>
            </Typography>

            <Typography
                component='div'
                className='Videoplay'
                variant='a'
                href='https://www.youtube.com/watch?v=sU3FkzUKHXU'
                target='0'
                
                sx={{
                    position:'relative'
                }}
            >
                <Typography
                    component='img'
                    src="https://www.themezaa.com/html/pofo/images/single-project-02-img7.jpg"
                    sx={{
                        marginX: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative'
                    }}
                >

                </Typography>
                <PlayCircleOutlineIcon
                    sx={{
                        position: 'absolute',
                        fontSize: 100,
                        color: 'white',   
                        top:'50%',
                        right:'45%'

                    }}
                />
            </Typography>

        </>
    );
}
export default Video;