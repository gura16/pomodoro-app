import styled from "styled-components";
import React, { useState } from "react";
import Timer from "./pomodorotimer";

function Toggle() {
  const [timer, setTimer] = useState<number>(1500);
  const [defaultTimer, setDefaultTimer] = useState<number>(1500);

  return (
    <>
      <Togglecontainer>
        <Pomodorotitle>pomodoro</Pomodorotitle>
        <Togglecard>
          <Pomodoro
            onClick={() => {
              setTimer(25), setDefaultTimer(25);
            }}
            selected={timer === 25}
          >
            pomodoro
          </Pomodoro>
          <Shortbreak
            onClick={() => {
              setTimer(5), setDefaultTimer(5);
            }}
            selected={timer === 5}
          >
            short break
          </Shortbreak>
          <Longbreak
            onClick={() => {
              setTimer(10), setDefaultTimer(10);
            }}
            selected={timer === 10}
          >
            long break
          </Longbreak>
        </Togglecard>
      </Togglecontainer>
      <Timer
        selectedOption={timer}
        setSelectedOption={setTimer}
        defaultTimer={defaultTimer}
      />
    </>
  );
}

export default Toggle;

const Togglecontainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Pomodorotitle = styled.p`
  font-family: "Kumbh Sans", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: center;
  color: #d7e0ff;
`;

const Togglecard = styled.div`
  width: 327px;
  height: 63px;
  background-color: #161932;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Pomodoro = styled.div`
  font-family: "Kumbh Sans", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d7e0ff;
  width: 105.2px;
  height: 48px;
  background-color: #f87070;
  border-radius: 40px;
  cursor: pointer;
`;

const Shortbreak = styled.div`
  font-family: "Kumbh Sans", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d7e0ff;
  width: 105.2px;
  height: 48px;
  /* background-color: #f87070; */
  border-radius: 40px;
  cursor: pointer;
`;

const Longbreak = styled.div`
  font-family: "Kumbh Sans", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d7e0ff;
  width: 105.2px;
  height: 48px;
  /* background-color: #f87070; */
  border-radius: 40px;
  cursor: pointer;
`;
