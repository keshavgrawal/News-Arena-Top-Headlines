import React, { Component } from 'react'
const NewsItem = (props) => {
    let { title, description, imgurl, newsUrl, author, date, source } = props;
    return (
        <div className='my-3' style={{ width: '20rem' }}>
            <div className="card">
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }}>
                    <span className="badge bg-danger">{source}</span>
                </div>
                <img src={!imgurl ? "https://img.favpng.com/2/5/0/headline-newspaper-nigeria-breaking-news-png-favpng-Cxnntxa4DDJ6FrjUwJTbW3fvd.jpg" : imgurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">-By {!author ? "Unknown" : author} updated {new Date(date).toGMTString()} mins ago</small></p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}
export default NewsItem