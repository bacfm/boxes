import React from 'react';
import './style.scss';

export default function OrderItem(){
    return (
        <div className="order-item">
            <div className="box_picture"></div>
            <span className="order_number">Заказ №1</span>
            <span className="order_quantity">В заказе 8 товаров</span>
            <span className="order_date">24.06.2018</span>
            <div className="order_status">
                Статус: <span>В обработке</span>
            </div>
        </div>
    );
}