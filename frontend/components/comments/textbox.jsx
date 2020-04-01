import React from 'react';


class Textbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = { parent_id: props.parent.id,
                   episode_id: props.episode.id,
                   user_id: props.currentUser.id,
                   ...props.review
                  };

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
        if (this.props.formType === 'edit') this.props.closeTextbox();
        if (this.props.formType === 'new') this.setState({ content: '', spoiler: false });
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
          <div className="textbox-controls">
            <label className="spoiler-check">
              Spoiler?
              <input
                onChange={this.handleCheckbox}
                checked={this.state.spoiler}
                type="checkbox" />
            </label>
            <button className="textbox-submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}


export default Textbox;
