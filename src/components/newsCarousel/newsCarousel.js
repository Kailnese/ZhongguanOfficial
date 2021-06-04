import React, { Component } from 'react'
import { Carousel, Card, Button } from 'react-bootstrap'

import {news} from './dummyNews'
import './style.css'

export default class newsCarousel extends Component {

    createNews(){

    }

    render() {
        return (
            <div>
                <h1 className="news-title">
                    NEWS CENTER
                </h1>
                <Carousel interval={null} fade={false}>
                    
                    {news.map(item => {
                        return (
                            <Carousel.Item key={item.id}>
                                {/* <img src={item.imgSrc} alt={item.id} style={{margin: `0 auto`, display: `block`}}/> */}
                                <div style={{display: `flex`, flexWrap: `wrap`, justifyContent: `center`}}>
                                    <Card style={{ width: '18rem', marginRight: `2rem`}}>
                                        <Card.Img variant="top" src={item.imgSrc} />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '18rem', marginRight: `2rem`}}>
                                        <Card.Img variant="top" src={item.imgSrc} />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '18rem', marginRight: `2rem`}}>
                                        <Card.Img variant="top" src={item.imgSrc} />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '18rem'}}>
                                        <Card.Img variant="top" src={item.imgSrc} />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </div>
                                
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
                <Button className="learn-more" variant="outline-secondary">Learn More</Button>
            </div>
        )
    }
}
