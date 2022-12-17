
import React from 'react';
import { DemographicComponent } from '../../components/DemographicComponent/DemographicComponent'
import Header from '../../components/Header/Header';
import {Box,useTheme} from '@mui/material';
import {tokens} from '../../theme';


const Demographic = () => {
  const theme=useTheme();
  const colors = tokens(theme.palette.mode);
    return (
    <Box m='20px'>
        <Header heading='Demographic' subHeading="Demographic representing of data"/>
        <Box height='75vh' border={`1px solid ${colors.grey[100]}`} borderRadius='4px'>
            <DemographicComponent/>
        </Box>
    </Box>
  )

}

export default Demographic