import React from 'react';
import picture from './img/picture.png';
import add_box from './img/add_box.png'
import previous from './img/previous.png';
import WarningPopUp from './warning';
import './style.scss';

export default class OrderForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            boxes: [this.boxCharacteristics],
            boxCharacteristics: {
                width: '',
                long: '',
                height: '',
                boxWeight: '',
                colorValue: '',
                pictureColorValue: '',
                pictures: [],
                specialValue: '',
                quantity: ''
            },
            currentBoxNum: 1,
            showColors: false,
            showPictColors: false,
            showSpecial: false,
            warningFields: false
        }
        this.onWidthChange = this.onWidthChange.bind(this);
        this.onLongChange = this.onLongChange.bind(this);
        this.onHeightChange = this.onHeightChange.bind(this);
        this.onColorChoose = this.onColorChoose.bind(this);
        this.onPrintColorChoose = this.onPrintColorChoose.bind(this);
        this.onQuantityChange = this.onQuantityChange.bind(this);
        this.onDownloadPicturesChange = this.onDownloadPicturesChange.bind(this);
        this.addNewBox = this.addNewBox.bind(this);
        this.onPrevBox = this.onPrevBox.bind(this);
        this.onNextBox = this.onNextBox.bind(this);
    }
    onWidthChange(ev){
        let boxCharacteristics = Object.assign({}, this.state.boxCharacteristics);
        boxCharacteristics.width = ev.target.value.replace(/[^0-9]/g, '');
        let newElem = boxCharacteristics;
        let newBoxes = [...this.state.boxes.slice(0, this.state.currentBoxNum - 1), newElem, ...this.state.boxes.slice(this.state.currentBoxNum)]
        this.setState({boxes: newBoxes, boxCharacteristics})
    }
    onLongChange(ev){
        let boxCharacteristics = Object.assign({}, this.state.boxCharacteristics);
        boxCharacteristics.long = ev.target.value.replace(/[^0-9]/g, '');
        let newElem = boxCharacteristics;
        let newBoxes = [...this.state.boxes.slice(0, this.state.currentBoxNum - 1), newElem, ...this.state.boxes.slice(this.state.currentBoxNum)]
        this.setState({boxes: newBoxes, boxCharacteristics})
    }
    onHeightChange(ev){
        let boxCharacteristics = Object.assign({}, this.state.boxCharacteristics);
        boxCharacteristics.height = ev.target.value.replace(/[^0-9]/g, '');
        let newElem = boxCharacteristics;
        let newBoxes = [...this.state.boxes.slice(0, this.state.currentBoxNum - 1), newElem, ...this.state.boxes.slice(this.state.currentBoxNum)]
        this.setState({boxes: newBoxes, boxCharacteristics})
    }
    onColorChoose(color){
        let boxCharacteristics = Object.assign({}, this.state.boxCharacteristics);
        boxCharacteristics.colorValue = color;
        let newElem = boxCharacteristics;
        let newBoxes = [...this.state.boxes.slice(0, this.state.currentBoxNum - 1), newElem, ...this.state.boxes.slice(this.state.currentBoxNum)]
        this.setState({boxes: newBoxes, boxCharacteristics})
    }
    onPrintColorChoose(color){
        let boxCharacteristics = Object.assign({}, this.state.boxCharacteristics);
        boxCharacteristics.pictureColorValue = color;
        let newElem = boxCharacteristics;
        let newBoxes = [...this.state.boxes.slice(0, this.state.currentBoxNum - 1), newElem, ...this.state.boxes.slice(this.state.currentBoxNum)]
        this.setState({boxes: newBoxes, boxCharacteristics})
    }
    onQuantityChange(ev){
        let boxCharacteristics = Object.assign({}, this.state.boxCharacteristics);
        boxCharacteristics.quantity = ev.target.value.replace(/[^0-9]/g, '');
        let newElem = boxCharacteristics;
        let newBoxes = [...this.state.boxes.slice(0, this.state.currentBoxNum - 1), newElem, ...this.state.boxes.slice(this.state.currentBoxNum)]
        this.setState({boxes: newBoxes, boxCharacteristics})
    }
    onDownloadPicturesChange(ev){
        let files = [];
        let boxCharacteristics = Object.assign({}, this.state.boxCharacteristics);
        for(let i = 0; i < ev.target.files.length; i++){
            files.push(ev.target.files[i]);
        }
        boxCharacteristics.pictures = [...this.state.boxCharacteristics.pictures, ...files];
        let newElem = boxCharacteristics;
        let newBoxes = [...this.state.boxes.slice(0, this.state.currentBoxNum - 1), newElem, ...this.state.boxes.slice(this.state.currentBoxNum)]
        this.setState({boxes: newBoxes, boxCharacteristics})
    }
    addNewBox(ev){
        ev.preventDefault();
        this.setState({boxes: [...this.state.boxes, this.state.boxCharacteristics]});
        let boxCharacteristics = Object.assign({}, this.state.boxCharacteristics);
        boxCharacteristics.width = '';
        boxCharacteristics.long = '';
        boxCharacteristics.height = '';
        boxCharacteristics.boxWeight = '';
        boxCharacteristics.colorValue = '';
        boxCharacteristics.pictureColorValue = '';
        boxCharacteristics.pictures = [];
        boxCharacteristics.specialValue = '';
        boxCharacteristics.quantity = '';
        this.setState({boxCharacteristics, currentBoxNum: this.state.currentBoxNum + 1});
    }
    onPrevBox(ev){
        ev.preventDefault();
        let prevBox = this.state.boxes[this.state.currentBoxNum - 2];
        console.log(prevBox);
        this.setState({boxCharacteristics: prevBox, currentBoxNum: this.state.currentBoxNum - 1})
    }
    onNextBox(ev){
        ev.preventDefault();
        let nextBox = this.state.boxes[this.state.currentBoxNum];
        this.setState({boxCharacteristics: nextBox, currentBoxNum: this.state.currentBoxNum + 1})
    }
    render(){
        console.log(this.state.boxes);
        const {
            width,
            long,
            height,
            boxWeight,
            colorValue,
            pictureColorValue,
            specialValue,
            quantity
        } = this.state.boxCharacteristics;
        const {currentBoxNum} = this.state;
        const colors = ["Черный", "Белый", "Красный", "Зеленый"];
        console.log(this.state);
        return (
            <section className="section-container user-form-section order-section">
                <div className="content-wrapper form-content">
                    <div className="user-form">
                        <h1>Оформить заказ</h1>
                        <span className="box-instruction">Заполните информацию о товаре</span>
                        <h3 className="box-num">Коробка №{currentBoxNum}</h3>
                        <div className="form-information order-information">
                            <div className="form-main-characteristics order-main-characteristics">
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
                            <div className="form-secondary-characteristics">
                                <div className="download-picture">
                                    <div className="pictures-list">
                                        <span>Рисунок:</span>
                                        {this.state.boxCharacteristics.pictures.map((p, index) => (<div className="photo-item" key={index}><img src={picture} alt='1' /> {p.name}</div>))}
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
                        <div className="form-controls">
                            {currentBoxNum > 1 ? <span className="previous_box" onClick={this.onPrevBox}><img src={previous} alt="prev"/> Коробка №{currentBoxNum - 1}</span> : null }
                            {this.state.boxes.length - this.state.currentBoxNum <= 0 ? <span className="add_new_box" onClick={this.addNewBox}>Добавить коробку <img src={add_box} alt="add"/></span> : null}
                            {this.state.boxes.length - this.state.currentBoxNum > 0 ? <span className="next_box" onClick={this.onNextBox}>Коробка №{currentBoxNum + 1} <img src={previous}  alt="prev"/></span> : null }
                        </div>
                        <button className="order-btn">Далее</button>
                    </div>
                </div>
                {this.state.warningFields ? <WarningPopUp onClick={() => this.setState({warningFields: false})} /> : null}
            </section>
        );
    }
}
