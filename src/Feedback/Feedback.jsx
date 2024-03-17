

const Feedback = ({userFeedback, totalFeedback}) => {
  return (
    <ul>
      <li>Good: {userFeedback.good}</li>
      <li>Neutral: {userFeedback.neutral}</li>
      <li>Bad: {userFeedback.bad}</li>
      <li>Total: { totalFeedback}</li>
      <li>Positive:</li>
    </ul>
    
  )
}

export default Feedback