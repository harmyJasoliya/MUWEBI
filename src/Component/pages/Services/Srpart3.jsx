import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// icon
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import ArchitectureOutlinedIcon from '@mui/icons-material/ArchitectureOutlined';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import ComputerIcon from '@mui/icons-material/Computer';
function Srpart3() {
    return (
        <>

            <Typography
                component='div'
                className='black'
                sx={{ backgroundColor: '#1c1c1c' }}
            >
                <Container>
                    <Typography sx={{ display: 'flex', color: 'white' }}>
                        <Typography
                            sx={{
                                textAlign: 'center',
                                margin: 'auto',
                                margin: '50px'
                            }}
                        >
                            <DesktopWindowsOutlinedIcon
                                sx={{color: 'gray',fontSize:'60px'}}
                            />
                            <Typography variant='h6'>Web Development</Typography>
                            <Typography variant='p' sx={{ color: 'gray' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</Typography>
                        </Typography>


                        <Typography
                            sx={{
                                textAlign: 'center',
                                margin: 'auto',
                                margin: '50px'
                            }}
                        >
                            <DesignServicesOutlinedIcon
                                 sx={{color: 'gray',fontSize:'60px'}}
                            />
                            <Typography variant='h6'>Logo & Identity</Typography>
                            <Typography variant='p' sx={{ color: 'gray' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</Typography>
                            <Typography></Typography>
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: 'center',
                                margin: 'auto',
                                margin: '50px'
                            }}
                        >
                            <ArchitectureOutlinedIcon
                                 sx={{ color: 'gray',fontSize:'60px'}}
                            />
                            <Typography variant='h6'>Graphics Design</Typography>
                            <Typography variant='p' sx={{ color: 'gray' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</Typography>
                            <Typography></Typography>
                        </Typography>
                    </Typography>
                </Container>
            </Typography>


            <Typography
                component='div'
                className='black'
                sx={{ backgroundColor: '#1c1c1c' }}>
                <Container>
                    <Typography sx={{ display: 'flex', color: 'white' }}>

                        <Typography
                            sx={{
                                textAlign: 'center',
                                marginTop: '40px',
                                margin: 'auto',
                                margin: '50px'
                            }}
                        >
                            <CrisisAlertIcon
                                 sx={{ color: 'gray',fontSize:'60px' }}
                            />
                            <Typography variant='h6'>App Development</Typography>
                            <Typography variant='p' sx={{ color: 'gray' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</Typography>
                        </Typography>


                        <Typography
                            sx={{
                                textAlign: 'center',
                                marginTop: '40px',
                                margin: 'auto',
                                margin: '50px'

                            }}
                        >
                            <ContentCutOutlinedIcon
                                 sx={{ color: 'gray',fontSize:'60px' }}
                            />
                            <Typography variant='h6'>Social Marketing</Typography>
                            <Typography variant='p' sx={{ color: 'gray' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</Typography>
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: 'center',
                                marginTop: '40px',
                                margin: 'auto',
                                margin: '50px'
                            }}
                        >
                            <ComputerIcon
                                 sx={{ color: 'gray',fontSize:'60px' }}
                            />
                            <Typography variant='h6'>Content Creation</Typography>
                            <Typography variant='p' sx={{ color: 'gray'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</Typography>
                        </Typography>
                    </Typography>
                </Container>

            </Typography>

        </>
    );
}
export default Srpart3;