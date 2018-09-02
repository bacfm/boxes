import React from 'react';

export default class CallBack extends React.Component {
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
    render(){
        return (
            <div className="overlay">
                <div className="callback-popup">
                    <h3>Хотите, мы перезвоним Вам в удобное время?</h3>
                    <div className="callback-settings">
                        <h2>Мы перезвоним в:</h2>
                        <div className="controls">
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
                        <div className="time-control" style={{display: 'block'}}>
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
                    </div>
                    <div className="number">
                        <input type="text" placeholder="Ваш номер телефона"/>
                        <button>Жду звонка</button>
                    </div>
                    <span className='close-popup' onClick={this.props.onChangeShow}></span>
                </div>
                </div>
        );
    }
}