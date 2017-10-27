import dispatcher from '../dispatcher';

export function createTodo(title) {
  console.log("Actions: fire createTodo with tile: ", title);
  dispatcher.dispatch(
  {
    type: 'ADD_ITEM',
    title
  });
}

export function deleteTodo(id) {
  console.log("Actions: fire deleteTodo with id: ", id);
  dispatcher.dispatch(
  {
    type: 'DELETE_ITEM',
    id
  });

}