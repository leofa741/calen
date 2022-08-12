import React, { useState } from 'react'
import { Calendar} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';

import{addHours} from 'date-fns'

import { NavBar ,CalendarEvent ,CalendarModal} from '../'
import { localizer, getMessagesES } from '../../helpers';







export const CalendarPage = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')

  const eventStyleGetter = (event, start, end, isSelected) => {    
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
   

   const events = [
    {    
      title: 'All Day Event very long',
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
    }
  ]
  
 
     const DoubleClick = (event) => {
  console.log({doubleClick:event})
    }

   const Select = (event) => {
  console.log({click:event})
    }

  const View = (event) => {
    localStorage.setItem('lastView', event );
    setLastView( event ) 
  }


  return (
    <>  
 <NavBar/>

 <Calendar
        culture='es'
        localizer={ localizer }
        events={ events }
        defaultView={ lastView }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px )' }}
        messages={ getMessagesES() }
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={DoubleClick}
        onSelectEvent={Select}
        onView={View}
      
      />
<CalendarModal/>


 

   </>
     )
}
