import React, { Component } from 'react';
import './slider.css';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bedroom from './assets/bedroom.jpg';
import kitchen from './assets/kitchen.jpg';
import livingroom from './assets/livingroom.jpg';

const Slider =()=> {
        return (
            <Carousel className='slider'>
                <div className='img'>
                    <img src={bedroom} />
                    <p className="legend">Legend 1</p>
                </div>
                <div className='img'>
                    <img src={kitchen} />
                    <p className="legend">Legend 2</p>
                </div>
                <div className='img'>
                    <img src={livingroom} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    };

export default Slider