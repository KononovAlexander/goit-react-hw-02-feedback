import React from 'react';
// import { Section } from './Section';
// import { Statistics } from './Statistics';
import FeedbackCounter from './Feedback/FeedbackCounter';



export class App extends React.Component  {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
      } 
      LeaveFedback = (event) => {
        this.setState((prevState) => {
            const { name } = event.target;
            return {
                [name]: prevState[name] + 1,            
            }
        })
    }

  render () {
  return(<div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
        >
          {/* <Section title={'please leave feedback'}>
          <FeedbackOptions
                            options={[]} 
                            onLeaveFeedback={}
                            FeedbackCounter={this.counter} /> */}
              <FeedbackCounter  good={this.state.good}
                                bad={this.state.bad}
                                neutral={this.state.neutral}
                                LeaveFedback={this.LeaveFedback}/>
          {/* </Section> */}
          {/* <Section title={'statistics'}>
                {total === 0 ? <Notification message={'There is no feedback'}/> :
                    <Statistics
                        good={positiveGrade} 
                        neutral={neutralGrade } 
                        bad={negativGrade}
                        total={total}
                        percentage={percentage}
                            />}
          </Section> */}

      </div>)
  }
}
