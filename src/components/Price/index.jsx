import React, {Component} from 'react';
import './style.scss';

export default class Price extends Component {
    render () {
        return (
            <section className="price-section">
            <div className="wrapper">
            <div className='price-container'>
                    <div className="price-table">
                        <div className='table-header-item'>Марка гофрокартона</div>
                        <div className='table-header-item'>Гофролист стоимость в грн с НДС за 1м2</div>
                        <div className='table-header-item'>Изделия из гофрокартона стоимость в грн с НДС за 1м2</div>
                        <div className="layer">3-х слойный гофрокартон техназначения</div>
                        <div className="item-price">2.61-2.88</div>
                        <div className="item-price">3.08</div>
                        <div className="layer">3-х слойный гофрокартон марки Т-21</div>
                        <div className="item-price">3.18</div>
                        <div className="item-price">3.40</div>
                        <div className="layer">3-х слойный гофрокартон марки Т-22</div>
                        <div className="item-price">3.48</div>
                        <div className="item-price" style={{textAlign: 'center', paddingTop: '33px'}}>3.70</div>
                        <div className="layer">3-х слойный гофрокартон марки Т-23</div>
                        <div className="item-price">3.75</div>
                        <div className="item-price">3.95</div>
                    </div>
            </div>
            </div>
            </section>
        );
    }
}