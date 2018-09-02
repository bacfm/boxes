import React, {Component} from 'react';
import Slider from "react-slick";
import slider1 from './img/slider1.png'
import slider2 from './img/slider2.png'
import slider3 from './img/slider3.png'



export default class ProductSlider extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
        };
        return (
            <Slider {...settings}>
                <div>
                    <img src={slider1} alt="1"/>
                </div>
                <div>
                    <img src={slider2} alt="2"/>
                </div>
                <div>
                    <img src={slider3} alt="3"/>
                </div>
                <div>
                    <img src={slider3} alt="3"/>
                </div>
                <div>
                    <img src={slider3} alt="3"/>
                </div>
            </Slider>
        );
    }
}