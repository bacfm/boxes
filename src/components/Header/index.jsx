import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './style.scss';


export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            showList: false
        }
    }
    render() {
        return (
            <div className='header-container'>
                <div className='header-wrap'>
                    <div className='header-logo'></div>
                    <div className="header-controls">
                        <div className="user-controls">
                            <Link to="/login">Вход</Link>
                            <Link to="/signup">Регистрация</Link>
                        </div>
                    <nav className='header-navigation'>
                        <ul className={this.state.showList ? '' : 'list-group'}>
                            <li><Link onClick={() => this.setState({showList: false})} to='/'>Главная</Link></li>
                            <li><Link onClick={() => this.setState({showList: false})} to='/news'>Новости</Link></li>
                            <li><Link onClick={() => this.setState({showList: false})} to='/price'>Прайс</Link></li>
                            <li><Link onClick={() => this.setState({showList: false})} to='/contacts'>Контакты</Link></li>
                            <li><Link onClick={() => this.setState({showList: false})} to='/account'>Личный кабинет</Link></li>
                        </ul>
                        <span className="hamburger" onClick={() => this.setState({showList: !this.state.showList})}></span>
                    </nav>
                    </div>
                </div>
            </div>
        )
    }
}