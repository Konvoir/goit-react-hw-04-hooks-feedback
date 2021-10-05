import { useState } from "react";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions";
import { Section } from "./components/Section/Section";
import { Statistics } from "./components/Statistics/Statistics";
import css from "./App.module.css";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (option) => {
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;
      
      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        break;
    }
  };

  const total = () => good + neutral + bad;
  const positivePercentage = () => Math.round((good / total()) * 100);
  
  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total()}
          positivePercentage={positivePercentage()}
        />
      </Section>
    </div>
  );

}


// import React, { Component } from "react";

// import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions";
// import { Section } from "./components/Section/Section";
// import { Statistics } from "./components/Statistics/Statistics";

// import css from "./App.module.css";

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = (value) => () => {
//     this.setState((prevState) => ({
//       [value]: prevState[value] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     return total ? Math.round((good / total) * 100) : 0;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();
//     const options = Object.keys(this.state);

//     return (
//       <div className={css.container}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>

//         <Section title="Statistics">
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positivePercentage={positivePercentage}
//           />
//         </Section>
//       </div>
//     );
//   };