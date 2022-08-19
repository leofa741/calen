import { useDispatch, useSelector } from 'react-redux';
import { calendarApi } from '../api';
import { convertEventsToDateEvents } from '../helpers';
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../store';


export const useCalendarStore = () => {
  
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector( state => state.calendar );
    const {user} = useSelector( state => state.auth );

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) )
    }





    const startSavingEvent = async( calendarEvent ) => {
        // TODO: llegar al backend leo

        // Todo bien
        if( calendarEvent._id ) {
            // Actualizando
            dispatch( onUpdateEvent({ ...calendarEvent }) );
        } else {
            // Creando

            const {data}= await calendarApi.post( '/events', calendarEvent );
          
            console.log({data});

            dispatch( onAddNewEvent({ ...calendarEvent, id: data.evento.id ,user}) );
        }
    }

    const startLoadingEvents = async() => {

     try {
        const {data}= await calendarApi.get( '/events' );

        const events = convertEventsToDateEvents( data.eventos );

        console.log({events});

        console.log({data});
      
     }
        catch (error) {
            console.log(error);
        }
    }






    const startDeletingEvent = () => {
        // Todo: Llegar al backend


        dispatch( onDeleteEvent() );
    }


    return {
        //* Propiedades
        activeEvent,
        events,
        hasEventSelected: !!activeEvent,

        //* Métodos
        startDeletingEvent,
        setActiveEvent,
        startSavingEvent,
        startLoadingEvents
    }
}
