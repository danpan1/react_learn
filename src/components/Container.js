import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Chart from './Chart'
import NewArticleForm from './NewArticleForm'
import Filter from './Filter'
import Range from "./DayPicker"

class Container extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    render() {
        const { articles } = this.props
        return (
            <div>
                <Filter articles = {articles} />
                <ArticleList articles = {articles} />
                <Range></Range>
                <Chart />
                <NewArticleForm />
            </div>
        )
    }
}

export default Container