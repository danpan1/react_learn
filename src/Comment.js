import React from 'react'

export default (props) => {
	// console.log(props);

        const { comment } = props;
        // let comment = {};
        // if(comments) {
        // 	comment = comments[0];
        // }
        return (
            <p>
                {comment.text}
            </p>
        )
    }




