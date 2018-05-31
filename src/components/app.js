import React, { Component } from 'react';
import Picker from './picker';
import Button from './button';
import Clock from './clock';
import ChangeDate from './changeDate';
import LargeText from './largeText';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      active: false
    }
  }

  handleGenerate = function() {
    this.setState({ active: true })
    // Set the date we're counting down to
  var countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    const time = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    console.log(time)

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        // document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
  }.bind(this)

  renderItems = function() {
    if(this.state.active) {
      return [
        <Clock/>,
        ChangeDate('Change Date', () => this.setState({ active: false })),
        LargeText('04/03'),
        <label className="grid__remaining">Remaining until your 21st birthday</label>
      ]
    } else {
      return [
        <Picker/>,
        Button('Generate Countdown', () => this.handleGenerate())
      ]
    }
  }.bind(this)

  render() {
    return (
      <div className="grid">
        <h1 className="grid__title">Birthday Countdown</h1>

        <div className="grid__skew-dark-two"></div>
        <div className="grid__skew-dark-three"></div>

        <div className="grid__skew-light-one"></div>
        <div className="grid__skew-light-two"></div>
        <div className="grid__skew-light-three-box"></div>

        { this.renderItems() }
      
  
      </div>
    );
  }
}
