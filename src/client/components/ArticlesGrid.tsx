import React, { useEffect, useState } from "react";
import { Article } from "../models/articles.model";
import ArticleCard from "./ArticleCard";

import { useParams } from 'react-router-dom';

function ArticlesGrid() {
  const [articles, setArticles] = useState<Article[]>([])
  let { slug = 'all'} = useParams();
  // console.log(slug)

  useEffect(() => {
    fetch('/api/articles/' + slug)
      .then(response => response.json())
      .then(articles => setArticles(articles))
  }, [])

  return(
    <section className="ArticlesGrid">
      {
        articles.map((a: Article) => <ArticleCard key={a._id} article={a}/>)
      }
    </section>
  )
}

export default ArticlesGrid;