import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './style.scss';

const SITE_KEY = '6Le0rnIUAAAAAL5VTf-WgMMkN9tWyyvQcmSwVwfw';

export default class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
        this._reCaptchaRef = React.createRef();
    }
    render(){
        return (
            <section className="auth-section">
            <div className="auth-wrap">
                <form className="auth-form">
                    <h1>Регистрация</h1>
                    <input type="text" placeholder="e-mail"/>
                    <input type="text" placeholder="ФИО"/>
                    <input type="text" placeholder="Компания"/>
                    <input type="text" placeholder="Телефон"/>  
                    <input type="text" placeholder="Пароль"/>  
                    <input type="text" placeholder="Подтвердите пароль"/>  
                    <button>Зарегистрироваться</button>
                    <ReCAPTCHA
                        style={{margin: '0 auto'}}
                        ref={this._reCaptchaRef}
                        sitekey={SITE_KEY}
                    />
                </form>
                </div>
            </section>
        );
    }
}