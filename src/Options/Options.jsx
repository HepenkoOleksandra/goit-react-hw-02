// import { useEffect } from "react";


const Options = ({updateFeedback, total, handleResetFeedback}) => {
  
  
  return (
    <div>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {(total > 0) && (<button onClick={handleResetFeedback}>Reset</button>)}
      
    </div>
  )
}

export default Options