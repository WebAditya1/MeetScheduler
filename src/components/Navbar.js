import React , {useState} from 'react';
import './Navbar.css';
import { Navbar, Nav} from 'react-bootstrap';
import { withRouter  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Navigation = (props) => {
    const dispatch = useDispatch();
    const get = localStorage.getItem('login');
    const [log , setlog] = useState(false);
   
   console.log(log);
    const fun = (e)=>{
        if(log)
        localStorage.setItem('login',true);
        else
        localStorage.setItem('login',false);

    }
    if(log === true)
    console.log("hey");
    return (
        <Navbar className="nav">
            <Navbar.Brand href="#home" style={{color: "white"}}>Welcome</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/" style={{color: "white"}}>Home</Nav.Link>
                    <Nav.Link href="/About" style={{color: "white"}}>About</Nav.Link>
                    {get && <Nav.Link href="/Calendar" style={{color: "white"}}>Calendar</Nav.Link>}
                    {get && <Nav.Link href="/Logout" style={{color: "white"}} onClick={() => localStorage.clear()}>Logout</Nav.Link>}


                {!get && <Nav.Link href="/Logout" style={{color: "white"}} onClick={() => {localStorage.setItem('login' , true)}}>Login</Nav.Link>}

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Navigation);