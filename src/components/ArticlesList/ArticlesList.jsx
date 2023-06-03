import s from "./articles-list.module.scss"

import { articles } from "../../db/aricles"

import Article from "./Article"

const ArticlesList = () => {
    const articlesList = articles.map((article) => {
        return <Article article={article}/>
    })
    return(
        <ul>
           {articlesList}
        </ul>
    )
}

export default ArticlesList