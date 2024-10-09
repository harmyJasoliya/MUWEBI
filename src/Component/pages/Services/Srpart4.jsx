import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// icon
import DoneIcon from '@mui/icons-material/Done';
function Srpart4() {
    return (
        <>
            <Container>
                <Typography sx={{ display: 'flex', margin: '150px 0 150px 0' }}>
                        <Typography
                            component='img'
                            src='https://www.themezaa.com/html/pofo/images/services-img2.jpg'
                            sx={{
                                width: '50%'
                            }}
                        >
                    
                        </Typography>
                    <Typography>
                        <Typography variant='h4' sx={{ marginLeft: '70px' }}>
                            Beautifully handcrafted templates for your website
                        </Typography>
                        <Typography component='ul' sx={{ color: 'gray',flexWrap:'wrap',marginLeft:'53px'}}>
                            <Typography component='li' sx={{borderBottom:1,borderColor:'gray',padding:'10px'}}> <DoneIcon/> Beautiful and easy to understand UI, professional animations</Typography>
                            <Typography component='li' sx={{borderBottom:1,borderColor:'gray',padding:'10px'}}> <DoneIcon/> Theme advantages are pixel perfect design & clear code delivered</Typography>
                            <Typography component='li' sx={{borderBottom:1,borderColor:'gray',padding:'10px'}}> <DoneIcon/> Present your services with flexible, convenient and multipurpose</Typography>
                            <Typography component='li' sx={{borderBottom:1,borderColor:'gray',padding:'10px'}}> <DoneIcon/> Find more creative ideas for your projects</Typography>
                            <Typography component='li' sx={{borderBottom:1,borderColor:'gray',padding:'10px'}}> <DoneIcon/> Unlimited power and customization possibilities</Typography>
                        </Typography>
                    </Typography>
                </Typography>
            </Container>
        </>
    );
}
export default Srpart4;