import { Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'

const BreadCrum = ({ textColor, previous, now }) => {
    return (
        <div data-aos="fade-right" role="presentation">
            <Breadcrumbs aria-label="breadcrumb" sx={{ pt: "3%" }}>
                <Link underline="hover" color={textColor} to="/">
                    {previous}
                </Link>
                <Typography color={textColor}>
                    {now}
                </Typography>
            </Breadcrumbs>
        </div>
    )
}

export default BreadCrum
