import React from 'react'
import { AppBar, Box, Button, Card, CardActions,CardContent, IconButton, TextField, Toolbar, Typography, InputAdornment }
from '@mui/material'
import { Link} from 'react-router-dom';
export default function index() {
  return (
    <>
      <Box sx={{display:"flex",justifyContent:"center",mt:5}}>
        <Typography fontSize={75}>
              <Link to="/">LoLpoint</Link>
        </Typography>
      </Box>
        <Box border={1} height={150} 
          sx={{ 
              mt: 5, 
              ml: '15%',
              mr: '15%', 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems:'center'
               
              }}>
          <Box>
            <Typography>
              티어 이미지
            </Typography>
          </Box>
          <Box>
            <Typography>
              mmr 점수
            </Typography>
          </Box>
        </Box>
        <Box border={1}  height={'100vh'} sx={{mt:'5%', ml:'15%', mr:'15%'}}>
          <Typography>
            최근 전적 표시
          </Typography>
        </Box>
    </>
  )
}
