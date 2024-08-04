import { Typography } from '@mui/material'
import React from 'react'

const CenterDis = ({textColor, text}) => {
  return (
    <Typography data-aos="fade-up" variant='body1' align='center' color={textColor}  mt={'1%'} mb={'3%'}>
    {text}
  </Typography>
  )
}

export default CenterDis
// fontWeight={"bolder"}