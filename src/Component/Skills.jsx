import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Slider from '@mui/material/Slider';



function Skills() {
    return (
        <>
            <Container>
                <Box
                    display="flex"
                    padding="40px"
                    marginTop="10px"


                >
                    <Box
                        width="60%"
                        marginRight='60px'

                    >
                        <Typography
                            sx={{
                                width: '100%',
                                marginRight: '30px',
                                margin: '50px',

                            }}
                        >
                            <Typography
                                sx={{
                                    borderBottom: 0.1,
                                    borderBottomColor: 'gray',
                                    fontSize: '25px',
                                    paddingBottom: '9px',
                                    marginRight: '25px'
                                }}
                            >
                                Project skills & expertise
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '14px',
                                    marginTop: '5px',
                                    lineHeight: '25px',
                                    fontSize: '15px',
                                    color: 'gray'
                                }}
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry. Lorem Ipsum has been the industry's standard dummy text since. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </Typography>
                        </Typography>
                    </Box>


                    <Box

                        width="80%"
                        marginTop='20px'
                        marginLeft='60px'
                    >
                        <Typography
                            component='div'
                            className='skillbar'
                            sx={{
                                width: '300px',
                                marginLeft: '30px',
                                margin: '50px',

                            }}
                        >

                            {/* slider1 */}
                            
                                <Typography
                                    variant='h6'
                                    sx={{
                                        fontSize: '10px',
                                        fontWeight: '20px',
                                        marginTop: '3px'
                                    }}
                                >
                                    JQUERY - 4 YEARS EXPERIENCE

                                </Typography>
                                <Box 
                                sx={{
                                     width: '400px',
                                     display:'flex',
                                     fontSize:'15px',
                                     color:'gray'

                                 }}>
                                    <Slider
                                        size="small"
                                        defaultValue={92}
                                        aria-label="large"
                                        valueLabelDisplay="auto"
                                        fontSize='5px'
                                        display='flex'

                                    />
                                    92%
                                </Box>
                            


                            {/* slider2 */}
                            <Typography
                                variant='h6'
                                sx={{
                                    fontSize: '10px',
                                    fontWeight: '20px',
                                    marginTop: '3px'
                                }}
                            >
                                WORDPRESS - 6 YEARS EXPERIENCE
                            </Typography>
                            <Box 
                                sx={{
                                     width: '400px',
                                     display:'flex',
                                     fontSize:'15px',
                                     color:'gray'

                                 }}>
                                <Slider
                                    size="small"
                                    defaultValue={97}
                                    aria-label="Small"
                                    valueLabelDisplay="auto"
                                    
                                    
                                />97%
                            </Box>

                            {/* slider3 */}
                            <Typography
                                variant='h6'
                                sx={{
                                    fontSize: '10px',
                                    fontWeight: '20px',
                                    marginTop: '3px'
                                }}
                            >
                                HTML5 - 5 YEARS EXPERIENCE
                            </Typography>
                            <Box 
                                sx={{
                                     width:'400px',
                                     display:'flex',
                                     fontSize:'15px',
                                     color:'gray'
                                 }}>
                                <Slider
                                    size="small"
                                    defaultValue={98}
                                    aria-label="Small"
                                    valueLabelDisplay="auto"
                                />98%
                            </Box>

                            {/* slider4 */}
                            <Typography
                                variant='h6'
                                sx={{
                                    fontSize: '10px',
                                    fontWeight: '20px',
                                    marginTop: '3px'
                                }}
                            >
                                PHOTOGRAPHY - 6 YEARS EXPERIENCE
                            </Typography>
                            <Box 
                                sx={{
                                     width: '400px',
                                     display:'flex',
                                     fontSize:'15px',
                                     color:'gray'
                                 }}>
                                <Slider
                                    size="small"
                                    defaultValue={92}
                                    aria-label="Small"
                                    valueLabelDisplay="auto"
                                />
                                92%
                            </Box>

                        </Typography>
                    </Box>
                </Box>
            </Container>


        </>
    );
}
export default Skills;