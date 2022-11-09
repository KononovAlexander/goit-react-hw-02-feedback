
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { Notification } from './Notification';

const FeedbackCounter = ({good,bad,neutral,LeaveFedback}) => {
      
        const total = good + neutral + bad;
        const percentage =  Math.round((100 * good) / total)
        
        return (
                <div>
                    <Section title={'please leave feedback'}>
                        
                        <FeedbackOptions
                            options={['good','neutral','bad']} 
                            onLeaveFeedback={LeaveFedback} />
                    </Section>
                    <Section title={'statistics'}>
                    {total === 0 ?   <Notification message={'There is no feedback'}/> :
                    <Statistics
                        good={good} 
                        neutral={neutral} 
                        bad={bad}
                        total={total}
                        percentage={percentage}
                            />}
                    </Section>

            </div>
    )
}

export default FeedbackCounter;

