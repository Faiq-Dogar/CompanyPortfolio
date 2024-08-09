import { Typography } from '@mui/material'
import React from 'react'

const PageNumber = ({isDarkMode, current, total, marginT}) => {
    return (
        <div>
            <Typography variant='h3' align='right' color={isDarkMode ? "#5EC3EB":"#351A5F"} marginTop={marginT} fontWeight={"light"}>
                {current}/
                <Typography variant='h6' component={"span"} align='right' color={isDarkMode ? "#5EC3EB":"#351A5F"} fontWeight={"light"}>
                    <sup>{total}</sup>
                </Typography>
            </Typography>
        </div>
    )
}

export default PageNumber
