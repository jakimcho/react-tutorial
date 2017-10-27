import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    console.log('Item Created ', this.props.item, 
                " key ", this.props.key,
                "deleteTodo: ", this.props.deleteTodo);
    
    this.state = {
      item: this.props.item,
      key:  this.props.item.id,
    };

    this.deleteCurrentItem = () => {
      console.log('Deleting item: ', this.state.item);
      const itemId = this.state.item.id;
      this.props.deleteTodo(itemId);
    }

  }
  
  render() {
    const item = this.state.item;
    const key  = this.state.key;

    return (
      <li {...key}>
        <span>
          <i>{ item.id } - </i>
          { item.title } 
        </span>
        &nbsp;&nbsp;&nbsp;
        <button onClick={ this.deleteCurrentItem }>Delete</button>
      </li>
    );
  }
}

TodoItem.propTypes = {
  item: PropTypes.object,
  key:  PropTypes.number,
  deleteTodo: PropTypes.func,
};

export default TodoItem;