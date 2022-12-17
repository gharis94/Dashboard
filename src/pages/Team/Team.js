import React from 'react';
import {Box,useTheme,Typography} from '@mui/material';
import { DataGrid} from '@mui/x-data-grid';
import {mockDataTeam} from '../../data/mockData';
import { tokens } from '../../theme';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import Header from '../../components/Header/Header';

const Team = () => {
    const theme= useTheme();
    const colors = tokens(theme.palette.mode);
    const columns  =[
        {field:'id',headerName:"ID"},
        {field:'name',headerName:"Name",flex:1},
        {field:'email',headerName:'Email',flex:1},
        {field:'age',headerName:'Age'},
        {field:'phone',headerName:'Phone',flex:1},
        {field: 'access',headerName: 'Access',flex:1,renderCell:({row:{access}})=>{
            return(
                <Box 
                    width='60%'
                    m='0 auto'
                    p='5px'
                    display='flex'
                    justifyContent='center'
                    backgroundColor={
                        access==='admin'?
                        colors.greenAccent[600]:
                        colors.greenAccent[700]
                    }
                    borderRadius='4px'
                >
                    {access==='admin' && <AdminPanelSettingsOutlinedIcon/>}
                    {access==='manager' && <SecurityOutlinedIcon/>}
                    {access==='user' && <LockOpenOutlinedIcon/>}
                    <Typography color={colors.grey[100]} sx={{ml:'5px'}}>
                        {access}
                    </Typography>
                </Box>
            )
        }}
    ]
    
        
  return (
    <Box>
        <Header heading='Team' subHeading='All the team members'/>
        <Box height = '65vh'
            width = '80vw'
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
                    },}}
                >
            <DataGrid
                rows={mockDataTeam}
                columns={columns}
            />
        </Box>
    </Box>
  )
}

export default Team