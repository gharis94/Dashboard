import React from 'react';
import {Box,Typography,useTheme} from '@mui/material';
import {DataGrid} from '@mui/x-data-grid';
import { tokens } from '../../theme';
import Header from '../../components/Header/Header';
import {mockDataInvoices} from '../../data/mockData';

const Invoices = () => {
    const theme = useTheme();
    const colors=tokens(theme.palette.mode);

    const columns=[
        {field:'id',headerName:'ID'},
        {field:'date',headerName:'Date'},
        {field:'name',headerName:'Name',flex:1},
        {field:'email',headerName:'Email',flex:1},
        {field:'phone',headerName:'Phine'},
        {field:'cost',headerName:'Cost',renderCell:(param)=>(
            <Typography color={colors.greenAccent[500]}>
                PKR {param.row.cost}
            </Typography>
        )},
    ]
  return (
    <Box>
       <Header heading='Invoices' subHeading='All invoices'/>
       <Box height = '75vh'
       sx = {{
                "& .MuiDataGrid-root": {
                   border: 'none'
                },
               "& .MuiDataGrid-cell": {
                   borderBottom: 'none'
               },
               "& .name-column--cell": {
                   color: colors.greenAccent[300]
               },
               "& .MuiDataGrid-columnHeaders": {
                   backgroundColor: colors.blueAccent[700],
                   borderBottom: 'none'
               },
               "& .MuiDataGrid-virtualScroller": {
                   backgroundColor: colors.primary[400]
               },
               "& .MuiDataGrid-footerContainer": {
                   borderTop: 'none',   
                   backgroundColor: colors.blueAccent[700]
               }
           }}>
            <DataGrid
                checkboxSelection
                columns={columns}
                rows={mockDataInvoices}
            />
       </Box> 
    </Box>
  )
}

export default Invoices;