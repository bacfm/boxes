import React from 'react';
import './style.scss';

export default class OrderForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            boxes: [],
            width: '',
            long: '',
            height: ''
        }
        this.onWidthChange = this.onWidthChange.bind(this);
        this.onLongChange = this.onLongChange.bind(this);
        this.onHeightChange = this.onHeightChange.bind(this);
    }
    onWidthChange(ev){
        this.setState({width: ev.target.value})
    }
    onLongChange(ev){
        this.setState({long: ev.target.value})
    }
    onHeightChange(ev){
        this.setState({height: ev.target.value})
    }
    render(){
        const {
            width,
            long,
            height
        } = this.state;
        return (
            <section className="section-container">
                <div className="content-wrapper">
                    <div className="order-form">
                        <h1>Оформить заказ</h1>
                        <span>Заполните информацию о товаре</span>
                        <h3>Коробка №1</h3>
                        <div className="order-information">
                            <div className="box-characterics">
                                <input placeholder="Ширина(см)" />                        
                                <input placeholder="Длина(см)" />                        
                                <input placeholder="Высота(см)" />                        
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}