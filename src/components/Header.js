import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let title = this.props.title;

    return(

      <header>
        <h1>{title}</h1>
        <p>Welcome to jakim React</p>
      </header>
    );
  }
}

export default Header;