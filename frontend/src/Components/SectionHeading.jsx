import { Typography } from '@mui/material'
import React from 'react'

const SectionHeading = ({text, variant, width, alignText, textColor, fontWeight}) => {
  return (
    <Typography variant={variant} align={alignText} color={textColor} fontWeight={fontWeight} width={width}>
        {text}
    </Typography>
  )
}

export default SectionHeading
