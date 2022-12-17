import React from 'react';
import {useTheme,Box} from '@mui/material'
import { DataGrid,GridToolbar} from '@mui/x-data-grid';
import {mockDataContacts} from '../../data/mockData';
import { tokens } from '../../theme';
import Header from '../../components/Header/Header';

const Contacts = () => {
    const theme=useTheme();
    const colors = tokens(theme.palette.mode);

    const columns=[
        {field:'id',headerName:'ID',flex:0.5},
        {field:'registrarId',headerName:'Registered ID'},
        {field:'name',headerName:'Name',flex:1},
        {field:'email',headerName:'Email',flex:1},
        {field:'address',headerName:'Address',flex:1},
        {field:'city',headerName:'City'},
        {field:'zipCode',headerName:'Zip Code'}
    ]

  return (
    <Box>
        <Header heading='contacts' subHeading='List of contacts'/>

        <Box height='75vh' width='75vw' sx={{
            "& .MuiDataGrid-root":{
                border:'none'
            },
            "& .MuiDataGrid-cell":{
                borderBottom:'none'
            },
            "& .name-column--cell":{
                color:colors.greenAccent[300]
            },
            "& .MuiDataGrid-columnHeaders":{
                backgroundColor:colors.blueAccent[700],
                borderBottom:'none'
            },
            "& .MuiDataGrid-virtualScroller":{
                backgroundColor:colors.primary[400]
            },
            "& .MuiDataGrid-footerContainer":{
                borderTop:'none',
                backgroundColor:colors.blueAccent[700]
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
                color: `${colors.grey[100]}!important`
            }
        }}>
            <DataGrid
                rows={mockDataContacts}
                columns={columns}
                components={{Toolbar:GridToolbar}}
            />
        </Box>
    </Box>
  )
}

export default Contacts;