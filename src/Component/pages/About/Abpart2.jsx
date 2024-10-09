import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// icon
import MonitorSharpIcon from '@mui/icons-material/MonitorSharp';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

function Abpart2() {
    return (

        <Container>
            <Typography sx={{display:'flex' ,borderTop:1,borderColor:'gray'}}>
                <Typography sx={{ width:'33.33%' , display:'flex', padding:'30px'}}>
                    <Typography>
                        <Typography >
                            <Typography><MonitorSharpIcon sx={{ color:'gray',fontSize:'50px'}}/></Typography>
                        </Typography>
                    </Typography>
                    
                    <Typography sx={{marginLeft:'10px'}}>
                        <Typography sx={{padding:'10px'}}>Digital Solutions</Typography>
                        <Typography sx={{ color:'gray',fontSize:'14px',padding:'5px'}}>Lorem Ipsum is simply text the printing and typesetting standard industry.</Typography>
                    </Typography>
                </Typography>
                <Typography sx={{ width:'33.33%' , display:'flex', padding:'30px'}}>
                    <Typography>
                        <Typography >
                            <Typography><MenuBookIcon sx={{ color:'gray',fontSize:'50px'}}/></Typography>
                        </Typography>
                    </Typography>
                    
                    <Typography sx={{marginLeft:'10px'}}>
                        <Typography sx={{padding:'10px'}}>SEO Marketing</Typography>
                        <Typography sx={{ color:'gray',fontSize:'14px',padding:'5px'}}>Lorem Ipsum is simply text the printing and typesetting standard industry.</Typography>
                    </Typography>
                </Typography>
                <Typography sx={{ width:'33.33%' , display:'flex', padding:'30px'}}>
                    <Typography>
                        <Typography >
                            <Typography><CardGiftcardIcon sx={{ color:'gray',fontSize:'50px'}}/></Typography>
                        </Typography>
                    </Typography>
                    
                    <Typography sx={{marginLeft:'10px'}}>
                        <Typography sx={{padding:'10px'}}>Creative Strategy</Typography>
                        <Typography sx={{ color:'gray',fontSize:'14px',padding:'5px'}}>Lorem Ipsum is simply text the printing and typesetting standard industry.</Typography>
                    </Typography>
                </Typography>
            </Typography>
        </Container>
    );
}
export default Abpart2;