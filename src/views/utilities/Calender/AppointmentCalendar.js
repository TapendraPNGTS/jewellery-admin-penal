// AppointmentCalendar.js
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import moment from 'moment';
import  CalenderApp  from './CalenderApp';

function AppointmentCalendar() {
  // const localizer = momentLocalizer(moment);

  const [selectedDate, setSelectedDate] = useState(null);
  // const [appointments, setAppointments] = useState([]);
  const [message, setMessage] = useState('');


  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };

  // const handleChange = (event) => {
  //   // 👇 Get input value from "event"
  //   setMessage(event.target.value);
  // };

  return (
    <div>
      <h4>Select Appointment Date</h4>
      <CalenderApp/>
    </div>
  );
}

export default AppointmentCalendar;
