import React, { useEffect, useState } from "react";
import { Article } from "../models/articles.model";
import ArticleCard from "./ArticleCard";

function ArticlesGrid() {
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    fetch('api/articles')
      .then(response => response.json())
      .then(articles => setArticles(articles))
  }, [])

  return(
    <section className="ArticlesGrid">
      {
        articles.map((a: Article) => <ArticleCard article={a}/>)
      }
    </section>
  )
}

export default ArticlesGrid;