import React, { Component } from 'react';
import './About.css';
import img from "../Home/images/homeimg.png"

class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="row1">
                    <h2> About Us </h2>
                    <hr />
                </div>
                <div className="row-1">
                    <div className="col-2">
                        <img src={img} width="100%" alt="About us" />
                    </div>
                    <div class="col-2">
                        <h1> Meet Schedular </h1>
                        <p> An Application designed by the students , for the students to just give them a gentle reminder of their scheduled meeting 10-15 minutes prior of the start time. 
                            A helpful platform which will keep them away from missing important lectures. <br /> <br />
                            In our platform , we have a <b>Calendar</b> page which depicts the google calendar of your particular E-mail ID. We have two buttons there - <b>Attend Meet</b> and <b>Schedule Meet</b>. <br/><br/>
                            Once you click on Attend Meet , you will redirected to a form where you need to enter the code of your google meet and will redirect you to that particular google meeting.<br />
                            While , once you click on Schedule Meet , you will be asked to fill a form where you need to specify the timings of when the meet is to be scheduled.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;