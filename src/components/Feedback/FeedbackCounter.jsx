import React from 'react';
import { FeedbackControls } from './FeedbackControls';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { Notification } from './Notification';



class FeedbackCounter extends React.Component{
     
state = {
  good: 0,
  neutral: 0,
  bad: 0
    }   
        counter = (event) => {
            this.setState((prevState) => {
                const { name } = event.target;
                return {
                    [name]: prevState[name] + 1,            
                }
            })
        }
        
        render() {
            const total = this.state.good + this.state.neutral + this.state.bad;
            const percentage =  Math.round((100 * this.state.good) / total)
            return (
                <div>
                    <Section title={'please leave feedback'}>
                        
                        <FeedbackControls
                            
                            FeedbackCounter={this.counter} />
                    </Section>
                    <Section title={'statistics'}>
                    {total === 0 ?   <Notification message={'There is no feedback'}/> :
                    <Statistics
                        good={this.state.good } 
                        neutral={this.state.neutral } 
                        bad={this.state.bad}
                        total={total}
                        percentage={percentage}
                            />}
                    </Section>

            </div>
        )
    }
}

export default FeedbackCounter;

