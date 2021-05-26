import "./styles.css";
import { useState } from "react";

export default function App() {
  var [answer, setAnswer] = useState("");

  function onChangeHandler(event) {
    var userAnswer = event.target.value;
    var count = 0;

    if(userAnswer%4 == 0){
      if(userAnswer%100 == 0){
        if(userAnswer%400 == 0){
          answer = "Yupp. You were born in a leap year.";
          setAnswer(answer);
        }
        else{
          answer = "Nope! Not a leap year.";
          setAnswer(answer);
      }
      }
      else{
        answer = "Yupp. You were born in a leap year.";
        setAnswer(answer);
      }
    }
    else{
      answer ="Nope! Not a leap year.";
      setAnswer(answer);
    }

  }

  return (
    <div className="App">
      <h1>LEAP YEAR</h1>
      <h3>Let's see if your year of birth is a leap year!</h3>
      <div style={{ marginBottom: "0.8rem" }}>Enter your year of birth</div>
      <input
        className="userInput"
        onChange={() => onChangeHandler(event)}
      ></input>
      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{answer}</div>
      <footer>
        <h2>
          Do you want to check if your birth date is a prime number? If yes, <a href="https://miscellaneous2.netlify.app/"> click
          here</a>.
        </h2>
      </footer>
    </div>
  );
}
