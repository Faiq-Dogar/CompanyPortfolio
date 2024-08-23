import { Box, Typography } from '@mui/material'
import React from 'react'

const HexagonSectionDetail = ({text}) => {
    return (
        <Box
            sx={{
                bgcolor: '#5EC3EB',
                p: '3%',
                color: '#0A1B22',
                borderRadius:'15px',
                mb:'2%',
                width:'80%'
            }}
        >
            <Typography variant='h6' align='left'  fontWeight={"light"}>
                {text}
            </Typography>
        </Box>
    )
}

export default HexagonSectionDetail
// color={isDarkMode ? "#5EC3EB" : "#ffffff"}