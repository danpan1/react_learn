import React, { Component } from 'react'
import CommentList from './CommentList'
export default class ArticleBody extends Component {

    state = {
        isComments: false
    }

    render() {
        const { text, comments } = this.props;
        const { isComments } = this.state;

        const commentsList = isComments ? <CommentList comments = {comments} /> : null;
        let showHide = isComments ? 'Скрыть комментарии' : 'Показать комментарии';
        if(comments.length === 0){
        	showHide = 'Нет комментариев'
        }

        return (
            <div>
                <section>{text}</section>
                <a onClick = {this.toggleComments} >{showHide}</a>	
                {commentsList}
                
            </div>
        )
    }

    toggleComments = ev => {
        this.setState({
            isComments: !this.state.isComments
        })

    }
}



