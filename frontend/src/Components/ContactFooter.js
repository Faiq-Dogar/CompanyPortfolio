import React from 'react'
import { Box, Container, FilledInput, FormControl, Grid, Input, InputAdornment, InputLabel, Typography, IconButton, OutlinedInput } from '@mui/material'
import PageNumber from './PageNumber'
import PageIcons from './PageIcons'
import AccountCircle from '@mui/icons-material/AccountCircle';

const ContactFooter = () => {
    return (
        <div style={{ backgroundColor: "#383A45" }}>
            <Container maxWidth='xl' >
                <Grid container spacing={15} marginTop={"3%"}>
                    <Grid item xs={1} md={1} marginTop={"9%"}>
                        {/* <PageIcons Icolor={'white'} size1={'medium'} size2={'medium'} size3={'medium'} size4={'medium'} size5={'medium'} size6={'medium'} size7={'extralarge'} /> */}
                    </Grid>
                    <Grid item xs={11} md={11}>
                        <Box sx={{ color: 'white' }}>
                            <Typography variant='h2' align='left' fontWeight={"medium"} className='contact-footer' marginBottom={'5%'}>
                                LET'S TALK BUSINESS
                            </Typography>
                            <Typography variant='body1' width={'75%'} align='left' marginBottom={'8%'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                            </Typography>
                            <form>
                                <Typography variant='h3' width={'75%'} align='left' fontWeight={'light'} marginBottom={'23.7%'}>
                                    What's up, I'm
                                    <FormControl sx={{ m: 1, width: '25%', borderColor:'white' }} variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password" sx={{color:'white'}}>Name</InputLabel>
                                        <OutlinedInput
                                        
                                            id="outlined-adornment-password"
                                            type='text'
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        // onClick={handleClickShowPassword}
                                                        // onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Password"
                                        />
                                    </FormControl>
                                    from 
                                    <FormControl sx={{ m: 1, width: '25%', borderColor:'white' }} variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password" sx={{color:'white'}}>Address</InputLabel>
                                        <OutlinedInput
                                        
                                            id="outlined-adornment-password"
                                            type='text'
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        // onClick={handleClickShowPassword}
                                                        // onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Password"
                                        />
                                    </FormControl>
                                    . I'd like to discuss
                                    <FormControl sx={{ m: 1, width: '25%', borderColor:'white' }} variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password" sx={{color:'white'}}>concern</InputLabel>
                                        <OutlinedInput
                                        
                                            id="outlined-adornment-password"
                                            type='text'
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        // onClick={handleClickShowPassword}
                                                        // onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Password"
                                        />
                                    </FormControl>
                                    .You can mail me at 
                                    <FormControl sx={{ m: 1, width: '25%', borderColor:'white' }} variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password" sx={{color:'white'}}>Email</InputLabel>
                                        <OutlinedInput
                                        
                                            id="outlined-adornment-password"
                                            type='email'
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        // onClick={handleClickShowPassword}
                                                        // onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Password"
                                        />
                                    </FormControl>
                                     or call 
                                    <FormControl sx={{ m: 1, width: '25%', borderColor:'white' }} variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password" sx={{color:'white'}}>Contact</InputLabel>
                                        <OutlinedInput
                                        
                                            id="outlined-adornment-password"
                                            type='tel'
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        // onClick={handleClickShowPassword}
                                                        // onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Password"
                                        />
                                    </FormControl>
                                </Typography>
                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default ContactFooter