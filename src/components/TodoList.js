import React from 'react';
import * as TodoActions from '../actions/TodoActions'
import TodoStore from '../stores/TodoStore'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
  constructor(){
    super();
    console.log('Todo items: ', TodoStore.getAllItems());

    this.state = {
      items: TodoStore.getAllItems(),
      newInputValue: '',
    };

    this.createTodo = () => {
      const title = this.state.newInputValue;
      TodoActions.createTodo(title);
      this.setState({
        newInputValue: ''
      });
    };

    this.deleteItem = (id) => TodoActions.deleteTodo(id);

    this.updateNewTodoItem = (e) => {
      this.setState(
        {
          newInputValue: e.target.value
        }
      );
    }

    this.getTodoItems = () => {

     let todos = this.state.items.map( 
        (item, id) => {
          return <TodoItem key={id} 
                           item={item}
                           deleteTodo={ this.deleteItem } />;
        }
      );

     return todos;
    };
  }


  componentWillMount() {
    TodoStore.on("change", () => {
      console.log('Items list updated: ', TodoStore.getAllItems());
      this.setState({
        items: TodoStore.getAllItems()
      });
    });
  }

  render() {

    console.log("Current Items to display: ", this.state.items);
    return(
      <section>
        <header>
          <h2>Welcome to you TODO:</h2>
        </header>
        <hr />
        <ol>
          {this.getTodoItems()}
        </ol>
        <input value={ this.state.newInputValue } 
               onChange={ this.updateNewTodoItem } />
        <button onClick={ this.createTodo }>Add</button>
      </section>
    );
  }
  
}

export default TodoList;