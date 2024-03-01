import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styled from "styled-components";

function Timer() {
  return (
    <div className="App">
      <CountdownTimercard>
        <CountdownCircleTimer
          isPlaying
          duration={50}
          size={248}
          colors={["#F87070", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
        ></CountdownCircleTimer>
      </CountdownTimercard>
    </div>
  );
}

export default Timer;

const CountdownTimercard = styled.div``;
