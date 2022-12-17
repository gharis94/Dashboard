// import React, { useState } from 'react';
// import FullCalendar, {
//     formatDate,
//     dayGridMonth
// } from '@fullcalendar/react' // must go before plugins
// import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
// import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
// import timeGridPlugin from '@fullcalendar/timegrid'
// import listPlugin from '@fullcalendar/list';
// import {Box,Typography,List,ListItem,ListItemText,useTheme} from '@mui/material';


// import { tokens } from '../../theme';

// const Calender = () => {

//     const theme = useTheme();
//     const colors = tokens(theme.palette.mode);
//     const [currentEvents,setCurrentEvents]=useState([]);

//     const handleDateClick =(selected)=>{
//         const title = prompt('Enter new title');
//         const calenderApi =selected.view.calender;
//         calenderApi.unselect();
//         console.log(selected)
//     }
//     const handleEventClick =(selected)=>{

//     }
//   return (
//     <Box>

//         <Box>
//             <FullCalendar
//                    headerToolbar={{
//                     left:'prev,next today',
//                     center:'title',
//                     right:'dayGridMonth,timeGridWeek,timeGridDay'
//                 }}
//                 plugins={{
                    
//                     listPlugin,
//                     timeGridPlugin,
//                     interactionPlugin}}
             
//                 initialView = 'listPlugin'
//                  events={[
//                     { title: 'event 1', date: '2019-04-01' },
//                      { title: 'event 2', date: '2019-04-02' }
//                 ]}
//                 editable={true}
//                 selectable={true}
//                 selectMirror={true}
//                 dayMaxEvents={true}
//                 eventClick={handleEventClick}
//                 eventsSet={(event)=>setCurrentEvents(event)}

//             />
//         </Box>
//     </Box>
//   )
// }

// export default Calender;

import React from 'react'

const Calender = () => {
  return (
    <div>Calender</div>
  )
}

export default Calender