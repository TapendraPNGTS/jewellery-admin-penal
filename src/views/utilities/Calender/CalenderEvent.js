import axios from 'axios';
import React, { useState, useEffect } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';

function AppointmentCalendar() {
    const [events, setEvents] = useState([]);
  
    useEffect(() => {
      axios.get('REACT_APP_API_URL')
        .then((response) => {
          setEvents(response.data);
        })
        .catch((error) => {
          console.error('Error fetching events:', error);
          setEvents([]); 
        });
    }, []);
    return(
        <>
        </>
    )
}    
export default AppointmentCalendar;