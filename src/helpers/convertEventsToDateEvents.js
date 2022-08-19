

import {parseISO} from 'date-fns';



export const convertEventsToDateEvents = ( events = [] ) => {

    return events.map( e =>{

        e.end = parseISO( e.end );
        e.start = parseISO( e.start );

        return e;



    }

    )

}







      

  

    






