import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


function Abpart4() {
    return (
        <Typography sx={{ textAlign: 'center', margin: '120px' }}>
            <Container>
                <Typography component='span' sx={{ color: 'red' }}>Don’t worry, you’re in safe hands.</Typography>
                <Typography variant='h4' sx={{ fontSize: '30px', marginBottom: '30px' }}>We are committed to our customers’ success from start to finish. Our input helps make their solutions.</Typography>
            </Container>
            <Typography sx={{ display: 'flex' }}>
                <Typography component='img' src='https://www.themezaa.com/html/pofo/images/about-img1.jpg' sx={{ width: '65%', padding: '12px', borderRadius: '50px' }}></Typography>
                <Typography component='img' src='https://www.themezaa.com/html/pofo/images/about-img2.jpg' sx={{ width: '35%', padding: '12px', borderRadius: '50px' }} ></Typography>
            </Typography>
            <Typography sx={{ padding: '100px 0px 20px 0px' }}>
                <Container>
                    <Typography sx={{ display: 'flex' }}>
                        <Typography variant='h5' sx={{ width: '47%', textAlign: 'left' }}>We're fortunate to work with fantastic clients from across the globe in over 11 countries on design and branding.</Typography>

                        <Typography sx={{ width: '45%', textAlign: 'left', padding: '8px',marginLeft:'30px' }}>
                            <Typography variant='h6'>Our approach</Typography><Typography sx={{ color: 'gray' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</Typography>
                        </Typography>
                        <Typography sx={{ width: '45%', textAlign: 'left', padding: '8px',marginLeft:'30px'  }}>
                            <Typography variant='h6'>Our Mission</Typography><Typography sx={{ color: 'gray' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</Typography>
                        </Typography>
                    </Typography>
                </Container>
            </Typography>
        </Typography>

    );
}
export default Abpart4;