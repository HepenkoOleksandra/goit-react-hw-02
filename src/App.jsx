import Description from './Description/Description'
import Options from './Options/Options'
import Feedback from './Feedback/Feedback'
import { useEffect, useState } from 'react'
import Notification from './Notification/Notification';

const objFeedback = {
  good: 0,
  neutral: 0,
  bad: 0
};

function App() {
  const [feedback, setFeedback] = useState(() => {
    
  return JSON.parse(localStorage.getItem("feedback")) ?? objFeedback;
    // const stringifyFeedback = localStorage.getItem("feedback");
    // const parseFeedback = JSON.parse(stringifyFeedback) ?? objFeedback;
    // return parseFeedback;
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positive = Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100);
  
  const updateFeedback = (feedbackType) => {
    setFeedback({ feedback, [feedbackType]: feedback[feedbackType] + 1 });
  }
  
  useEffect(() => {
   localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const handleResetFeedback = () => {
    setFeedback(objFeedback)
  };

  return (
    <>
    <Description />
      <Options updateFeedback={updateFeedback} total={totalFeedback} handleResetFeedback={handleResetFeedback} />
      {(totalFeedback > 0) ? (<Feedback userFeedback={feedback} total={totalFeedback} positive={positive} />) : (<Notification/>)}
      
    </>
  )
}

export default App
