import React from 'react';

export default function WarningPopUp({onClick}){
    return (<div className="overlay">
        <div className="warning-fields">
            <h3>Заполните все обязательные поля перед переходом на следующий этап!</h3>
            <button onClick={() => onClick()}>ОК</button>
        </div>
    </div>)
}