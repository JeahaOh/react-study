import React, { Component } from 'react';
import TodoListTemplate from './component/TodoListTemplate';
import Form from './component/Form';
import TodoItemList from './component/TodoItemList';
import Pallete from './component/Pallete';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class App extends Component {


  setOnStorage = () => {
    const { todos } = this.state;
    console.log('todos : ', todos);
  }

  id = 3;
  state = {
    input: '',
    todos: [
      { id: 0, text: 'hihi', checked: false },
      { id: 1, text: 'react', checked: true },
      { id: 2, text: 'whathe..', checked: false }
    ],
    color: '#343a40'
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () => {
    const { input, todos, color } = this.state;
    console.log('handle create : ', color);
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        cehcked: false,
        color
      })
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    console.log('handleToggle selected : ', selected);
    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
    this.setOnStorage();
  }

  handleSelectColor = (color) => {
    this.setState({
      color
    })
  }


  render() {
    const { input, todos, color } = this.state;
    const {
      handleChange
      , handleCreate
      , handleKeyPress
      , handleToggle
      , handleRemove
      , handleSelectColor
    } = this;

    return (
      <TodoListTemplate form={(
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
          color={color}
        />
      )}
        palette={(
          <Pallete colors={colors} selected={color} onSelect={handleSelectColor} />
        )}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
      </TodoListTemplate >
    );
  }
}

export default App;
