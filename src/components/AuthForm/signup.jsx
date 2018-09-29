import React from 'react';
import './style.scss';

export default class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <section className="auth-section">
            <div className="auth-wrap">
                <div className="auth-form">
                    <h1>Регистрация</h1>
                    <input type="text" placeholder="e-mail"/>
                    <input type="text" placeholder="ФИО"/>
                    <input type="text" placeholder="Компания"/>
                    <input type="text" placeholder="Телефон"/>  
                    <input type="text" placeholder="Пароль"/>  
                    <input type="text" placeholder="Подтвердите пароль"/>  
                    <button>Зарегистрироваться</button>
                </div>  
                </div>
            </section>
        );
    }
}