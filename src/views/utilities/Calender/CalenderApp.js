import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction" 

import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useState, useEffect } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';


export default function CalenderApp() {

    const [rows, setRows] = useState([]);
    const [events, setEvents] = useState([]);

    function getalldata() {
        var myHeaders = new Headers();
        myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
        myHeaders.append("token", localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            adminId: localStorage.getItem("userId"),

        });
        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };
        fetch(`${process.env.REACT_APP_API_URL}getAllAppointment`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                const eve = result.data;
                const data=[]
                Promise.all(eve.map((row, index) => (
                    data.push({
                        title: row.Name,
                        date: row.Date
                    })
                   )
                ))

                setEvents(data)
                // console.log(data);
            })
            .catch((error) => console.log("error", error));

    }
    useEffect(() => {
        getalldata();
    }, []);

    useEffect(() => {
    }, [rows]);

    return (

        <>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView={"dayGridMonth"}
                headerToolbar={{
                    left: "prev,today,next",
                    center: "title",
                    right: "",
                }}
                themeSystem="Simplex"
                events={events}
                editable={false}
                nowIndicator={true}
                dayMaxEvents={true}
                selectable={true}
                displayEventEnd="true"
                eventColor={"#" + Math.floor(Math.random() * 16777215).toString(16)}
            />
        </>
    );
}

