import React from 'react';


class ReviewItem extends React.Component {


  render() {

    return(
      <div>
        <ul>
          <li>{this.props.review.username}</li>
          <li>{this.props.review.title}</li>
          <li>{this.props.review.body}</li>
        </ul>
      </div>
    );
  }
}

export default ReviewItem;
