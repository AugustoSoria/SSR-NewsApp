import React from "react";
import { Route, Routes } from "react-router-dom";

import ArticlesGrid from "./components/ArticlesGrid";
import NavBar from "./components/NavBar";
import Tags from "./components/Tags";

const App = () => {
  const window = global.window
  
  return (typeof window !== 'undefined') ? (
    <>
      <NavBar />
      <main className="maxWidth1340">
        <Tags />
        <Routes>
          <Route path="/" element={<ArticlesGrid />} />
          <Route path="/tema/:slug" element={<ArticlesGrid />} />
        </Routes>
      </main>
    </>
  ) : null
}

export default App;