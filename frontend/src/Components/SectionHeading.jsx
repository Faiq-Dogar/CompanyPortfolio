import { Typography } from '@mui/material'
import React from 'react'

const SectionHeading = ({text, variant, width, alignText, textColor, fontWeight,fontSize}) => {
  return (
    <Typography variant={variant} align={alignText} color={textColor} fontWeight={fontWeight} width={width} fontSize={fontSize}>
        {text}
    </Typography>
  )
}

export default SectionHeading
