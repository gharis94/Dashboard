import React from 'react';
import {Box,useTheme,Typography} from '@mui/material';
import { tokens } from '../../theme';

const Header =({heading,subHeading})=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
 
    return (
    <Box>
        <Typography color={colors.grey[500]} variant='h2'>{heading.toUpperCase()}</Typography>
        <Typography variant='h6' color={colors.greenAccent[500]}>{subHeading}</Typography>
    </Box>
  )
};

export default Header;