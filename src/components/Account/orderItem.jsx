import React from 'react';
import './style.scss';

export default function OrderItem(){
    return (
        <div className="order-item">
            <div className="box_picture"></div>
            <div className="order_inf_wrap">
                <span className="order_number">Заказ №1</span>
                <span className="order_quantity">В заказе 8 товаров</span>
            </div>
            <div className="status_wrap">
            <span className="order_date">24.06.2018</span>
            <div className="order_status">
                <p>Статус:</p> <span>В обработке</span>
            </div>
            </div>
        </div>
    );
}