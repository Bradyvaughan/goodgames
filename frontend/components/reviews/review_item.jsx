import React from 'react';


class ReviewItem extends React.Component {


  render() {

    return(
      <div className="review">
        <section className="review-header">
          <p className="r-title">{this.props.review.title}</p>
          <p className="u-name">{this.props.review.username}</p>
        </section>
        <section className="review-body">
          <p>{this.props.review.body}</p>
        </section>
      </div>
    );
  }
}

export default ReviewItem;
