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
                        <div style={{paddingRight: '100px'}}>3-х слойный гофрокартон техназначения</div>
                        <div style={{textAlign: 'center', paddingTop: '33px'}}>2.61-2.88</div>
                        <div style={{textAlign: 'center', paddingTop: '33px'}}>3.08</div>
                        <div style={{paddingRight: '100px'}}>3-х слойный гофрокартон марки Т-21</div>
                        <div style={{textAlign: 'center', paddingTop: '33px'}}>3.18</div>
                        <div style={{textAlign: 'center', paddingTop: '33px'}}>3.40</div>
                        <div style={{paddingRight: '100px'}}>3-х слойный гофрокартон марки Т-22</div>
                        <div style={{textAlign: 'center', paddingTop: '33px'}}>3.48</div>
                        <div style={{textAlign: 'center', paddingTop: '33px'}}>3.70</div>
                        <div style={{paddingRight: '100px'}}>3-х слойный гофрокартон марки Т-23</div>
                        <div style={{textAlign: 'center', paddingTop: '33px'}}>3.75</div>
                        <div style={{textAlign: 'center', paddingTop: '33px'}}>3.95</div>
                    </div>
            </div>
            </div>
            </section>
        );
    }
}