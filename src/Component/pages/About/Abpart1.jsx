import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// icon
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
function Abpart1() {
    return (

        <Container>
            <Typography sx={{margin:'80px 0px 80px 0px',display:'flex'}}>
                <Typography component='img' src='https://www.themezaa.com/html/pofo/images/about-img3.jpg' sx={{width:'40%',margin:'20px 20px 20px 20px'}}>

                </Typography>
                <Typography component='div' className='abpart1write'>
                    <Typography sx={{padding:'0px 0px 0px 50px', margin:'20px'}}>
                        <Typography component='span' sx={{color:'red'}}>Don’t worry, you’re in safe hands.</Typography>
                        <Typography variant='h4' sx={{fontSize:'30px',marginBottom:'30px'}}>We are committed to our customers’ success from start to finish. Our input helps make their solutions.</Typography>
                        <Typography variant='p' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is printing and typesetting simply dummy text.</Typography>
                        <Typography component='button'sx={{border:'2',borderRadius:'50px',padding:'5px',fontSize:'15px',margin:'30px 2px 0px 0px',backgroundColor:'black',color:'white',display:'flex',alignItems:'center' }}><PlayCircleFilledIcon sx={{color:'white',margin:'0 1px 0 1px'}}/>OUR SERVICES</Typography>
                    </Typography>  
                </Typography>
            </Typography>
        </Container>
    );
}
export default Abpart1