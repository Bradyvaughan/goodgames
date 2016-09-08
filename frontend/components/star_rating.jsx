import React from 'react';


class StarRating extends React.Component {

  constructor(props) {
    super(props);
    this.state = { rating: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (num) {
    return(
      () => {
        this.props.submitRating(this.props.userId, this.props.gameId, num);
      }
    );
  }

  componentWillReceiveProps() {
    this.setState({rating: this.props.rating});
  }


  render() {
    [1,2,3,4,5].forEach((num) => {
      if (num <= this.props.rating) {
        $(`#${num}`).addClass('gold');
      } else {
        $(`#${num}`).removeClass('gold');
      }
    });

    return(
      <div className="star-list">
        <span id="1" onClick={this.handleClick(1)}>★</span>
        <span id="2" onClick={this.handleClick(2)}>★</span>
        <span id="3" onClick={this.handleClick(3)}>★</span>
        <span id="4" onClick={this.handleClick(4)}>★</span>
        <span id="5" onClick={this.handleClick(5)}>★</span>
      </div>
    );
  }
}

export default StarRating;
