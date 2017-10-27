import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
  constructor() {
    super();

    this.items = [
      { id: 123, title: "Jakim", completed: false},
      { id: 124, title: "Tom", completed: false},
      { id: 125, title: "Jakim", completed: false},
      { id: 126, title: "Ani", completed: false},
      { id: 127, title: "Mincho", completed: false},
      { id: 128, title: "Lila", completed: false},
    ];

  }

  createTodo(title) {
    let id = Date.now();

    this.items.push({
      id,
      title,
      completed: false
    });

    this.emit("change");
  }

  deleteTodo(id) {
    console.log("Deleting item with id: ", id);
    for (let index = 0; index < this.items.length; index++){
      console.log("Gettin item  ", this.items[index], " index ", index);
      
      if (this.items[index].id === id) {
        console.log("Found the correct item to delete: ", this.items[index],
                    "Its index is: ", index);
        this.items.splice(index, 1);
        break;
      }
    }

    console.log('After Splicing: ', this.items)
   
    this.emit("change");
  }

  getAllItems() {
    console.log('getAllItems ', this.items)
    return this.items;
  }

  handleActions(action) {
    console.log('TodoStore catched an action: ', action);

    switch(action.type) {
      case 'ADD_ITEM': {
        this.createTodo(action.title); break;
      }
      case 'DELETE_ITEM': {
        console.log("Dispatching action DELETE_ITEM");
        this.deleteTodo(action.id); break;
      }
    }

  }

}

const todoStore = new TodoStore();

dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;

export default todoStore;