import React from 'react'
import { Calendar} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';

import{addHours} from 'date-fns'

import { NavBar } from '../'
import { localizer,getMessengeres } from '../../helpers';



const eventss = [
  {
    
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2022, 7, 6),
    end: addHours(new Date(2022, 7, 7), 8),
    description: 'moment.js is a library for parsing, validating, manipulating, and formatting dates.',
    location: '',
    id: '132',
    user:{
      id:'123',
      name:'leo'

    }
  }]

const eventStyleGetter = (event, start, end, isSelected) => {
console.log({event, start, end, isSelected})

  const style = {
    backgroundColor: '#f00',
    borderRadius: '0px',
    opacity: 0.8,
    color: 'white',
    display: 'block',
 
  }
  return {
    style: style,
    className: 'calendar-event',
  }


}



export const CalendarPage = () => {
  return (
    <>  
 <NavBar/>

 <Calendar
 culture='es'
 localizer={localizer}
 events={eventss}
 startAccessor="start"
 endAccessor="end"
 style={{ height: 'calc(100vh - 64px)' }}
 messages={getMessengeres()}
 eventPropGetter={eventStyleGetter}
/>

</>
  )
}
