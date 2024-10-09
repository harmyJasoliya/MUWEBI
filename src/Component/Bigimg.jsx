import * as React from 'react';
// import App from './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


function Bigimg() {
    return (

        <>
        <Typography
            component='div'
            className='back'
            sx={{
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
            }}
        >


            <Container>
                <Container>
                    <Typography
                        component='div'
                        className='front'
                        sx={{
                            color: 'white',

                        }}

                    >
                        <Typography
                            variant='h2'
                            sx={{
                                fontSize: '30px',
                                color: 'red',
                                fontWeight: 'thiner'
                            }}
                        >
                            |
                        </Typography>
                        <Typography
                            variant='h2'
                            sx={{
                                fontSize: '70px',

                            }}
                        >

                            Filamento Lamps
                        </Typography>
                        <Typography component='p'>
                            Based in Guadalajara and founded by Enrique, Filamento creates beautiful lamp designs with an eye on simplicity for the modern homes.
                        </Typography>
                        <Typography
                            sx={{
                                marginTop: '150px',

                            }}

                        >
                            <ArrowDownwardIcon
                                sx={{
                                    padding: '10px',
                                    background: '#ff214f',
                                    borderRadius: '100%',
                                }}
                            />
                        </Typography>
                    </Typography>
                </Container>
            </Container>
        </Typography>



        
      <Typography
      component='div'
      className='pr2'
      sx={{
        margin: '100px'
      }}
    >
      <Container>
        <Typography
          component='div'
          className='pera'
          variant='h5'

          sx={{
            textAlign: 'center',
            fontFamily: "'Montserrat', sans-serif'",
            container: 'inherit',
            fontSize:'25px'
          }}
        >
          Holistic brand redesign focusing product design, interface design, studio photograph style, icon design, editorial design, web design & motion design.
        </Typography>
      </Container>
    </Typography>


    <Container>
      <Box
        display='flex'

      >
        <Typography
          sx={{
            width: '100%',
            marginRight: '30px',
            marginBottom: '90px'

          }}
        >
          <Typography
            sx={{
              borderBottom: 1,
              borderBottomColor: 'gray',
              fontSize: '12px',
              fontStyle: 'bolder',
              paddingBottom: '5px'
            }}
          >
            CLIENT
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              marginTop: '5px'
            }}
          >
            FILAMENTO LAMP
          </Typography>
        </Typography>




        <Typography
          sx={{
            width: '100%',
            marginRight: '30px'
          }}
        >
          <Typography
            sx={{
              borderBottom: 1,
              borderBottomColor: 'gray',
              fontSize: '12px',
              paddingBottom: '5px'
            }}
          >
            INDUSTRY
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              marginTop: '5px'
            }}
          >
            Lighting, Decoration
          </Typography>
        </Typography>



        <Typography
          sx={{
            width: '100%',
            marginRight: '30px'
          }}
        >
          <Typography
            sx={{
              borderBottom: 1,
              borderBottomColor: 'gray',
              fontSize: '12px',
              paddingBottom: '5px'
            }}
          >
            SERVICES
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              marginTop: '5px'
            }}
          >
            Design, Art Direction, Website
          </Typography>
        </Typography>



        <Typography
          sx={{
            width: '100%',
            marginRight: '30px'
          }}
        >
          <Typography
            sx={{
              borderBottom: 1,
              borderBottomColor: 'gray',
              fontSize: '12px',
              paddingBottom: '5px'
            }}
          >
            ART DIRECTOR
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              marginTop: '5px'
            }}
          >
            Jackson Smith
          </Typography>
        </Typography>
      </Box>
    </Container>




    {/* button */}
    <Typography
      sx={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Typography
        component='button'
        sx={{
          border: 2,
          padding: '5px',
          borderColor: 'black',
          color: 'black',
          marginBottom: '70px'

        }}
      >
        LANUCH WEBSITE

      </Typography>
    </Typography>



















     




      {/* <Box
        display="flex"
      >
        <Box
          width="50%"
        >
          <Typography
            component="img"
            sx={{
              width: "100%"
            }}
            src="https://www.themezaa.com/html/pofo/images/single-project-02-img1.jpg"
          ></Typography>
        </Box>
        <Box

          width="50%"
        >
          <Typography
            sx={{
              width: "100%"
            }}
            component="img"
            src="https://www.themezaa.com/html/pofo/images/single-project-02-img2.jpg"
          >
          </Typography>

        </Box>
      </Box>







    <Container>
      <Box
        display="flex"
        padding="40px"
        

      >
        <Box
          width="40%"
          marginRight='60px'
          
        >
          <Typography
            sx={{
              width: '100%',
              marginRight: '30px',
              margin:'50px',
             
            }}
          >
            <Typography
              sx={{
                borderBottom: 0.1,
                borderBottomColor: 'gray',
                fontSize: '15px',
                paddingBottom: '9px',
                marginRight:'25px'
              }}
            >
              ABOUT PROJECT
            </Typography>
            <Typography
              sx={{
                fontSize: '14px',
                marginTop: '5px',
                lineHeight:'25px',
                fontSize:'15px',
                color:'gray'
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
            </Typography>
          </Typography>
        </Box>
        <Box

          width="40%"
          marginLeft='60px'
        >
         <Typography
            sx={{
              width: '100%',
              marginLeft: '30px',
              margin:'50px'
            }}
          >
            <Typography
              sx={{
                borderBottom: 1,
                borderBottomColor: 'gray',
                fontSize: '17px',
                paddingBottom: '9px',
                marginRight:'25px'
              }}
            >
              PROJECT BRIEF
            </Typography>
            <Typography
              sx={{
                fontSize: '14px',
                marginTop: '5px',
                lineHeight:'25px',
                fontSize:'15px',
                color:'gray'
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
            </Typography>
          </Typography>

        </Box>
      </Box>
      </Container>  */}
    </>
    );
}
export default Bigimg;