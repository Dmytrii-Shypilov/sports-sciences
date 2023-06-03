import s from "./app.module.scss";

import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";

const BlogPage = lazy(() =>
  import("./pages/BlogPage" /*webpackChunkName: "blog_page" */)
);
const MainPage = lazy(() =>
  import("./pages/MainPage" /*webpackChunkName: "main_page"*/)
);
const ArticlePage = lazy(() =>
  import("./pages/ArticlePage" /*webpackChunkName: "article_page" */)
);
const GadgetsPage = lazy(()=> import("./pages/GadgetsPage" /*webpackChunkName: "gadgets_page" */))

function App() {
  return (
    <div className={s.app}>
      <Suspense fallback={<p>Loading...</p>}>
        <div className={s.viewFrame}>
          <div>
            <Header />
            <Routes>
              <Route path="/home" element={<MainPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/article/:id" element={<ArticlePage />} />
              <Route path="/gadgets" element={<GadgetsPage/>} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
