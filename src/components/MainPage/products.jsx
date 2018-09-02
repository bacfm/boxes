import React, {Component} from 'react';
import ProductSlider from './reactSlider';

export default class Products extends Component {
    render() {
        return (
            <section className='our-products section-container'>
                <div className="content-wrapper">
                <h1>Наша продукция</h1>
                <ProductSlider></ProductSlider>
                <div className="products-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquam cumque dicta eius
                        eligendi facilis in maiores rem similique voluptate!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta nesciunt praesentium quam
                        quibusdam quisquam ratione sapiente vero? Cupiditate, optio ullam?</p>
                </div>
                </div>
            </section>
        );
    }
}