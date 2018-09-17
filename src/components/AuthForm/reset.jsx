import React from 'react';
import './style.scss'

export default function ResetPassword() {
    return(
        <section className="auth-section">
            <div className="auth-wrap">
                <div className="auth-form">
                    <h1>Восстановление доступа</h1>
                    <p>Пожалуйста, введите свой e-mail для восстановления пароля</p>
                    <input type="email" placeholder="E-mail"/>
                </div>
            </div>
        </section>
    );
}