// stateless functional component

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: ['Thing 1', 'Thing 2', 'Thing 3']
    };  
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
  
      if(options) {
        this.setState(() => ({ options: options }))
        console.log('Fetching data');
      }
    } catch(e) {
      // Do nothing at all
    }

  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('Saving data');
    }
  }

  componentWillUnmount() {
    console.log('O componente foi destruido!');
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return option !== optionToRemove;
      })
    }))
  }

  handlePick() {
    let options = this.state.options;
    let rand = Math.floor(Math.random() * options.length);
    let option = options[rand];

    alert(option);
  }

  handleAddOption(option) {
    if(!option) {
      return "Enter a valid option!";
    }else if(this.state.options.indexOf(option) > -1) {
      return "Option already exists!";
    }

    this.setState(prevState => ({ 
      options: prevState.options.concat(option) 
    }))
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action 
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0 ? true : false}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: 'some default'
}

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>What should I do?</button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
    <button onClick={props.handleDeleteOptions}>Remove all</button>
    {props.options.length === 0  && <p>Please add an option to get started!</p>}
    {props.options.map(option => 
      <Option 
        key={option} 
        optionText={option} 
        handleDeleteOption={props.handleDeleteOption}
        />
      )}
  </div>
  )
}

const Option = (props) => {
  return (
    <p>
    {props.optionText}
    <button 
    onClick={e => {props.handleDeleteOption(props.optionText)
    }}
    >
      Remove
    </button>
    </p>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({error}));

    if(!error) {
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}

// Stateless Component
const User = (props) => {
  return (
    <div>
      <p>User: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  )
}

ReactDOM.render(<IndecisionApp />, document.querySelector('#app'));