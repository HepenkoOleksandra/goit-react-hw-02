// import { useState } from 'react'
import Description from './Description/Description'
import Options from './Options/Options'
import Feedback from './Feedback/Feedback'
import { useState } from 'react'

function App() {
  const [feedback, setFeedback] = useState({
     good: 0,
    neutral: 0,
    bad: 0
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  
  const updateFeedback = (feedbackType) => {
    setFeedback({...feedback, [feedbackType]: feedback[feedbackType] + 1});
  console.log(feedbackType);
}
  
  return (
    <>
    <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback userFeedback={feedback} totalFeedback={ totalFeedback} />
    </>
  )
}

export default App
