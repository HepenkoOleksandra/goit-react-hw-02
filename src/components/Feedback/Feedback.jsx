

const Feedback = ({userFeedback, total, positive}) => {
  return (
    <ul>
      <li>Good: {userFeedback.good}</li>
      <li>Neutral: {userFeedback.neutral}</li>
      <li>Bad: {userFeedback.bad}</li>
      <li>Total: { total}</li>
      <li>Positive: { positive}%</li>
    </ul>
    
  )
}

export default Feedback