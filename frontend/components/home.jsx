import React from 'react';
import LibraryIndexContainer from './libraries/library_index_container';
import LibraryFormContainer from './forms/library_form_container';

class Home extends React.Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    document.querySelector('#add-lib').classList.toggle('hidden');
    document.querySelector('#new-lib').classList.toggle('hidden');
  }

  render() {
    return(
      <div className="home" >
        {this.props.children}
      </div>
    );
  }
}


export default Home;
