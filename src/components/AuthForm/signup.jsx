import React from 'react';
import './style.scss';

export default class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return (
            <section className="auth-section">
            <div className="auth-wrap">
                <div className="auth-form">
                    <h1>Регистрация</h1>
                    <input type="text" placeholder="Фамилия"/>  
                    <input type="text" placeholder="Имя"/>  
                    <input type="text" placeholder="Отчество"/>  
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