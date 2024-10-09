import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



function Twopart(){
    return(
        <>
        <Box
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
      </Container> 
      </>
    );
}
export default Twopart;