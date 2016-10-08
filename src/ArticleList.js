import React, { Component,PropTypes } from 'react'
import Article from './Article'
import Accordion from './decorators/accordion'
import Chart from './Chart'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        accordion: PropTypes.func.isRequired,
        openArticleId: PropTypes.string
    };

    render() {
        const { articles, accordion, openArticleId } = this.props

        const articleComponents = articles.map(article => (
            <li key={article.id} >
                <Article article = {article} isOpen = {article.id == openArticleId} openArticle = {accordion(article.id)} />
            </li>))

        return (
            <div>
                <ul>
                    {articleComponents}
                </ul>
                <Chart />
            </div>
        )
    }
}

export default Accordion(ArticleList)