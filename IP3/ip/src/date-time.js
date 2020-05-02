import React from "react";



import "./css/date-time.css";



function Date_time(props) {
  return (
    <div id="date_time">
    <div className="date">
      <h1>{props.location}</h1>
      <h1>{props.day_week}, {props.day} {props.month} {props.year}</h1>

    </div>
    <div className="time">

      <h1>{props.hrs}:{props.min}<span>{props.sec}</span></h1>
    </div>
    </div>

  );
}

export default Date_time;
