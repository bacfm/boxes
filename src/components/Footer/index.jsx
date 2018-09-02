import React, {Component} from 'react';
import './style.scss';

export default class Footer extends Component {
    render(){
        return (
            <div className="footer">
                <div className="footer-wrap">
                <div className="contacts">
                    <span className='phone'>+38 066 00 00 000</span>
                    <span className='phone'>+38 066 00 00 000</span>
                </div>
                <div className="position">
                    <span>Украина</span>
                    <span>Днепр</span>
                    <span>ул. Столбовая, 33А</span>
                </div>
                <div className="email">
                    <span>ex@dmail.com</span>
                </div>
                <div className="social">
                    <a href="" className='inst-logo'> </a>
                    <a href="" className='twitt-logo'> </a>
                    <a href="" className='fb-logo'> </a>
                </div>
                </div>
            </div>
        );
    }
}