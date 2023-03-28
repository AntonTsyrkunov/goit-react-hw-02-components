import { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

const feedbackNames = ['good', 'neutral', 'bad'];

class FeedbackStatistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countPositiveFeedbackPercentage = (total, good) => {
    return (total === 0 ? '0' : Math.round((good/total)*100));
}

countTotalFeedback = (state) => {
  const values = Object.values(state);
  return values.reduce((acc, value) => acc+value)
}

  checkFeedbackState = () => 
    Object.values(this.state).some((i) => i>0);
  
  //   handleClickOnGood = () => {
  //      this.setState((prev) => ({good: prev.good + 1}))
  //   }

  //   handleClickOnBad = () => {
  //     this.setState((prev) => ({bad: prev.bad + 1}))
  //   }

  handleClick = value => {
    this.setState(prev => ({ [value]: prev[value] + 1 }));
  };
  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackNames}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          {this.checkFeedbackState() 
          ? <Statistics 
          good={this.state.good} 
          neutral={this.state.neutral} 
          bad={this.state.bad} 
          total={this.countTotalFeedback(this.state)} 
          positivePercentage={this.countPositiveFeedbackPercentage(
            this.countTotalFeedback(this.state),
            this.state.good
          )}/>
          : <Notification message="There is no feedback"/>}
          
          {/* <p>Good:{this.state.good}</p>
          <p>Neutral:{this.state.neutral}</p>
          <p>Bad:{this.state.bad}</p>
          <p>Total:{countTotalFeedback(this.state)}</p>
          <p>
            Positive:
            {countPositiveFeedbackPercentage(
              countTotalFeedback(this.state),
              this.state.good
            )} */}
          {/* </p> */}
        </Section>
      </>
    );
  }
}

export default FeedbackStatistics;
