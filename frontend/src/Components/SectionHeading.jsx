import { Typography } from '@mui/material'
import React from 'react'

const SectionHeading = ({variant, width, alignText}) => {
  return (
    <Typography variant={variant} align={alignText} color={"#351A5F"} fontWeight={"medium"} width={width}>
        We Offer a Wide Variety of IT Services
    </Typography>
  )
}

export default SectionHeading
