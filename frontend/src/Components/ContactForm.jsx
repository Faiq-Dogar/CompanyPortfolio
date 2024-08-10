import { Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const ContactForm = ({isDarkMode}) => {
    return (
        <form >
            <Typography variant='h4' color={isDarkMode ? "#5EC3EB" : "#351A5F"} sx={{mt:'10%', mb:'5%'}}>
                Drop Us a Line
            </Typography>
            <Stack direction="column" spacing={3}>

                <TextField
                    id="outlined-name"
                    label="Your Name"
                    variant="outlined"
                    type="text"

                />
                <TextField id="outlined-email" label="Your Email" variant="outlined" />
                <TextField id="outlined-msg" label="Your Message" variant="outlined" multiline rows={5} />
            </Stack>
            <Button
                variant='contained'
                sx={
                    {
                        my: '5%',
                        px: '15%',
                        py: '2%'
                    }
                }
            >
                Submit
            </Button>
        </form>
    )
}

export default ContactForm
