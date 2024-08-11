import { Typography } from '@mui/material'
import React from 'react'

const Marquee = ({text, isDarkMode}) => {
  return (
    <div
    // data-aos="fade-up"
    className='text-wrapper'>
      <Typography variant='h4' color={isDarkMode ? "#5EC3EB" : "#351A5F"} className='typoh4'>
        {text}
      </Typography>
      <Typography variant='h4' color={isDarkMode ? "#5EC3EB" : "#351A5F"} className='typoh4'>
        {text}
      </Typography>
      <Typography variant='h4' color={isDarkMode ? "#5EC3EB" : "#351A5F"} className='typoh4'>
        {text}
      </Typography>
      <Typography variant='h4' color={isDarkMode ? "#5EC3EB" : "#351A5F"} className='typoh4'>
        {text}
      </Typography>
      <Typography variant='h4' color={isDarkMode ? "#5EC3EB" : "#351A5F"} className='typoh4'>
        {text}
      </Typography>

    </div>
  )
}

export default Marquee
