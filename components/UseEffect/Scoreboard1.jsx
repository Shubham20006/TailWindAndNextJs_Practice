import React from "react";

export default function Scoreboard1() {
  const [score, setScore] = React.useState(0);
  // whenever depn array is empty - it executes only during mouting phase
  // for unmounting return a call back in call back of useeffect
  React.useEffect(() => {
    console.log("contact the server");
    return () => {
      console.log("disconnect server");
    }; // componentWillUnmount()
  }, []); // componentDidMount()

  React.useEffect(() => {
    if (score > 10) {
      console.log("congo");
    }
  }, [score]); // componentDidUpdate()

  return (
    <div>
      score is - {score} <br />
      <button onClick={() => setScore((p) => p + 1)}>Change score</button>
    </div>
  );
}