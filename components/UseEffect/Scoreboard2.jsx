import React from "react";
import Scoreboard1 from "./Scoreboard1";

function Scoreboard2() {
  const [dis, d] = React.useState(true);
  return (
    <div>
      {dis ? <Scoreboard1/> : <></>}
      <button onClick={() => d(!dis)}>Display</button>
    </div>
  );
}

export default  Scoreboard2 