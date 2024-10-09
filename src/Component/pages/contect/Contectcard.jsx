import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Contectcard() {
    return (
        <>
            <Container>
                <Typography sx={{ display: 'flex', textAlign: 'center', padding: '50px' }}>

                    <Typography sx={{ width: '33.33%', border: 1, borderColor: 'gray', padding: '70px', margin: '0 15px 0 15px' }}>
                        <Typography component='img' src='https://www.themezaa.com/html/pofo/images/flag-aus.jpg'></Typography>
                        <Typography variant='h6' sx={{ marginTop: '10px' }}>ICELAND</Typography>
                        <Typography variant='p' sx={{ color: 'gray' }}>401 Broadway, 24th Floor Iceland, Iceland 10013.</Typography>
                        <br />
                        <br />
                        <Typography variant='p' sx={{ color: 'gray' }} >P: + 1-800-222-000</Typography> <br />
                        <Typography variant='p' sx={{ color: 'gray' }} >E: info@domain.com</Typography>
                    </Typography>



                    <Typography sx={{ width: '33.33%', border: 1, borderColor: 'gray', padding: '70px', margin: '0 15px 0 15px' }}>
                        <Typography component='img' src='https://www.themezaa.com/html/pofo/images/flag-france.jpg'></Typography>
                        <Typography variant='h6' sx={{ marginTop: '10px' }}>FRANCE</Typography>
                        <Typography variant='p' sx={{ color: 'gray' }}>West 14th North Street,Suite 21, Netherlands</Typography>
                        <br />
                        <br />
                        <Typography variant='p' sx={{ color: 'gray' }} >P: + 1-800-222-000</Typography> <br />
                        <Typography variant='p' sx={{ color: 'gray' }} >E: info@domain.com</Typography>
                    </Typography>



                    <Typography sx={{ width: '33.33%', border: 1, borderColor: 'gray', padding: '70px', margin: '0 15px 0 15px' }}>
                        <Typography component='img' src='https://www.themezaa.com/html/pofo/images/flag-switzerland.jpg'></Typography>
                        <Typography variant='h6' sx={{ marginTop: '10px' }}>SWITZERLAND</Typography>
                        <Typography variant='p' sx={{ color: 'gray' }}>Maria Reichenbach,Zürich 8022, Switzerland</Typography>
                        <br />
                        <br />
                        <Typography variant='p' sx={{ color: 'gray' }} >P: + 1-800-222-000</Typography> <br />
                        <Typography variant='p' sx={{ color: 'gray' }} >E: info@domain.com</Typography>
                    </Typography>

                </Typography>
                <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14877.966210690114!2d72.83973144999999!3d21.2123479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e63a5de0acb%3A0x949ba536d8173a53!2sCEAT%20Shoppe%2C%20Shiv%20Auto%20Tyre!5e0!3m2!1sen!2sin!4v1715749530573!5m2!1sen!2sin" width="100%" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>``
                </div>
                <Typography >
                    <Typography sx={{ textAlign: 'center', margin: '120px',fontFamily:"'Montserrat', sans-serif" }}>
                        <Container>
                            <Typography component='span' sx={{ color: 'red' }}>WE COMBINE DESIGN, THINKING AND CRAFT</Typography>
                            <Typography variant='h4' sx={{ fontSize: '40px', marginBottom: '30px' }}>Over 10 years we have been helping build brands in the world</Typography>
                            <Typography variant='p' sx={{color:'gray'}} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
                        </Container>
                    </Typography>
                    
                </Typography>
            </Container>
           
            <Typography component='img' src='https://www.themezaa.com/html/pofo/images/contact-img1.jpg' sx={{width:'1470px'}}></Typography>
        </>
    );
}
export default Contectcard;