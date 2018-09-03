import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class OrderPopup extends Component {
    render() {
        return (
            <div className='overlay' onClick={this.props.onChangeShow}>
                <div className='order-popup-unregistered'>
                    <h2>Для того, чтобы сделать заказ Вам нужно войти или зарегистрироваться</h2>
                    <div className='order-controls'>
                        <Link to={"/login"}>Войти</Link>
                        <Link to={"/signup"}>Зарегистрироваться</Link>
                        <span className='close-popup' onClick={this.props.onChangeShow}></span>
                    </div>
                </div>
            </div>
        )
    }
}
