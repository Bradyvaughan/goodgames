import React from 'react';
import ReviewItem from './review_item';

class ReviewIndex extends React.Component {


  render() {
    let reviewList = Object.keys(this.props.reviews).reverse().map((key) => (
      <ReviewItem review={this.props.reviews[key]} key={`review-${key}`}/>
    ));
    return(
      <ul>
        {reviewList}
      </ul>
    );
  }
}

export default ReviewIndex;
