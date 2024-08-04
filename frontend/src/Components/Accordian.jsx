import { Accordion, AccordionDetails, AccordionSummary, Divider, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'

const Accordian = ({Question, Answer }) => {
    return (
        <Accordion
            sx={
                { mb: '1%' }
            }
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <Typography>{Question}</Typography>
            </AccordionSummary>
            <Divider/>
            <AccordionDetails>
                <Typography>
                    {Answer}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default Accordian
