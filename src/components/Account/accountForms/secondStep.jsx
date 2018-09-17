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
            <section className="section-container user-form-section payment-section">
                <div className="content-wrapper form-content">
                    <div className="user-form payment-form">
                        <div className="form-information" style={{display: 'block'}}>
                            <h1>Оформить заказ</h1>
                            <div className="box-instruction">Заполните данные для доставки</div>
                            <div className="form-main-characteristics payment-info">
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
                        <div className="form-controls">
                            <span className="previous_box"><img src={previous} alt="prev"/> Вернуться к выбору товара </span>
                        </div>
                        <button className="order-btn">Оформить заказ</button>
                    </div>
                </div>
            </section>
        );
    }
}