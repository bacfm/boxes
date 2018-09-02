import React from 'react';
import picture from './img/picture.png';
import './style.scss';

export default class OrderForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            boxes: [],
            pictures: [],
            width: '',
            long: '',
            height: '',
            boxWeight: '',
            colorValue: '',
            showColors: false,
            pictureColorValue: '',
            showPictColors: false,
            specialValue: '',
            showSpecial: false,
            quantity: ''
        }
        this.onWidthChange = this.onWidthChange.bind(this);
        this.onLongChange = this.onLongChange.bind(this);
        this.onHeightChange = this.onHeightChange.bind(this);
        this.onColorChoose = this.onColorChoose.bind(this);
        this.onPrintColorChoose = this.onPrintColorChoose.bind(this);
        this.onQuantityChange = this.onQuantityChange.bind(this);
        this.onDownloadPicturesChange = this.onDownloadPicturesChange.bind(this);
    }
    onWidthChange(ev){
        this.setState({width: ev.target.value.replace(/[^0-9]/g, '')})
    }
    onLongChange(ev){
        this.setState({long: ev.target.value.replace(/[^0-9]/g, '')})
    }
    onHeightChange(ev){
        this.setState({height: ev.target.value.replace(/[^0-9]/g, '')})
    }
    onColorChoose(color){
        this.setState({colorValue: color})
    }
    onPrintColorChoose(color){
        this.setState({pictureColorValue: color})
    }
    onQuantityChange(ev){
        this.setState({quantity: ev.target.value.replace(/[^0-9]/g, '')})
    }
    onDownloadPicturesChange(ev){
        let files = [];
        for(var i = 0; i < ev.target.files.length; i++){
            files.push(ev.target.files[i]);
        }
        this.setState({pictures: [...this.state.pictures, ...files]})
    }
    render(){
console.log(this.state.pictures)
        const {
            width,
            long,
            height,
            boxWeight,
            colorValue,
            pictureColorValue,
            specialValue,
            quantity
        } = this.state;
        const colors = ["Черный", "Белый", "Красный", "Зеленый"];
        return (
            <section className="section-container user-order-section">
                <div className="content-wrapper order-content">
                    <div className="order-form">
                        <h1>Оформить заказ</h1>
                        <span className="box-instruction">Заполните информацию о товаре</span>
                        <h3 className="box-num">Коробка №1</h3>
                        <div className="order-information">
                            <div className="box-main-characteristics">
                                <div className="form-field required-field"><input placeholder="Ширина(см)" value={width} onChange={this.onWidthChange}/></div>
                                <div className="form-field required-field"><input placeholder="Длина(см)" value={long} onChange={this.onLongChange} /></div>
                                <div className="form-field required-field"><input placeholder="Высота(см)" value={height} onChange={this.onHeightChange} /></div>
                                <div className="list-wrapper required-field">
                                    {boxWeight ? boxWeight : 'Плотность картона'}
                                </div>
                                <div className="list-wrapper required-field" onClick={() => this.setState({showColors: !this.state.showColors})}>
                                    {colorValue ? colorValue : 'Цвет'}
                                    {this.state.showColors ?
                                        <ul className="list-container">
                                            {colors.map((color, idx) => <li key={idx} onClick={() => this.onColorChoose(color)}>{color}</li>)}
                                        </ul>
                                        :
                                        null
                                    }
                                </div>
                            </div>
                            <div className="box-secondary-characteristics">
                                <div className="download-picture">
                                    <div className="pictures-list">
                                        <span>Рисунок:</span>
                                        {this.state.pictures.map((p, index) => (<div className="photo-item" key={index}><img src={picture} alt='1' /> {p.name}</div>))}
                                        <div className="add-picture-btn">
                                            <input type="file" onChange={this.onDownloadPicturesChange} multiple/>
                                            <label></label>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-wrapper" onClick={() => this.setState({showPictColors: !this.state.showPictColors})}>
                                    {pictureColorValue ? pictureColorValue : 'Цвет рисунка'}
                                    {this.state.showPictColors ?
                                        <ul className="list-container">
                                            {colors.map((color, idx) => <li key={idx} onClick={() => this.onPrintColorChoose(color)}>{color}</li>)}
                                        </ul>
                                        :
                                        null
                                    }
                                </div>
                                <div className="list-wrapper" onClick={() => this.setState({showPictColors: !this.state.showPictColors})}>
                                    {specialValue ? specialValue : 'Специальные отверстия'}
                                </div>
                                <div className="form-field required-field"><input placeholder="Количество" value={quantity} onChange={this.onQuantityChange} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
