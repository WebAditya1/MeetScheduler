import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import img from './images/login.jpg'
import "./Home.css";

export default class Home extends Component {

  
  render() {
    const get = localStorage.getItem('login');
    console.log(get);
    return (
      <div className="Home">
        <div className="col-2">
          <h1>Welcome to Meet Schedular Platform</h1>
          <p>An Application designed by the students , for the students to just give them a gentle reminder of their scheduled meeting 10-15 minutes prior of the start time.</p>
          <form>
            {get ? <Button variant="btn btn-success" onClick={() => history.push('/Calendar')}>View Calendar</Button> : <Button variant="btn btn-success" onClick={() => console.log("Login First")}>View Calendar</Button>  }
          </form>
        </div>
        <div className="col-2">
          <img src={img} alt="Homepage"></img>
        </div>
      </div>
    );
  }
}
