import express from 'express'
import path from 'path';
import fs from "fs";

import * as dotenv from 'dotenv'
dotenv.config()

import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../client/App";

import { filterAndFormaterArticles } from './utils/filterAndFormaterArticles';
import { filterAndSorterTags } from './utils/filterAndSorterTags';

const app = express()

app.set("port", process.env.PORT || 4000)
app.use(express.static(path.resolve("build/client/")))

app.get('/api/articles/:slug', (req, res) => {
  type Params = {
    slug?: string;
  }
  
  let {slug} = req.params as Params
  
  let articles = filterAndFormaterArticles(slug)

  res.json(articles)
})

app.get('/api/tags', (req, res) => {
  let mostPopularTags = filterAndSorterTags()

  res.json(mostPopularTags)
})

app.get('*', (req, res) => {
  const component = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  )

  fs.readFile(path.resolve("build/client/index.html"), "utf8", (err, data) => {
    if(err) {
      console.log("FS ERROR: ", err)
      return res.send(500).send("Internal server error");
    }

    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${component}</div>`
      )
    )
  })
})

app.listen(app.get("port"), () => {
  console.log('Server running on port: ', app.get("port"))
})