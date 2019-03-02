class ToggleVisibility extends React.Component {
  constructor(props) {
    super(props);
    this.title = 'Visibility',
    this.text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.limitDescription = this.limitDescription.bind(this);
    this.state = {
      visibility: false
    }
  }
  
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }

  limitDescription(text, size){
    if (text.length > size) {
      return `${text.substr(0, size)} [...]`;
    } else {
      return text;
    }
  }

  render() {
    return (
      <div className="wrap">
      <h1>{this.title}</h1>
      <button onClick={this.handleToggleVisibility}>
        {this.state.visibility ? 'Hide element' : 'Show element'}
      </button>
      <p>{this.text && this.state.visibility && this.limitDescription(this.text, 400)}</p>
    </div>
    );
  }
}

ReactDOM.render(<ToggleVisibility />, document.querySelector('#app'));
