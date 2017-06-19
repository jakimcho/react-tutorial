import React from 'react';
import './Display.css';

class Display extends React.Component {
  render() {
    return (
      <div className="component-display">
      <h2>Hello Display</h2>
        <div>
          {this.props.value}
        </div>
      </div>
    );
  }
}

Display.propTypes = {
  value: React.PropTypes.string,
};

export default Display;