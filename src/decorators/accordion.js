//decorator === HOC Higher order component
import React from 'react'

export default function Accordion(Component) {
    return class WrappedComponent extends React.Component {
        state = {
        	openArticleId: null
        }

        render() {
            return <Component {...this.props} {...this.state} 
            accordion = {this.accordion}/>
        }

	    accordion = id => ev => {
	        console.log(id)
	        //if (ev) ev.preventDefault()
	        console.log(this.state.openArticleId)
	        if (id === this.state.openArticleId){
	            id = null;
	        }

	        this.setState({
	            openArticleId: id
	        })
    	}

    }
}