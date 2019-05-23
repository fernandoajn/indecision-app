import React from 'react';

import Header from './Header';
import Action from './Action';
import AddOption from './AddOption';
import Options from './Options';

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
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