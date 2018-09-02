import React, {Component} from 'react';

export default class OrderPopup extends Component {
    render() {
        return (
            <div className='overlay' onClick={this.props.onChangeShow}>
                <div className='order-popup-unregistered'>
                    <h2>Для того, чтобы сделать заказ Вам нужно войти или зарегистрироваться</h2>
                    <div className='order-controls'>
                        <button>Войти</button>
                        <button>Зарегистрироваться</button>
                        <span className='close-popup' onClick={this.props.onChangeShow}></span>
                    </div>
                </div>
            </div>
        )
    }
}
