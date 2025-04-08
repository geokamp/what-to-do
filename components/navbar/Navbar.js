import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" >
        <Toolbar className='flex justify-between'>
          <Link href="/">
            <Typography variant="h6" component="div" >
              TaskIT!
            </Typography>
          </Link>
          
          <Link href="/addTopic">
             <Button color="inherit">Add +</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
