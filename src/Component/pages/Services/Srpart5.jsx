import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// icon
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

function Srpart5() {
    return (
        <>
            <Typography sx={{display:'flex',margin:'10px 0 60px 0'}}>
                
                
                <Typography component='div' className='Unlimited' sx={{backgroundColor:'black',color:'white',width:'30%',padding:'70px 40px 70px 40px'}}>
                    <Container>
                        <Typography variant='p' sx={{color:'gray'}}>Build perfect websites</Typography>
                        <Typography variant='h5' sx={{margin:'10px 0px 20px 0px'}}>Unlimited power and customization possibilities</Typography>
                        <Typography variant='p' sx={{color:'gray'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</Typography>
                        <Typography component='Button' sx={{border:'2',borderColor:'white',backgroundColor:'black',color:'white',padding:'5px 10px 5px 10px',marginTop:'30px',textAlign:'center',display:'flex'}}><PlayCircleFilledIcon sx={{color:'white',alignItems:'center',marginRight:'5px'}}/>READ MORE</Typography>
                    </Container>
                </Typography>
               
                <Typography component='div' className='Unlimited' sx={{backgroundColor:'#1c1c1c',color:'white',width:'30%',padding:'70px 40px 70px 40px'}}>
                    <Container>
                        <Typography variant='p' sx={{color:'gray'}}>Unique digital experiences</Typography>
                        <Typography variant='h5' sx={{margin:'10px 0px 20px 0px'}}>Pixel perfect design and clear code delivered to you</Typography>
                        <Typography variant='p' sx={{margin:'60px 10px 60px 10px',color:'gray'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</Typography>
                        <Typography component='Button' sx={{border:'2',borderColor:'white',backgroundColor:'#1c1c1c',color:'white',padding:'5px 10px 5px 10px',marginTop:'30px',textAlign:'center',display:'flex'}}><PlayCircleFilledIcon sx={{color:'white',alignItems:'center',marginRight:'5px'}}/>READ MORE</Typography>
                    </Container>
                </Typography>
                <Typography sx={{width:'38%'}} ><Typography component='img' src='https://www.themezaa.com/html/pofo/images/services-img3.jpg' sx={{width:'100%',height:'100%'}}></Typography></Typography>
            </Typography>

            <Typography>
                <Container>
                    <Typography variant='h4' sx={{fontWeight:'200px',textAlign:'center',padding:'50px 0px 80px 0px'}}>
                        WHY WORK WITH US?
                    </Typography>
                    <Typography sx={{display:'flex',marginBottom:'60px'}}>
                        <Typography sx={{width:'calc(33.33%-10px)',margin:'5px'}}> 
                            <Typography component='img' sx={{width:'100%'}} src='https://www.themezaa.com/html/pofo/images/latest-blog6.jpg'></Typography>
                            <Typography sx={{textAlign:'center'}}><Typography variant='h6'>We believe in creativity</Typography><Typography variant='p' sx={{color:'gray'}}>Lorem Ipsum is simply text the printing and typesetting standard industry.</Typography></Typography>
                        </Typography>
                        
                        
                        
                        <Typography sx={{width:'calc(33.33%-10px)',margin:'5px' }}> 
                            <Typography component='img' sx={{width:'100%'}} src='https://www.themezaa.com/html/pofo/images/latest-blog5.jpg'></Typography>
                            <Typography sx={{textAlign:'center'}}><Typography variant='h6'>We believe in quality</Typography><Typography variant='p' sx={{color:'gray'}}>Lorem Ipsum is simply text the printing and typesetting standard industry.</Typography></Typography>
                        </Typography>


                       
                       
                       
                        <Typography sx={{width:'calc(33.33%-10px)',margin:'5px' }}> 
                            <Typography component='img' sx={{width:'100%'}} src='https://www.themezaa.com/html/pofo/images/latest-blog7.jpg'></Typography>
                            <Typography sx={{textAlign:'center'}}><Typography variant='h6'>We believe in relation</Typography><Typography variant='p' sx={{color:'gray'}}>Lorem Ipsum is simply text the printing and typesetting standard industry.</Typography></Typography>
                        </Typography>
                    </Typography>
                </Container>
            </Typography>
        </>
    );
}
export default Srpart5;