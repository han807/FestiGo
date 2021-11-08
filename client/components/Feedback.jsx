import React from "react";

const Feedback = ({ feedback, feedback2 }) => {
  if (feedback2 !== "") {
    return (
      <div className="feedback">
        <p>{feedback}</p>
        <p>{feedback2}</p>
      </div>
    )
  } else {
    return (
      <div className="feedback">
        <p>{feedback}</p>
      </div>
    );

  }
}
export default Feedback;