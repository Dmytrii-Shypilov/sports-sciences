import s from './blog-page.module.scss'

import ArticlesList from '../../components/ArticlesList/ArticlesList'
import Container from '../../components/Container/Container'


const BlogPage = () => {
    return(
        <section className={s.section}>
            <Container>
                <ArticlesList/>
            </Container>
        </section>
    )
}

export default BlogPage