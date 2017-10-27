import React from 'react';
import { Route, Switch, IdexRoute } from 'react-router-dom';
import EditField from './EditField';
import StaticText from './StaticText';
import TodoList from './TodoList';

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('Hello from body ', this.props);
    
    return(
      <main>
        <Switch>
          <Route exact path='/' component={ StaticText } />
          <Route path="/todo" component={ TodoList } />
          <Route path='/edit_field' render={ (props) => (
            <EditField { ...props } 
                       changeTitle={this.props.changeTitle} />
          )} />
        </Switch>
      </main>
    );
  }
}

export default Body;
