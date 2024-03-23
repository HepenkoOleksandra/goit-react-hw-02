// import { useEffect } from "react";
import css from "./Options.module.css"

const Options = ({updateFeedback, total, handleResetFeedback}) => {
  
  
  return (
    <div className={css.buttonContainer}>
      <button className={css.button} onClick={() => updateFeedback("good")}>Good</button>
      <button className={css.buttonNeutral} onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button className={css.buttonBad} onClick={() => updateFeedback("bad")}>Bad</button>
      {(total > 0) && (<button className={css.buttonReset} onClick={handleResetFeedback}>Reset</button>)}
      
    </div>
  )
}

export default Options