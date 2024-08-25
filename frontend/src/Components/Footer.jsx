import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Divider, Typography } from '@mui/material';
import footer_img from './../assets/Images/24-removebg-preview.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${footer_img})`,  // Correct way to apply background image
        // backgroundSize: 'cover',
        backgroundSize:'100%',
        backgroundPosition: 'center',
        pb: '20px'
      }}
    >
      <div>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <FacebookOutlinedIcon sx={{ mx: '1%', fontSize: '3rem', color: 'white', mt: '15%' }} />
          <GoogleIcon sx={{ mx: '1%', fontSize: '3rem', color: 'white', mt: '15%' }} />
          <LinkedInIcon sx={{ mx: '1%', fontSize: '3rem', color: 'white', mt: '15%' }} />
          <InstagramIcon sx={{ mx: '1%', fontSize: '3rem', color: 'white', mt: '15%' }} />
        </Box>
      </div>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: '3%'
      }}
      >
        <Link to={'/'} className='footer-link'>
          <Typography variant='body1' color={'white'}>
            Home
          </Typography>
        </Link>
        <Link to={'/Services'} className='footer-link'>
          <Typography variant='body1' color={'white'}>
            Services
          </Typography>
        </Link>
        <Link to={'/Portfolio'} className='footer-link'>
          <Typography variant='body1' color={'white'}>
            Portfolio
          </Typography>
        </Link>
        <Link to={'/About'} className='footer-link'>
          <Typography variant='body1' color={'white'}>
            About
          </Typography>
        </Link>
        <Link to={'/Contact'} className='footer-link'>
          <Typography variant='body1' color={'white'}>
            Contact
          </Typography>
        </Link>
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: '3%'
      }}
      >
        <Divider className='footer-divider' />
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: '1.5%'
      }}
      >
        <Typography variant='body1' color={'white'}>
          Copyrights &copy;2024
        </Typography>
      </Box>

    </Box >
  )
}

export default Footer;
