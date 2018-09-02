import React, {Component} from 'react';
import AboutCompany from './about';
import Products from './products';
import WhyWe from './whyWe';
import Partners from './partners';
import Guarantees from './guarantees';
import OrderPopup from './orderPopup';
import CallBack from './callback';
import './style.scss';

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderPopup: false,
            callbackPopup: false
        }
        this.onOrderPopupView = this.onOrderPopupView.bind(this);
        this.onCallbackPopup = this.onCallbackPopup.bind(this);
    }

    onOrderPopupView(ev) {
        ev.preventDefault();
        this.setState({orderPopup: !this.state.orderPopup})
    }
    onCallbackPopup(ev){
        ev.preventDefault();
        this.setState({callbackPopup: !this.state.callbackPopup})
    }

    render() {
        return (
            <div className='main-page-wrap'>
                <AboutCompany onOrderPopupView={this.onOrderPopupView}></AboutCompany>
                <Products></Products>
                <WhyWe></WhyWe>
                <Partners></Partners>
                <Guarantees></Guarantees>
                <div className="content-wrapper">
                <div className="do-order">
                    <h2>Вы можете оформить заказ прямо сейчас!</h2>
                    <button className='get-order' onClick={this.onOrderPopupView}>ЗАКАЗАТЬ</button>
                </div>
                </div>
                {this.state.orderPopup ? <OrderPopup onChangeShow={this.onOrderPopupView}></OrderPopup> : null}
                {this.state.callbackPopup ? <CallBack onChangeShow={this.onCallbackPopup} /> : null}
                <div className="call-back" onClick={() => this.setState({callbackPopup: true})}></div>
            </div>
        );
    }
}
