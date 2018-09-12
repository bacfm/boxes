import React, {Component} from 'react';
import Slider from "react-slick";
import slider1 from './img/slider1.png'
import slider2 from './img/slider2.png'
import slider3 from './img/slider3.png'



export default class ProductSlider extends Component {
    render() {
        var sliders;
        if(window.innerWidth  <= 1270 && window.innerWidth > 940){
            sliders = 2;
        }else if(window.innerWidth <= 940){
            sliders = 1
        }else{
            sliders = 3;
        }
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: sliders,
            slidesToScroll: 1,
            arrows: true,
        };
        console.log(sliders);
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