import React, { useContext } from 'react';
import { useTheme,IconButton,Box } from '@mui/material';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InputBase from '@mui/material/InputBase';
import { colorContext,tokens } from '../../theme';
import {Outlet} from 'react-router-dom';


const Navbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const {toggle,toggle2}=useContext(colorContext);
    
  return (
    <Box  
        display = 'flex'
        minWidth = '80vw'
        
        flexDirection = 'column' 
    >
    <Box display='flex'  justifyContent='space-between' p={2} height='auto'>
        <Box 
            display='flex'
            backgroundColor={colors.primary[400]}
            borderRadius='3px'  
        >
            <InputBase  sx={{ml:2,flex:1}} placeholder='Search..'/>
            <IconButton sx={{p:1}}>
                <SearchOutlinedIcon/>
            </IconButton>    
        </Box>
        <Box display='flex' justifyContent='space-evenly'>
            <IconButton onClick={()=>toggle2()} sx={{p:1}}>
                <NightlightOutlinedIcon/>
            </IconButton>
            <IconButton onClick = {() => toggle.toggleColorMode()} sx = {{p: 1}}>
                <NotificationsNoneOutlinedIcon />
            </IconButton>
            <IconButton sx={{p:1}}>
                <SettingsOutlinedIcon/>
            </IconButton>
            <IconButton sx={{p:1}}>
                <PersonOutlinedIcon/>
            </IconButton>    
        </Box>
        
    </Box>
        <Box margin='10px' >
            <Outlet/>
        </Box>
        
    </Box>
  )
}

export default Navbar