import Axios  from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import NewsItem from './NewsItem';


const NewsList = () => {
    const [articles,setArticles] = useState([]);

    useEffect(()=> {
        const getArticles = async () => {
            const res = await Axios.get ("https://newsapi.org/v2/top-headlines?country=us&apiKey=29ff37d420f24e3bab2e262c215873c6");

            setArticles(res.data.articles);

            // console.log(res);
        };
            getArticles();
    })
  return (
    <div>
      {articles.map(({title,description,url,urlToImage}) =>(
          <NewsItem title={title} description={description} url={url} urlToImage={urlToImage}/>
     ) )}
    </div>
  )
}

export default NewsList;
