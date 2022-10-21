import React from "react";
import { Article } from "../models/articles.model";

type ArticleCardProps = {article: Article};

function ArticleCard({article}: ArticleCardProps) {

  let {
    display_date: date,
    headlines: {
      basic: title
    },
    promo_items: {
      basic: {
        subtitle, 
        url: image
      } = {
        subtitle: "",
        url: "https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg"
      }
    } = {}
  } = article

  return (
    <div className="ArticleCard">
      <div className="imgContainer">
        <img src={image} alt={title} />
      </div>
      <h3>
        <b>{subtitle}: </b>
        {title}
      </h3>
      <h4>{date}</h4>
    </div>
  );
}

export default ArticleCard;