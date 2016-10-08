import React, { Component } from 'react'
import ArticleBody from './ArticleBody'
export default class Article extends Component {

    state = {
        isOpen: false,
        isComments: false
    }

    render() {
        const { article } = this.props
        const { isOpen } = this.state
        // const comments = article.comments || [];

        const body = isOpen ? <ArticleBody text = {article.text} comments = {article.comments || []} /> : null

        return (
            <div>
                <h3 onClick = {this.toggleOpen}>{article.title}</h3>
                {body}
            </div>
        )
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })

    }
}



