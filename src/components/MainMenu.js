import React from 'react';
import { Link } from 'react-router-dom';

class MainMenu extends React.Component {

  render() {
    let title = this.props.title;

    return(

      <nav>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/todo'}>Todo</Link></li>
          <li><Link to={'/edit_field'}>Edit</Link></li>
        </ul>
      </nav>
    );
  }
}

export default MainMenu;