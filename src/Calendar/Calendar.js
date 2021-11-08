import {Nav} from 'react-bootstrap';
import React, { Component } from 'react';
import './appStyles.css';

class Calendar extends Component {
    render() {
    return (
        <div className="schedular">
            <div className="c2 calendar">
                <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FKolkata&src=MjAxOTUxMDM3QGlpaXR2YWRvZGFyYS5hYy5pbg&src=Y19jbGFzc3Jvb202ZWZlMTQxYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb203NTI2Y2QyY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb20zMDcyZjE1OUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb20xMzM0NTg4MkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=aWlpdHZhZG9kYXJhLmFjLmluX2NsYXNzcm9vbTVhMjVmYjI3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y19jbGFzc3Jvb20zYjBkMTI3MkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb21kMjRhMjA5MkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb21kMmI3OTk4YUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb200ZjcyNjU4NUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=aWlpdHZhZG9kYXJhLmFjLmluX2NsYXNzcm9vbTllNjg0M2U5QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=aWlpdHZhZG9kYXJhLmFjLmluX2NsYXNzcm9vbTI0NzE3NWU0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=aWlpdHZhZG9kYXJhLmFjLmluX2NsYXNzcm9vbTkyNWFmMzljQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=aWlpdHZhZG9kYXJhLmFjLmluX2NsYXNzcm9vbTRmMzA2MGVmQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=aWlpdHZhZG9kYXJhLmFjLmluX2NsYXNzcm9vbTNkNDFhNDYxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=aWlpdHZhZG9kYXJhLmFjLmluX2NsYXNzcm9vbWEzZmQzOTllQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%230047a8&color=%2333B679&color=%23c26401&color=%23202124&color=%230047a8&color=%23202124&color=%230047a8&color=%23202124&color=%230047a8&color=%23202124&color=%23202124&color=%230B8043&color=%23137333&color=%237627bb&color=%23b80672&color=%23007b83&color=%23137333" 
                frameborder="0" scrolling="no"></iframe>
            </div>
            <div className="c2 butn">
                <button><Nav.Link activeclassname="menu_active" className="butn1 nav-link" href="/ScheduleMeet">Schedule Meet</Nav.Link></button>
                <button> <Nav.Link activeclassname="menu_active" className="butn2 nav-link" href="/AttendMeet">Attend Meet</Nav.Link></button>
            </div>
        </div>
    )
    }
}

export default Calendar;
