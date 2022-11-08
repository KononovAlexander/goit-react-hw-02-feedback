// import styled from 'styled-components';


import FeedbackCounter from './Feedback/FeedbackCounter';



export const App = () => {
  return (

      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
        >
        <FeedbackCounter />

      </div>
  );
};
