import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios'

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=8efbe57e354a4193afe6cf7a382b2d9b')
        setArticles(response.data.articles)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    fetchData();
  }, [])

  if(loading) {
    return <NewsListBlock>대기중 .....</NewsListBlock>
  }

  if(!articles) {
    return null
  }

  return (
    <NewsListBlock>
      {articles.map(article => 
        (<NewsItem article={article} key = {article.url} />)
        )}
    </NewsListBlock>
  );
};

export default NewsList;
