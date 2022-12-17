import React from 'react'
import { Box } from '@mui/system'
import BarChartComponent from '../../components/BarChartComponent/BarChartComponent';
import Header from '../../components/Header/Header';

const BarChart = () => {
  return (
    <Box>
        <Header heading='Bar Chart' subHeading='belo is the chart'/>
        <Box height='75vh'>
            <BarChartComponent/>
        </Box>
    </Box>
  )
}

export default BarChart