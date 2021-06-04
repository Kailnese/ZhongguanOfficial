import React, { Component } from 'react'
import { Carousel, Badge, Button } from 'react-bootstrap'

import first from '../../images/home_slide/1.jpg'
import second from '../../images/home_slide/2.jpg'
import thrid from '../../images/home_slide/3.jpg'
import prof_bg from '../../images/profile-bg.jpg'
import { NewsCarousel } from '../../components/'
import ProductSection from './ProductSection/ProductionSection'
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <>
                <Carousel controls={false}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={first}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={second}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={thrid}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <NewsCarousel />
                <div className="company-profile-section">
                    <div style={{width: `30%`, marginLeft: `20%`, marginRight: `1rem`}}>
                        <h2 style={{color: `#d82019`}}>COMPANY PROFILE</h2>
                        <article>
                            Zhongguan Group-Chengdu Zhongguan Food Co., Ltd.-China Food Industry Association Sichuan-style pastry production and research base, 
                            located in Bailuo Industrial Park, Xindu District, Chengdu, the factory covers an area of more than 80 acres. Establish a professional 
                            production, marketing, and planning team to develop moon cake group buying, moon cake customization, moon cake processing, group buying 
                            of zongzi, custom zongzi, and oem of zongzi. It has built a 100,000-level purification workshop of nearly 15,000 square meters, with dozens 
                            of automated production lines and workshops for moon cakes, zongzi, new year's goods, snacks, etc. For more than 10 years, Zhongguan Group 
                            has insisted...
                        </article>
                        <Button className="learn-more" variant="outline-secondary">Learn More</Button>
                    </div>
                    <div style={{background: `url(${prof_bg})`, width: `50%`, color: `white`, fontSize: `22px`, fontWeight: `bold`, display: `block`}}>
                        <h3 style={{width: `35%`, marginBottom: `3rem`, marginTop: `3rem`, marginLeft: `1rem`}}>Quality builds brand. Service creates the future</h3>
                        <h3 style={{width: `40%`, marginLeft: `1rem`}}>Real materials, sincere efforts, let every consumer eat healthy and safe food.</h3>
                    </div>
                </div>
                <ProductSection />
            </>
        )
    }
}
