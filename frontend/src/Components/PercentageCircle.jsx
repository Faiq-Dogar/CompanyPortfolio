import { Typography } from '@mui/material'
import React from 'react'

const PercentageCircle = ({ percent, title, disc, inversePercent }) => {
    return (
        <>
            <div className="circle-container" style={{ background: `conic-gradient(#1976D2 0% ${percent}%, transparent ${inversePercent}% 100%)` }} >
                <div className='circle-content'>
                    <Typography variant='h3' color={'#351A5F'} fontWeight={'bold'}>
                        {percent}%
                    </Typography>
                </div>
            </div>
            <Typography variant='h5' color={'#351A5F'} marginTop={'12%'}>
                {title}
            </Typography>
            <Typography variant='body1' color={'#351A5F'} marginTop={'7%'}>
                {disc}
            </Typography>
        </>
    )
}

export default PercentageCircle
