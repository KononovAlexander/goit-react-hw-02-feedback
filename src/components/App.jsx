import React from 'react';
import { Notification } from './Feedback/Notification';
import { Section } from './Feedback/Section';
import { Statistics } from './Feedback/Statistics';
import { FeedbackOptions } from './Feedback/FeedbackOptions';



export class App extends React.Component  {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
      } 
    good = this.state.good
    neutral = this.state.neutral
    bad = this.state.bad  

    total = this.good + this.neutral + this.bad
    percentage =  Math.round((100 * this.good) / this.total)

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
          <div>
           

              <Section title={'please leave feedback'}>
                        
                        <FeedbackOptions
                            options={Object.keys(this.state)} 
                            onLeaveFeedback={this.LeaveFedback} />
                        </Section>
                        <Section title={'statistics'}>
                        {this.total === 0 ?   <Notification message={'There is no feedback'}/> :
                        <Statistics
                            good={this.good} 
                            neutral={this.neutral} 
                            bad={this.bad}
                            total={this.total}
                            percentage={this.percentage}
                        />}
              </Section>
              </div>

                                
      </div>)
  }
}
