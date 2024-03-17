import Description from './Description/Description'
import Options from './Options/Options'
import Feedback from './Feedback/Feedback'
import { useEffect, useState } from 'react'
import Notification from './Notification/Notification';

function App() {
  const [feedback, setFeedback] = useState({
     good: 0,
    neutral: 0,
    bad: 0
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positive = Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100);
  
  const updateFeedback = (feedbackType) => {
    setFeedback({...feedback, [feedbackType]: feedback[feedbackType] + 1});
  console.log(feedbackType);
  }
  
  useEffect(() => { 
    console.log('Hello');
  }, [totalFeedback]);

  
  return (
    <>
    <Description />
      <Options updateFeedback={updateFeedback} total={ totalFeedback}/>
      {(totalFeedback > 0) ? (<Feedback userFeedback={feedback} total={totalFeedback} positive={positive} />) : (<Notification/>)}
      
    </>
  )
}

export default App
