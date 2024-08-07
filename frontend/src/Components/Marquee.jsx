import { Typography } from '@mui/material'
import React from 'react'

const Marquee = ({text}) => {
  return (
    <div
    // data-aos="fade-up"
    className='text-wrapper'>
      <Typography variant='h4' className='typoh4'>
        {text}
      </Typography>
      <Typography variant='h4' className='typoh4'>
        {text}
      </Typography>
      <Typography variant='h4' className='typoh4'>
        {text}
      </Typography>
      <Typography variant='h4' className='typoh4'>
        {text}
      </Typography>
      <Typography variant='h4' className='typoh4'>
        {text}
      </Typography>

    </div>
  )
}

export default Marquee
