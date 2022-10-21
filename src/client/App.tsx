import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";

import ArticlesGrid from "./components/ArticlesGrid";
import Tags from "./components/Tags";

const App = () => {
  
  return (
    <>
      <Tags />
      <Routes>
        <Route path="/" element={<ArticlesGrid />} />
        <Route path="/tema/:slug" element={<ArticlesGrid />} />
      </Routes>
    </>
  )
}

export default App;