import express from 'express'
import path from 'path';
import fs from "fs";

import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../client/App";

import articles from './articles';

const app = express()

app.set("port", process.env.PORT || 4000)
app.use(express.static(path.resolve("build/client/")))
console.log(path.resolve("build/client/"))

app.get('/', (req, res) => {
  const component = ReactDOMServer.renderToString(React.createElement(App))

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

app.get('/api/articles', (req, res) => {
  res.json(articles)
})

app.listen(app.get("port"), () => {
  console.log('Server running on port: ', app.get("port"))
})