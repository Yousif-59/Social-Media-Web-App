import React, { useState } from "react";
import './questionsInfo.css';

function QAndA() {
  const [showAnswer, setShowAnswer] = useState([false, false, false]);

  function handleAnswerClick(index) {
    const updatedState = [...showAnswer];
    updatedState[index] = true;
    setShowAnswer(updatedState);
  }

  function handleMouseOut(index) {
    const updatedState = [...showAnswer];
    updatedState[index] = false;
    setShowAnswer(updatedState);
  }

  return (
    <div class='questionsInfo'>
      <h2 className='questionsInfoTitle'>Questions</h2>
      <div class='q-and-a-container'>
        <div className="q-and-a">
          <div
            className="question"
            onClick={() => handleAnswerClick(0)}
          >
            What is the purpose of Borgs-Social?
          </div>
          {showAnswer[0] && (
            <div className="answer">
              Borgs-Social is an experimental way to connect students together in a fun, modern way whilst teaching CS majors how to work together as a software engineering team.
            </div> 
          )}
        </div>
      </div>
  
      <br />
      <div class='q-and-a-container'>
        <div className="q-and-a">
          <div
            className="question2"
            onClick={() => handleAnswerClick(1)}
          >
            How long did it take to create Borgs-Social?
          </div>
          {showAnswer[1] && (
            <div className="answer2">
              We worked on Borgs-Social over the course of two 2-week long sprints + one 1-week long sprint.
            </div> 
          )}
        </div>
      </div>

      <br />
      <div class='q-and-a-container3'>
        <div className="q-and-a">
          <div
            className="question3"
            onClick={() => handleAnswerClick(2)}
          >
            Are there any plans to expand Borgs-Social's functionality?
          </div>
          {showAnswer[2] && (
            <div className="answer3">
              Yes! This project was an excellent learning tool and continuing to advance it's capabilities is invaluable experience.
            </div> 
          )}
        </div>
      </div>
  
      <br />



    </div>
  );
  
}

export default QAndA;
