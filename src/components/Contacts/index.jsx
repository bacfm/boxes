import React, {Component} from 'react';
import './style.scss';

export default class Contacts extends Component {
    constructor(props){
        super(props);
        this.state = {
            userPhone: '',
            showHours: false,
            showMinutes: false,
            hours: 10,
            minutes: '00',
            day: 'Понедельник',
            showDays: false
        }
        this.onSelectDay = this.onSelectDay.bind(this);
        this.onSelectMinutes = this.onSelectMinutes.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
    }
    onPhoneChange(ev){
        ev.preventDefault();
        this.setState({userPhone: ev.target.value.replace(/[^+\d]/g, '')});
    }
    onSelectMinutes(minutes){
        this.setState({minutes: minutes, showMinutes: false})
    }
    onSelectDay(day){
        this.setState({day: day, showDays: false})
    }
    render() {
        return (
            <section className='contacts-block'>
                <div className="contacts-content">
                    <div className="contacts-wrap">
                    <div className="contact-emails info-block">
                        <h1>Наша электронная почта:</h1>
                        <span className='info-item'>ex@dmail.com</span>
                        <span className='info-item'>ex2@dmail.com</span>
                    </div>
                    <div className="contact-city info-block">
                        <h1>Наша электронная почта:</h1>
                        <span className='info-item'>Украина,</span>
                        <span className='info-item'>г. Днепр</span>
                        <span className='info-item'>ул. Столбовая, 33А</span>
                    </div>
                    <div className="contact-phones info-block">
                        <h1>Наша электронная почта:</h1>
                        <span className='info-item'>ex@dmail.com</span>
                        <span className='info-item'>ex2@dmail.com</span>
                    </div>
                    </div>
                </div>
                <div className="call-back">
                    <h2>Хотите, мы перезвоним Вам в удобное время?</h2>
                    <div className="call-back-controls">

                        <div className="time">
                            <h4>Мы перезвоним Вам в:</h4>
                            <div className="select-time-wrap">
                            <div className="time-control">
                                <span>{this.state.hours}</span>
                            </div>
                            <div className="time-control">
                            <span onClick={() => this.setState({showMinutes: !this.state.showMinutes})}>{this.state.minutes}</span>
                            {this.state.showMinutes ?
                            <ul className="contacts-control-list">
                                <li onClick={() => this.onSelectMinutes('00')}>00</li>
                                <li onClick={() => this.onSelectMinutes(15)}>15</li>
                                <li onClick={() => this.onSelectMinutes(30)}>30</li>
                                <li onClick={() => this.onSelectMinutes(45)}>45</li>
                            </ul>
                            :
                            null
                            }
                            </div>
                        </div>
                            <div className="time-control">
                            <div className="selected-day" onClick={() => this.setState({showDays: !this.state.showDays})}>{this.state.day}</div>
                            { this.state.showDays ?
                            <ul className="contacts-control-list show-days">
                                <li onClick={() => this.onSelectDay("Понедельник")}>Понедельник</li>
                                <li onClick={() => this.onSelectDay("Вторник")}>Вторник</li>
                                <li onClick={() => this.onSelectDay("Среда")}>Среда</li>
                                <li onClick={() => this.onSelectDay("Четверг")}>Четверг</li>
                                <li onClick={() => this.onSelectDay("Пятница")}>Пятница</li>
                                <li onClick={() => this.onSelectDay("Суббота")}>Суббота</li>
                                <li onClick={() => this.onSelectDay("Воскресенье")}>Воскресенье</li>    
                            </ul>  
                            :
                            null
                            }
                            </div>
                        </div>
                        <div className="user-phone">
                            <input type="text" placeholder='Ваш номер телефона' value={this.state.userPhone} onChange={this.onPhoneChange}/>
                            <button>Жду звонка</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}