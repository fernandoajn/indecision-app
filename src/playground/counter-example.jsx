class Counter extends React.Component{
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    const stringLastCount = localStorage.getItem('actualCounter');
    const lastCount = parseInt(stringLastCount, 10);

    if(!isNaN(lastCount)) {
      this.setState(() => ({ count: lastCount }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count) {
      const actualCount = this.state.count;
      localStorage.setItem('actualCounter', actualCount);
    }
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }
  
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    });
  }
  
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter count={10}/>, document.querySelector('#app'));