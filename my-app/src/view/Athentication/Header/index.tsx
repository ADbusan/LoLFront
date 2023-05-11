import React, { useState } from 'react';
import { AppBar, Box, Button, IconButton, TextField, Toolbar, Typography, InputAdornment } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';

export default function Index() {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      navigate('/Searchin');
    }
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1,ml:'15%' }}>
            <Link to="/">LoLpoint</Link>
          </Typography>
          <Box
            component="form"
            mr={'15%'}
            sx={{
              '& > :not(style)': { width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleSearch}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Link to={"/Searchin"}>
                      <SearchIcon />
                    </Link>
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{ style: { color: 'white' } }}
              inputProps={{ style: { color: 'white' } }}
              id="outlined-basic"
              label="NickName"
              variant="outlined"
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box sx={{ marginTop: '64px' }}> 
      </Box>
    </>
  );
}