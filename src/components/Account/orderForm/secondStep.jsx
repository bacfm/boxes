import React from 'react';
import './style.scss';
import previous from './img/previous.png';

export default class PaymentStep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            company: '',
            deliver: '',
            pay: '',
            comment: ''
        }
    }

    render() {
        const {company, deliver, pay, comment} = this.state;
        return (
            <section className="section-container user-order-section">
                <div className="content-wrapper order-content">
                    <div className="order-form payment-form">
                        <div className="order-information" style={{display: 'block'}}>
                            <h1>Оформить заказ</h1>
                            <div className="box-instruction">Заполните данные для доставки</div>
                            <div className="box-main-characteristics payment-info">
                                <div className="list-wrapper">
                                    {company ? company : 'Компания'}
                                </div>
                                <div className="list-wrapper required-field">
                                    {deliver ? deliver : 'Способ доставки'}
                                </div>
                                <div className="list-wrapper required-field">
                                    {pay ? pay : 'Способ оплаты'}
                                </div>
                                <div className="form-field"><textarea placeholder="Комментарий к заказу"></textarea></div>
                            </div>
                        </div>
                        <div className="order-controls">
                            <span className="previous_box"><img src={previous} alt="prev"/> Вернуться к выбору товара </span>
                        </div>
                        <button className="order-btn">Оформить заказ</button>
                    </div>
                </div>
            </section>
        );
    }
}