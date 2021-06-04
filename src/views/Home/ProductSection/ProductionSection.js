import React, { Component } from 'react'

import p1 from './images/p1.jpg'
import pp1 from './images/pp1.png'
import p2 from './images/p2.jpg'
import pp2 from './images/pp2.png'
import p3 from './images/p3.jpg'
import pp3 from './images/pp3.png'
import './ProductSection.css'

export default class ProductionSection extends Component {
    render() {
        return (
            <div className="product-secton">
                <div style={{color: `#d82019`, fontSize: `24px`, fontWeight: `bold`}}>
                    PRODUCT CENTER
                </div>
                <div className="product-section-img">
                    <ul>
                        <li>
                            <a>
                                <div className="bg-img">
                                    <img src={p1}/>
                                </div>
                                <div className="fg-img" style={{transform: `translateY(-100%) scale(0.7)`}}>
                                    <img src={pp1} style={{transition: `0.4s`}}/>
                                </div>
                                <div className="fg-text">
                                    <h3 style={{transform: `translate(120%, -350%)`}}>MOONCAKE</h3>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <div className="bg-img">
                                    <img src={p2} />
                                </div>
                                <div className="fg-img" style={{transform: `translate(20%, -130%) scale(0.9)`}}>
                                    <img src={pp2} style={{transition: `0.4s`}}/>
                                </div>
                                <div className="fg-text">
                                    <h3 style={{transform: `translate(210%, -350%)`}}>ZONGZI</h3>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <div className="bg-img">
                                    <img src={p3}/>
                                </div>
                                <div className="fg-img" style={{transform: `translate(-10%, -100%) scale(0.7)`}}>
                                    <img src={pp3} style={{transition: `0.4s`}}/>
                                </div>
                                <div className="fg-text">
                                    <h3 style={{transform: `translate(150%, -350%)`}}>NIANHUO</h3>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
