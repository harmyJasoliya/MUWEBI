import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
function Srpart2(){
    return(
        <>
            <Container>
                <Typography
                    component='img'
                    src='https://www.themezaa.com/html/pofo/images/services-img1.jpg'
                    sx={{
                       padding:'0px',
                       margin:'70px 50px 70px -50px',
                        width:'80pc',
                        alignItems:'center'
                    }}
                >

                </Typography>
                <Typography sx={{display:'flex' ,marginBottom:'100px'}}>
                    <Typography
                        component='div'
                        className='w-33'
                        sx={{
                            width:'33.33%',
                            margin:'20px'
                        }}
                    >
                        <Typography variant='span' sx={{fontSize:'12px',color:'gray'}}>CREATIVE</Typography>
                        <Typography
                             variant='h6'sx={{margin:'0px 0 10px 0'}}
                        >
                            Creative thinking & design
                        </Typography>
                        <Typography variant='p' sx={{fontSize:'15px',color:'gray'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry.</Typography>
                        <Typography variant='h1' sx={{fontSize:'10px',color:'red',fontSize:'20px'}}>____</Typography>
                    </Typography>
                    

                    <Typography
                        component='div'
                        className='w-33'
                        sx={{
                            width:'33.33%',
                            margin:'20px'
                        }}
                    >
                        <Typography variant='span' sx={{fontSize:'12px',color:'gray'}}>DIGITAL</Typography>
                        <Typography
                             variant='h6'sx={{margin:'0px 0 10px 0'}}
                        >
                            Creative thinking & design
                        </Typography>
                        <Typography variant='p' sx={{fontSize:'15px',color:'gray'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry.</Typography>
                        <Typography variant='h1' sx={{fontSize:'10px',color:'red',fontSize:'20px'}}>____</Typography>
                    </Typography>



                    <Typography
                        component='div'
                        className='w-33'
                        sx={{
                            width:'33.33%',
                            margin:'20px'
                        }}
                    >
                        <Typography variant='span' sx={{fontSize:'12px',color:'gray',padding:'0'}}>ANALYTICS</Typography>
                        <Typography
                            variant='h6'sx={{margin:'0px 0 10px 0'}}
                        >
                            Creative thinking & design
                        </Typography>
                        <Typography variant='p' sx={{fontSize:'15px',color:'gray'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry.</Typography>
                        <Typography variant='h1' sx={{fontSize:'10px',color:'red',fontSize:'20px'}}>____</Typography>
                    </Typography>
                </Typography>
            </Container>
        </>
    );
}
export default Srpart2;