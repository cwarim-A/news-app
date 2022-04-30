import React from 'react'
import "./NewsItem.css"

const NewsItem = ({title,description,url,urlToImage}) => {
  return (
    <div className="news-container">
        <div className="img-container">
        <img className="news-img" src={urlToImage} alt='New'/>
        </div>
      <div className="card-content">
      <div className="card-link">
      <h3>
          <a href={url}>{title}</a>
      </h3>
      </div>
      <div className="card-body">
      <p>{description}</p>
      </div>
      </div>
    </div>
  )
}

export default NewsItem
