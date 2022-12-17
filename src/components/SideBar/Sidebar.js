import React,{useState} from 'react';
import {Sidebar,Menu,MenuItem,useProSidebar} from 'react-pro-sidebar';
//import 'react-pro-sidebar/dist/css/styles.css'
import {Box,IconButton,Typography,useTheme} from '@mui/material';
import {Linke} from 'react-router-dom';
import {tokens} from '../../theme';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import {Link} from 'react-router-dom';

export const Item =({title,to,icon,selected,setSelected})=>{
    const theme =useTheme();
    const colors = tokens(theme.palette.mode);
    return(

        <MenuItem 
            active={selected===title}
            rootStyles={{color:colors.grey[500]}}
            onClick={()=>setSelected(title)}
            icon={icon}
            routerLink={<Link to={to} />}
        >
            {title}        
        </MenuItem>
        
    )
}
const SideBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [selected,setSelected] = useState('Dashboard');
    const [isCollapsed,setIsCollapsed] = useState(false);
    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();

  return (
    <Box 
        sx={{
            "&  .pro-sidebar-inner":{
                background:`${colors.primary[400]} !important`
            },
            "& .pro-icon-wrapper":{
                backgroundColor:'transparent !important'
            },
            "& .pro-inner-item":{
                padding:"5px 35px 5px 20px !important"
            },
            "& .pro-inner-item:hover":{
                color:"#868dfb !important" 
            },
            "& .pro-menu-item.active":{
                color:"#6870fa !important"
            }
        }}    
    >
        <Sidebar rootStyles={{'.ps-sidebar-container':{
            background: `${colors.primary[400]} !important`,
            boxShadow:`1px 1px ${colors.primary[400]}`
        }}}>
            
            <Box >
                <Box display = 'flex'
                    
                    justifyContent = 'space-between'
                     p='5px'>
                    <Typography > ADMINS</Typography>
                    <MenuOutlinedIcon sx={{cursor:'pointer'}}/>
                </Box>            
                    
                <Box 
                    display='flex' 
                    justifyContent='center'          
                    
                    >
                    <img height='50px' width='50px'
                        style={{cursor:'pointer',borderRadius:'50%'}}
                        src = 'https://images.unsplash.com/photo-1670886498028-a72e1d9dcc9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                    />
                </Box>
                <Box m='10px 0 0 0' textAlign='center'>
                    <Typography variant='h5' sx={{color:`${colors.grey[100]}`}}>Marium</Typography>
                    <Typography variant='h6' sx={{color:`${colors.greenAccent[800]}`}}>VC Finance</Typography>
                    </Box>
                </Box>
            <Menu>
                <Item
                    title = 'Dashboard'
                    selected={selected}
                    setSelected={setSelected}
                    icon={<DashboardOutlinedIcon/>} 
                    to='/'
                 />
                <Item
                    title='Manage Teams'
                    selected={selected}
                    setSelected={setSelected}
                    icon={<GroupOutlinedIcon/>} 
                    to='team'
                 />
                <Item
                    title='Contact Information'
                    selected={selected}
                    setSelected={setSelected}
                    icon={<ContactsOutlinedIcon/>} 
                    to='contact'
                 />
                 <Item
                    title='Invoice Balance'
                    selected={selected}
                    setSelected={setSelected}
                    icon={<ReceiptOutlinedIcon/>} 
                    to='invoice'
                 />
                 <Item
                    title='Profile Form'
                    selected={selected}
                    setSelected={setSelected}
                    icon={<Person2OutlinedIcon/>} 
                    to='profile'
                 />
                 <Item
                    title='Calender'
                    selected={selected}
                    setSelected={setSelected}
                    icon={<CalendarTodayOutlinedIcon/>} 
                    to='calender'
                 />
                 <Item
                    title='FAQ Page'
                    selected={selected}
                    setSelected={setSelected}
                    icon={<HelpOutlineOutlinedIcon/>} 
                    to='faq'
                 />
                 <Item
                    title='Bar Chart'
                    selected={selected}
                    setSelected={setSelected}
                    icon={<BarChartOutlinedIcon/>} 
                    to='bar'
                 />
                 <Item
                    title='Pie Chart'
                    selected={selected}
                    setSelected={setSelected}
                    icon={<PieChartOutlineOutlinedIcon/>} 
                    to='pie'
                 />
                 <Item
                    title='Line Chart'
                    selected={selected}
                    setSelected={setSelected}
                    icon={<StackedLineChartOutlinedIcon/>} 
                    to='line'
                 />
                 <Item
                    title='Demographic Chart'
                    selected={selected}
                    setSelected={setSelected}
                    icon={<MapOutlinedIcon/>} 
                    to='demographic'
                 />
            </Menu>
        </Sidebar>
    </Box>
  )
}

export default SideBar;