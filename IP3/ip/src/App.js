import React, {Component} from 'react';
import { BrowserRouter } from "react-browser-router";
import Navbar from "./navbar";
import Date_time from "./date-time";
import World_clock from "./world_clock";
import Header from "./header";
import Footer from "./footer";
import Dropdown from 'react-dropdown';
const axios = require('axios');



class App extends Component {



  constructor(props){
    super(props);
    this.state={
      data: null,
      length: null,
      hrs: null,
      min: null,
      sec: null,
      day_week:null,
      day: null,
      month:null,
      year: null,
      loc:null,
    }
    this.state={
      location:null,
      hours:null,
      minutes:null,
      seconds:null,
      day_weeks:null,
      dbDay:null,
      months:null,
      years:null,
      dbday_date:null,
    }
  };
  state = {
    selectedOption: null,

  };


  componentDidMount(){

    fetch("http://localhost:5000/")
    .then(response => {
          console.log(response);
          return response.json();
        })
        .then(data => {
          var length = data.length;

          this.setState({data: data})
          this.setState({length: length})


        })
        fetch("http://localhost:5000/india")
        .then(response => {
              console.log(response);
              return response.json();
            })
        .then(data => {
          console.log(data);
          var loc = data.location;
          var hrs = data.hours;
          var min = data.minutes;
          var sec = data.seconds;
          var day_week = data.dbDay;
          var day= data.dbDayDate;
          var month = data.dbMonth;
          var year = data.dbyear;

          this.setState({loc: loc})
          this.setState({hrs: hrs})
          this.setState({min: min})
          this.setState({sec: sec})
          this.setState({day_week: day_week})
          this.setState({day: day})
          this.setState({month: month})
          this.setState({year: year})

        })
    console.log("connection work properly");
  };


    handleChange = selectedOption => {
      this.setState(
        { selectedOption },
        () => console.log(`Option selected:`, this.state.selectedOption)
      );
    };

    handleClick = () => {
      console.log('this is:', this.state.selectedOption);

      axios.post("http://localhost:5000/", {
      selected: this.state.selectedOption,
    })
    .then((response) =>{

    this.setState({location: response.data.location});
    this.setState({hours: response.data.hours});
    this.setState({minutes: response.data.minutes})
    this.setState({seconds: response.data.seconds})
    this.setState({dbDay: response.data.dbDay})
    this.setState({months: response.data.dbMonth})
    this.setState({years: response.data.dbyear})
    this.setState({dbday_date: response.data.dbDayDate})

    })
    .catch(function (error) {
      console.log(error);
    });

  };




  render(){
    const { selectedOption } = this.state;

  return (

    <BrowserRouter>
    <div className="App">
      <Header />
      <Navbar />
      <Date_time

      location={this.state.loc}
      day_week={this.state.day_week}
      day={this.state.day}
      month={this.state.month}
      year={this.state.year}
      hrs={this.state.hrs}
      min={this.state.min}
      sec={this.state.sec}

       />


       <World_clock
       location={this.state.location}
       day_weeks={this.state.day_weeks}
       dbDay={this.state.dbDay}
       months={this.state.months}
       years={this.state.years}
       hours={this.state.hours}
       minutes={this.state.minutes}
       seconds={this.state.seconds}
       dbday_date={this.state.dbday_date}


       options={this.state.data}
       onChange={this.handleChange}
       value={selectedOption}
       onClick={this.handleClick}

       />

      <Footer />

    </div>
    </BrowserRouter>

  );
}
}
export default App;
