import React from 'react';

class EditFIeld extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = (e) => {
      this.props.changeTitle(e.target.value);
    }
  }

  navigate(){
    this.props.history.replaceState(null, '/');
  }

  render() {
    console.log("Hello from Edit Field ", this.props);

    return(

      <section>
        <h2>Enter some text</h2>
        <input onChange={this.handleChange} />
      </section>
    );
  }
}

export default EditFIeld;
