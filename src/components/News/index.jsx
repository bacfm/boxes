import React from 'react';
import NewsItem from './news-item';
import './style.scss';

export default class NewsPage extends React.Component {
    render(){
        return (
            <section className="news-section">
                <div className="news-wrapper">
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                    <div className="more-news">
                        <h4>Еще новости</h4>
                        <button></button>
                    </div>
                </div>
            </section>
        );
    }
}