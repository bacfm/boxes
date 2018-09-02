import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss';

export default class Account extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return (
            <div className="account">
            <section className="section-container order-section">
                <div className="content-wrapper">
                    <div className="order">
                        <div className="order-control">
                            <h3>Для того, чтобы сделать заказ нажмите на кнопку</h3>
                            <Link to={'/order'}>ЗАКАЗАТЬ</Link>
                        </div>
                    </div>
                </div>
                </section>
                <section className="section-container my-orders">
                <div className="content-wrapper">
                <h1>Мои заказы</h1>
                </div>
                </section>
            </div>
        );
    }
}