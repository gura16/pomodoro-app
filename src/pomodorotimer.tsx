import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";
import { useEffect, useState } from "react";

function Timer({ selectedOption, setSelectedOption }) {
  useEffect(() => {
    // console.log("Selected option:", selectedOption);
  }, [selectedOption]);

  const totalTime = selectedOption;
  const [progress, setProgress] = useState<number>(100);
  const [timer, setTimer] = useState<number>(totalTime);

  useEffect(() => {
    console.log(totalTime);
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        const newTimer = prevTimer - 1;

        const remainingTimeRatio = newTimer / totalTime;
        const calculatedProgress = remainingTimeRatio * 100;

        setProgress(calculatedProgress);

        if (newTimer === 0) {
          clearInterval(interval);
        }

        return newTimer;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [totalTime]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div>
      <CountdownTimercard>
        <CountdownTimercardsmall>
          <div style={{ width: 248, height: 248 }}>
            <CircularProgressbar
              text={`${formatTime(timer)}`}
              value={progress}
              strokeWidth={4}
              styles={{
                path: { stroke: "#F87070" },
                trail: { stroke: "#161932" },
                text: {
                  fontSize: "35px",
                  fontWeight: 700,
                  lineHeight: "99px",
                  letterSpacing: "-2px",
                  textAlign: "center",
                  width: "147px",
                  height: "80px",
                  color: "ffffff",
                },
              }}
            />
            <Pause>PAUSE</Pause>
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
  margin: auto;
  margin-top: 30px;
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
  position: relative;
`;

const Pause = styled.p`
  position: absolute;
  font-family: "Kumbh Sans", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 13.125px;
  text-align: left;
  color: #d7e0ff;
  bottom: 60px;
  right: 70px;
  cursor: pointer;
`;
