import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './Footer.css'

class Footer extends Component {
    forwardTo(path){
        this.props.history.push(path)
    }
    render() {
        return (
            <div>
                <ul className="footer-list">
                    <li>
                        <h3>About Zhongguan</h3>
                        <a onClick={() => this.forwardTo('/aboutus')}>Introduction of Zhongguan</a><br/>
                        <a onClick={() => this.forwardTo('/aboutus')}>Corporation Culture</a><br/>
                        <a onClick={() => this.forwardTo('/aboutus')}>Company Honor</a><br/>
                        <a onClick={() => this.forwardTo('/aboutus')}>Zhongguan Brand</a>
                    </li>
                    <li>
                        <h3>Product Center</h3>
                        <a onClick={() => this.forwardTo('/products')}>Middle Festival Moon Cake</a><br/>
                        <a onClick={() => this.forwardTo('/products')}>Dragon Boat Festival Zongzi</a><br/>
                        <a onClick={() => this.forwardTo('/products')}>New Year Product</a><br/>
                        <a onClick={() => this.forwardTo('/products')}>Snacks</a>
                    </li>
                    <li>
                        <h3>News Center</h3>
                        <a onClick={() => this.forwardTo('/news')}>Company News</a><br/>
                        <a onClick={() => this.forwardTo('/news')}>Food Business News</a>
                    </li>
                    <li>
                        <h3>Cooperated Client</h3>
                        <a onClick={() => this.forwardTo('/clients')}>Cooperated Client</a>
                    </li>
                    <li>
                        <h3>OEM Processing</h3>
                        <a onClick={() => this.forwardTo('/oem')}>Customize Moon Cake</a><br/>
                        <a onClick={() => this.forwardTo('/oem')}>Customize Zongzi</a><br/>
                        <a onClick={() => this.forwardTo('/oem')}>Customize New Year Product</a><br/>
                        <a onClick={() => this.forwardTo('/oem')}>Customize Pastry</a>
                    </li>
                    <li>
                        <h3>Contact Us</h3>
                        <a onClick={() => this.forwardTo('/contact')}>Contact Us</a><br/>
                        <a onClick={() => this.forwardTo('/contact')}>Feedback</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default withRouter(Footer)