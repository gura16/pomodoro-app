import styled from "styled-components";
import { useState, useEffect } from "react";
import Timer from "./pomodorotimer";

interface ToggleProps {
  pomodoro: number;
  shortbreak: number;
  longbreak: number;
  changecolor: string;
  fontapply: string;
}

function Toggle(props: ToggleProps) {
  const [timer, setTimer] = useState<number>(props.pomodoro);
  const [defaultTimer, setDefaultTimer] = useState<number>(props.pomodoro);
  const [color, setColor] = useState<number>(0);

  useEffect(() => {
    setTimer(props.shortbreak);
    setDefaultTimer(props.shortbreak);
  }, [props.shortbreak]);

  useEffect(() => {
    setTimer(props.longbreak);
    setDefaultTimer(props.longbreak);
  }, [props.longbreak]);

  useEffect(() => {
    setTimer(props.pomodoro);
    setDefaultTimer(props.pomodoro);
    setColor(0);
  }, [props.pomodoro]);

  return (
    <>
      <Togglecontainer>
        <Pomodorotitle>pomodoro</Pomodorotitle>
        <Togglecard>
          <Pomodoro
            onClick={() => {
              setTimer(props.pomodoro);
              setDefaultTimer(props.pomodoro);
              setColor(0);
            }}
            color={color === 0}
            changecolor={props.changecolor}
            fontapply={props.fontapply}
          >
            pomodoro
          </Pomodoro>
          <Shortbreak
            onClick={() => {
              setTimer(props.shortbreak);
              setDefaultTimer(props.shortbreak);
              setColor(1);
            }}
            color={color === 1}
            changecolor={props.changecolor}
            fontapply={props.fontapply}
          >
            short break
          </Shortbreak>
          <Longbreak
            onClick={() => {
              setTimer(props.longbreak);
              setDefaultTimer(props.longbreak);
              setColor(2);
            }}
            color={color === 2}
            changecolor={props.changecolor}
            fontapply={props.fontapply}
          >
            long break
          </Longbreak>
        </Togglecard>
      </Togglecontainer>
      <Timer
        selectedOption={timer}
        setSelectedOption={setTimer}
        defaultTimer={defaultTimer}
        changecolor={props.changecolor}
        fontapply={props.fontapply}
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

const Pomodoro = styled.div<{
  color: boolean;
  changecolor: string;
  fontapply: string;
}>`
  font-family: ${(props) => props.fontapply};
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.color ? "#1E213F" : "white")};
  opacity: ${(props) => (props.color ? "" : "40%")};
  width: 105.2px;
  height: 48px;
  background-color: ${(props) =>
    props.color ? props.changecolor : "transparent"};
  border-radius: 40px;
  cursor: pointer;
`;

const Shortbreak = styled.div<{
  color: boolean;
  changecolor: string;
  fontapply: string;
}>`
  font-family: ${(props) => props.fontapply};
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.color ? "#1E213F" : "white")};
  opacity: ${(props) => (props.color ? "" : "40%")};
  width: 105.2px;
  height: 48px;
  background-color: ${(props) =>
    props.color ? props.changecolor : "transparent"};
  border-radius: 40px;
  cursor: pointer;
`;

const Longbreak = styled.div<{
  color: boolean;
  changecolor: string;
  fontapply: string;
}>`
  font-family: ${(props) => props.fontapply};
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.color ? "#1E213F" : "white")};
  opacity: ${(props) => (props.color ? "" : "40%")};
  width: 105.2px;
  height: 48px;
  background-color: ${(props) =>
    props.color ? props.changecolor : "transparent"};
  border-radius: 40px;
  cursor: pointer;
`;
