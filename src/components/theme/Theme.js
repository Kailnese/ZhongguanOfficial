import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Navbar, Nav, Button, Form, Image } from 'react-bootstrap'

import logo from '../../images/logo.png'
import './Theme.css'
import Footer from '../Footer/Footer'

class Theme extends Component {
    constructor(props){
        super(props);
    }

    forwardTo = (path) => {
        this.props.history.push(path);
    }

    render() {
        return (
            <>
                <Navbar sticky="top" bg="light" variant="light" className="title">
                    <Navbar.Brand href="#home"><Image src={logo} style={{transform: `scale(0.6)`}}/></Navbar.Brand>
                    <Nav className="mr-auto nav-items">
                        {
                            this.props.navs.map(item => {
                                return (
                                    <Nav.Link 
                                        key={item.pathname} 
                                        className={`hov ${this.props.location.pathname === item.pathname ? 'active' : ''}`} 
                                        onClick={() => this.forwardTo(item.pathname)}>
                                            {item.title}
                                    </Nav.Link>
                                )
                            })
                        }
                    </Nav>
                    <Form inline style={{width: `12%`}}>
                        <Button variant="light" className="button one">Buy Now</Button>
                        <Button variant="light" size="lg" className="button two">
                            <svg width="40px" height="40px" fill="currentColor" className="bi bi-justify" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                            </svg></Button>
                    </Form>
                </Navbar>
                <div className="content">
                    {this.props.children}
                </div>
                <Footer/>
            </>
        )
    }
}

export default withRouter(Theme)