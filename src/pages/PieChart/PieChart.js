import React from 'react'
import {Box} from '@mui/material';
import Header from '../../components/Header/Header';
import {PieChartComponent} from '../../components/PieChartComponent/PieChartComponent';

const PieChart =()=>{
  return (
    <Box>
        <Header heading='Pie Chart' subheading='below is chart'/>
        <Box height='75vh'>
            <PieChartComponent/>
        </Box>
    </Box>
  )
}
export default PieChart;