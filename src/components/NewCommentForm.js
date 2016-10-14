import React, { Component, PropTypes } from 'react'

class NewCommentForm extends Component {
  static propTypes = {

  };

  state = {
    comment: ''
  }

  handleChange = ev => {
    // if (ev.target.value.length > 5) return
    this.setState({
      comment: ev.target.value
    })
  }

  handleSubmit = ev => {
    console.log(this.state.comment);
  }

  render() {
    return (
      <div>
        comment: <textarea value = {this.state.comment} onChange = {this.handleChange}/>
        <input type="submit" value='submit' onClick={this.handleSubmit}/>
      </div>
    )
  }
}

export default NewCommentForm