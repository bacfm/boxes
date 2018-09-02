import React from 'react';
import img from './img/img.png';


export default function NewsItem(){
    return (
        <div className="news-list-item">
            <img src={img} alt="img"/>
            <span className="news-date">05.05.2018</span>
            <div className="news-list-item-info">
                <h1>Заголовок новости</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quasi similique temporibus, recusandae quibusdam doloribus illum mollitia nihil doloremque molestiae.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ratione maxime recusandae dolorum ex inventore, fugit optio nulla ipsa consectetur, aut nobis enim corporis quisquam delectus hic non voluptatum quaerat!</p>
            </div>
        </div>
    );
}