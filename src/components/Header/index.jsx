import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './style.scss';


export default class Header extends Component {
    render() {
        return (
            <div className='header-container'>
                <div className='header-wrap'>
                    <div className='header-logo'></div>
                    <nav className='header-navigation'>
                        <ul>
                            <li><Link to='/'>Главная</Link></li>
                            <li><Link to='/news'>Новости</Link></li>
                            <li><Link to='/price'>Прайс</Link></li>
                            <li><Link to='/contacts'>Контакты</Link></li>
                            <li><Link to='/account'>Личный кабинет</Link></li>
                        </ul>
                    </nav>
                    <div className='user-controlls'>
                        <Link to="/login">Вход</Link>
                        <Link to="/signup">Регистрация</Link>
                    </div>
                </div>
            </div>
        )
    }
}