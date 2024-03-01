import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";

function Timer() {
  return (
    <div className="App">
      <CountdownTimercard>
        <CountdownTimercardsmall>
          <div style={{ width: 248, height: 248 }}>
            <CircularProgressbar
              value={60}
              strokeWidth={4}
              styles={{
                path: { stroke: "#F87070" }, // Change the color of the progress path
                trail: { stroke: "#161932" }, // Change the color of the trail path
              }}
            />
          </div>
        </CountdownTimercardsmall>
      </CountdownTimercard>
    </div>
  );
}

export default Timer;

const CountdownTimercard = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(320deg, #2e325a 0%, #0e112a 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 50px 50px 100px 0 #121530, -50px -50px 100px 0 #272c5a;
`;

const CountdownTimercardsmall = styled.div`
  width: 267.8px;
  height: 267.8px;
  background-color: #161932;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
