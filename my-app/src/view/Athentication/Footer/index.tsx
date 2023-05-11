import React from 'react'
import { AppBar, Box, Button, Card, CardActions, CardContent, IconButton, TextField, Toolbar, Typography } 
from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export default function index() {
  return (
    <>
        <Box  position={'fixed'} bottom={0} sx={{width:'100%', backgroundColor: '#00a7ff',height:100}}>
          <Box  justifyContent={'center'} justifyItems={'center'} textAlign={'center'} mt={1}>
            <Typography>
              © 2023 leaguepoints.lol - Data provided by the official League of Legends API
            </Typography>
            <Typography>
              Leaguepoints. isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of
            </Typography>
            <Typography>
              Riot Games, Inc. League of Legends © Riot Games, Inc.
            </Typography>
          </Box>
        </Box>
    </>
  )
}
