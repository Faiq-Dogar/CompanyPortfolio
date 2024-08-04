import { Typography } from '@mui/material'
import React from 'react'

const SectionHeading = ({text, variant, width, alignText}) => {
  return (
    <Typography variant={variant} align={alignText} color={"#351A5F"} fontWeight={"medium"} width={width}>
        {text}
    </Typography>
  )
}

export default SectionHeading
