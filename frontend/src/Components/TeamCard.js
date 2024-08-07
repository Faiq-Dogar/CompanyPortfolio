import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const TeamCard = ({ person_image, name, designation }) => {
    const navigate = useNavigate();
    const showDisc = (name, designation, person_image) => {
        navigate(`/Team/${name}`, { state: { Member: [{Pname: name, Pdesi: designation, Pimage: person_image}] } });
    }
    
    return (
        <Box
            sx={{
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                boxShadow: 'inset 0px 10px 12px -5px rgba(0, 0, 0, 0.2)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Box sx={{ width: '250px', height: '250px', border: '1px solid white', borderRadius: '50%', position: 'relative' }} >
                <Button style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%'
                }}
                onClick={(e) => showDisc(name, designation, person_image)}
                >
                    <img
                        src={person_image} alt='user Image'
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '50%'
                        }}
                    />
                </Button>
                <Box sx={{ position: 'absolute', top: '18%', right: '-34%', width: '50%' }}>
                    <Stack direction={'column'} spacing={3} >
                        <Button
                            className='team-member-social-icons'
                            color='primary'
                            size='small'
                            variant='contained'
                            sx={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                minWidth: 'unset',
                                padding: '0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <FacebookIcon fontSize='small' />
                        </Button>
                        <Box sx={{ marginLeft: '106px' }}>

                            <Button
                                className='team-member-social-icons'
                                color='primary'
                                size='small'
                                variant='contained'
                                sx={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    minWidth: 'unset',
                                    padding: '0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginLeft: '16px'
                                }}
                            >
                                <GoogleIcon fontSize='small' />
                            </Button>
                        </Box>

                        <Button
                            className='team-member-social-icons'
                            color='primary'
                            size='small'
                            variant='contained'
                            sx={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                minWidth: 'unset',
                                padding: '0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <InstagramIcon fontSize='small' />
                        </Button>
                    </Stack>
                </Box>
                <Typography gutterBottom variant="h5" component="div" textAlign={"center"}>
                    {name}
                </Typography>
                <Typography variant="body1" color="text.secondary" textAlign={"center"}>
                    {designation}
                </Typography>
            </Box>
        </Box>
    )
}

export default TeamCard
