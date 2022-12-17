import React from 'react'
import {Box} from '@mui/material';
import Header from '../../components/Header/Header';
import {LineChartComponent} from '../../components/LineChartComponent/LineChartComponent';

const LineChart = () => {
  return (
    <Box><Header heading='Line Chart' subheading='below is chart'/>
        <Box height='75vh'>
            <LineChartComponent/>
        </Box>
    </Box>
  )
}

export default LineChart