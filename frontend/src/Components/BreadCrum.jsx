import { Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'

const BreadCrum = ({ previous, now }) => {
    return (
        <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb" sx={{ pt: "3%" }}>
                <Link underline="hover" color="white" to="/">
                    {previous}
                </Link>
                <Typography color="white">
                    {now}
                </Typography>
            </Breadcrumbs>
        </div>
    )
}

export default BreadCrum
