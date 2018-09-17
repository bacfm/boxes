import React from 'react'
import {Link} from 'react-router-dom';


export default class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            rememberMe: true
        }
        this.onChangeRemember = this.onChangeRemember.bind(this);
    }
    onChangeRemember(ev){
        this.setState({rememberMe: !this.state.rememberMe})
    }
    render(){
        console.log(this.state.rememberMe);
        return (
            <section className="auth-section">
            <div className="auth-wrap">
                <div className="auth-form">
                    <h1>Вход</h1>
                    <input type="text" placeholder="Введите ваш e-mail"/>
                    <input type="text" placeholder="Введите ваш пароль"/>
                    <div className="auth-controls">
                        <div className="remember-me">
                            <label>
                                {this.state.rememberMe ?
                                <div className="check-bg"></div>
                                    :
                                    null
                            }
                            <input onChange={this.onChangeRemember} value={this.state.rememberMe} type="checkbox"/>
                            </label>
                            <div className="checkbox_text">Запомнить меня</div>
                        </div>
                        <Link to="/reset-password">Не можете войти?</Link>
                    </div>
                    <button>Войти</button>
                    <Link to="/signup">Регистрация</Link>
                </div>
                </div>
            </section>
        );
    }
}