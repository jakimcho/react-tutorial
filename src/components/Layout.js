import React from 'react';
import Header from './Header';
import Body from './Body';
import MainMenu from './MainMenu';

class Layout extends React.Component {
  constructor(){
    super();

    this.state = {
      title: "Welcome",
    }

    this.changeTitle = (title) => {
      this.setState({title});
    }
  }
  
  render() {

    return(
      <div>
        <Header title={this.state.title} />
        <MainMenu />
        <Body changeTitle={this.changeTitle} />
      </div>
    );
  }
}

export default Layout;