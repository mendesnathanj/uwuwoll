import React from 'react';


class Textbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = { parent_id: props.parent.id,
                   episode_id: props.episode.id,
                   user_id: props.currentUser.id,
                   ...props.review
                  };

    console.log(props);
    this.handleTextarea = this.handleTextarea.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextarea({ target }) {
    this.setState({ content: target.value });
  }

  handleCheckbox({ target }) {
    this.setState({ spoiler: target.checked });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.content.trim().length === 0) {
      alert('Please write a comment before submitting!');
      return;
    }

    this.props.action(this.state)
      .then(() => {
        this.props.closeTextbox();
        // if (this.props.toggleEdit !== undefined)
        //   this.props.toggleEdit();
        console.log('Success!')
      });
  }

  render() {
    return (
      <div className="textbox-container">
        <form onSubmit={this.handleSubmit}>
          <textarea
            className="new-comment-textarea"
            value={this.state.content}
            onChange={this.handleTextarea}
            placeholder="Add to the conversation">
          </textarea>
          <label>
          Spoiler?
          <input
            onChange={this.handleCheckbox}
            type="checkbox" />
          </label>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}


export default Textbox;
