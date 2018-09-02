import React, {Component} from 'react';


export default class AboutCompany extends Component {
    render() {
        return (
            <section className='about-company section-container'>
                <div className='content-wrapper'>
                    <div className="company-description">
                        <h1>Завод ПакСтандарт</h1>
                        <p className='description-item'> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus atque consectetur
                            corporis debitis deleniti in quidem quod sed ut veniam!</p>
                        <p className='description-item'> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Adipisci aliquam animi, dolores
                            doloribus, ea ex fuga id, iure labore molestias omnis quas qui unde voluptates voluptatibus?
                            Pariatur quod quos ullam?</p>
                        <p className='description-item'> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Assumenda ea impedit labore nisi temporibus veritatis!</p>
                        <button className='get-order' onClick={this.props.onOrderPopupView}>ЗАКАЗАТЬ</button>
                    </div>
                </div>
            </section>
        );
    }
}