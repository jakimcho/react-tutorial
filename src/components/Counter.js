import React from 'react';
import PropTypes from 'prop-types';
 
/**
 * A counter button: tap the button to increase the count.
 */
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      data: [
        {
         "id":1,
         "name":"Foo",
         "age":"20"
        },

       {
         "id":2,
         "name":"Bar",
         "age":"30"
       },

       {
         "id":3,
         "name":"Baz",
         "age":"40"
       }],

     btnName: 1,
   };

    this.handleBtnClick = (e) => {
      this.setState({ btnName: this.state.btnName + e.target.name });
    }
  }
 
  render() {
    return (
      <div className="my-component">
        <h3 id="my-name">Name: { this.props.name }</h3>
        <button
          onClick = {() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count: {this.state.count}
        </button>

        <button name="jakim-button" onClick={this.handleBtnClick}>
          Button: { this.state.btnName }
        </button>
  
        <table>
           <tbody>
              {this.state.data.map((person, i) => <TableRow data = {person} className="jakim" />)}
           </tbody>
        </table>
      </div>
    );
  }
}

Counter.propTypes = {
  name: PropTypes.string
};

class TableRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
       <tr className={ this.props.className }>
          <td>{this.props.data.id}</td>
          <td>{this.props.data.name}</td>
          <td>{this.props.data.age}</td>
       </tr>
    );
 }
}

TableRow.propTypes = {
  data: PropTypes.object
};

export default Counter;