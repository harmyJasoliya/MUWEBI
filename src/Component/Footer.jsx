import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

// icon
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer() {
    return (
        <>
            <Box
                display="flex"
                sx={{
                    backgroundColor: '#1c1c1c',
                    // height: '70vh',
                    padding: '100px 150px 100px 150px'
                }}

            >
                <Container>
                    <Box
                        display={'flex'}
                        fontFamily={"'Montserrat', sans-serif"}

                    >
                        <Box
                            width="30%"
                            borderRight={1}
                            borderColor={'#1c1c1c'}
                            margin={'0 15px 0 15px'}

                        >
                            <Typography>
                                <Typography
                                    component="img"
                                    src="https://www.themezaa.com/html/pofo/images/logo-white.png"
                                    sx={{
                                        backgroundSize: 'cover',
                                        mr: 2,
                                        display: { xs: 'none', md: 'flex' },
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        color: '#6f6f6f',
                                        textDecoration: 'none',
                                    }}
                                >
                                </Typography>
                                <Typography
                                    component='p'
                                    sx={{
                                        color: '#6f6f6f',
                                        fontSize: '12px',
                                        marginTop: '30px'
                                    }}
                                >
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </Typography>
                                <Typography
                                    sx={{
                                        marginTop: '20px'
                                    }}
                                >
                                    <FacebookIcon
                                        sx={{
                                            color: '#6f6f6f',
                                            marginRight: '10px'
                                        }}
                                    />
                                    <TwitterIcon
                                        sx={{
                                            color: '#6f6f6f',
                                            marginRight: '10px'
                                        }}
                                    />
                                    <GoogleIcon
                                        sx={{
                                            color: '#6f6f6f',
                                            marginRight: '10px'
                                        }}
                                    />
                                    <InstagramIcon
                                        sx={{
                                            color: '#6f6f6f',
                                            marginRight: '10px'
                                        }}
                                    />
                                </Typography>
                            </Typography>
                        </Box>
                        <Box
                            width="20%"
                            borderRight={1}
                            borderColor={'gray'}
                            margin={'0 10px 0 10px'}
                        >
                            <Typography
                                variant='h6'
                                sx={{
                                    color: '#6f6f6f',
                                    fontSize: '15px',
                                    marginBottom: '10px'
                                }}
                            >
                                ADDITIONAL LINKS

                            </Typography>
                            <Typography variant='ul'
                                sx={{
                                    color: '#6f6f6f',
                                    fontSize: '16px',
                                    lineHeight: '2',
                                    textAlign:'center',
                                    marginLeft: '15px',
                                    marginRight: '15px'
                                }}
                            >
                                <Typography variant='li'>Home Classic Corporate</Typography>
                                <Typography variant='li'>Home Creative Business</Typography>
                                <Typography variant='li'>Home Creative Designer</Typography>
                                <Typography variant='li'>Home Portfolio Minimal</Typography>
                                <Typography variant='li'>Home Portfolio  parallax</Typography>
                                <Typography variant='li'>Home Portfolio Personal</Typography>

                            </Typography>
                        </Box>
                        <Box
                            width="20%"
                            borderRight={1}
                            borderColor={'gray'}
                            margin={'0 10px 0 10px'}
                            color={'#939393'}
                        >
                            <Typography
                                variant='h6'
                                sx={{
                                    color: '#6f6f6f',
                                    fontSize: '15px',
                                    marginBottom: '10px'
                                }}
                            >
                                CONTECT INFO
                            </Typography>
                            <Typography variant='p'
                                sx={{
                                    color: '#6f6f6f',
                                    fontSize: '12px',
                                    lineHeight: '2',
                                    marginLeft: '15px',
                                    marginRight: '15px'
                                }}
                            >
                                POFO Design Agency
                                301 The Greenhouse, Custard Factory, London, E2 8DY.
                                <Typography
                                    sx={{
                                        color: '#6f6f6f',
                                        fontSize: '12px',
                                        lineHeight: '2',
                                        marginLeft: '15px',
                                        marginRight: '15px',
                                        marginTop: '10px'
                                    }}>
                                    Email: sales@domain.com
                                    Phone: +44 (0) 123 456 7890
                                    VIEW DIRECTION
                                </Typography>
                            </Typography>
                        </Box>
                        <Box
                            width="20%"
                            margin={'0 10px 0 10px'}
                        >
                            <Typography
                                variant='h6'
                                sx={{
                                    color: '#6f6f6f',
                                    fontSize: '15px',
                                    marginBottom: '10px'
                                }}
                            >
                                INSTAGRAM PORTFOLIO


                            </Typography>
                            <Typography
                                sx={{
                                    color: '#6f6f6f',
                                    fontSize: '12px',
                                    lineHeight: '2',
                                    marginLeft: '30px',
                                    // marginRight: '15px',
                                    marginTop: '10px'
                                }}>
                                No Images Found
                            </Typography>
                        </Box>
                    </Box>


                </Container>

            </Box>




            <Box
                display="flex"
                sx={{
                    backgroundColor: 'black',
                    padding: '50px 100px 50px 100px'
                }}
            >
                <Container>
                    <Box display={'flex'}>
                        <Box >
                            <Typography variant='h6' sx={{ color: '#6f6f6f',fontSize:'15px'}}>
                                © 2024 POFO is Proudly Powered by ThemeZaa
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='h6' sx={{ color: '#6f6f6f',fontSize:'15px',marginLeft:'560px'}}>
                                <a href="javascript:void(0);" class="text-dark-gray">Term and Condition</a>
                                &nbsp;&nbsp;|&nbsp;&nbsp;
                                <a href="javascript:void(0);" class="text-dark-gray">Privesy Police</a>
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        

         </>
    );
}
export default Footer;