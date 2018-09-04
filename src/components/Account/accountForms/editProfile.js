import React from 'react';
import './style.scss';

export default class EditProfile extends React.Component {
    constructor(props) {
        super(props);

    }
    render (){
        const companies = ['ООО "Оазис"', 'ООО "Оазис"'];
        return (
            <section className="section-container user-form-section">
                <div className="content-wrapper form-content">
                    <div className="user-form">
                        <h1>Редактировать профиль</h1>
                        <div className="form-information" style={{width: '365px', margin: '0 auto'}}>
                            <div className="form-main-characteristics">
                            <input type="text" placeholder="Фамилия" />
                            <input type="text" placeholder="Имя"/>
                            <input type="text" placeholder="Отчество"/>
                            <input type="text" placeholder="Номер телефона"/>
                            </div>
                        </div>
                        <div className="user-companies">
                            <span>Компании</span>
                            <ul className="user-companies-list">
                                {companies.map((c, idx) => <li key={idx}>{c}</li>)}
                            </ul>
                        </div>
                        <button className="save_edit">Сохранить</button>
                    </div>
                </div>
            </section>
        );
    }

}