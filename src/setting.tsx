import styled from "styled-components";
import cancel from "../public/cancel.svg";
import Path from "../public/Path.svg";
import Pomodoro from "./pomodoro";
import setting_img from "../public/setting_img.svg";
import { useState } from "react";

function Setting() {
  const [settingButton, setSettingButton] = useState<boolean>(false);
  const [pomodoro, SetPomodoro] = useState<number>(25);
  const [pomodoroApply, setPomodoroApply] = useState<number>(pomodoro);
  const [shortbreak, setshortBreak] = useState<number>(5);
  const [shortApply, setshortApply] = useState<number>(shortbreak);
  const [longbreak, setlongBreak] = useState<number>(10);
  const [longApply, setlongApply] = useState<number>(longbreak);
  const [changeColor, setchangeColor] = useState<string>("#F87070");
  const [applychangeColor, setapplychangeColor] = useState<string>(changeColor);

  const settingsButton = () => {
    setPomodoroApply(pomodoro);
    setshortApply(shortbreak);
    setlongApply(longbreak);
    setapplychangeColor(changeColor);
    setSettingButton(false);
  };

  return (
    <div>
      {settingButton ? (
        <Maincontainer>
          <Titlecard>
            <Title>Settings</Title>
            <Cancelimg
              onClick={() => {
                setchangeColor(applychangeColor), setSettingButton(false);
              }}
              src={cancel}
            />
          </Titlecard>
          <Hr />
          <TimechangerContainer>
            <Timetitle>TIME (MINUTES)</Timetitle>
            <TimechangerCard>
              <Card>
                <Titletext>pomodoro</Titletext>
                <PomodoroInput
                  type="number"
                  min="0"
                  value={pomodoro}
                  onChange={(event) =>
                    SetPomodoro(parseInt(event.target.value))
                  }
                ></PomodoroInput>
              </Card>
              <Card>
                <Titletext>short break</Titletext>
                <Shortinput
                  type="number"
                  min="0"
                  value={shortbreak}
                  onChange={(event) =>
                    setshortBreak(parseInt(event.target.value))
                  }
                ></Shortinput>
              </Card>
              <Card>
                <Titletext>long break</Titletext>
                <Longinput
                  type="number"
                  min="0"
                  value={longbreak}
                  onChange={(event) =>
                    setlongBreak(parseInt(event.target.value))
                  }
                ></Longinput>
              </Card>
              <Hr />
            </TimechangerCard>
            <FontchangerContainer>
              <Fonttitle>FONT</Fonttitle>
              <Fontcard>
                <Font>Aa</Font>
                <Font>Aa</Font>
                <Font>Aa</Font>
              </Fontcard>
              <Hr />
            </FontchangerContainer>
            <Colorchangercontainer>
              <Color>COLOR</Color>
              <Circlecard>
                <Circle1 onClick={() => setchangeColor("#F87070")}>
                  {changeColor === "#F87070" ? <img src={Path} /> : null}
                </Circle1>
                <Circle2 onClick={() => setchangeColor("#70F3F8")}>
                  {changeColor === "#70F3F8" ? <img src={Path} /> : null}
                </Circle2>
                <Circle3 onClick={() => setchangeColor("#D881F8")}>
                  {changeColor === "#D881F8" ? <img src={Path} /> : null}
                </Circle3>
              </Circlecard>
            </Colorchangercontainer>
          </TimechangerContainer>
          <Apply onClick={settingsButton}>Apply</Apply>
        </Maincontainer>
      ) : null}

      <Pomodoro
        pomodoro={pomodoroApply * 60}
        shortbreak={shortApply * 60}
        longbreak={longApply * 60}
        changecolor={applychangeColor}
      />
      <Imgsetting
        onClick={() => setSettingButton(!settingButton)}
        src={setting_img}
      />
    </div>
  );
}

export default Setting;

const Maincontainer = styled.div`
  width: 327px;
  height: 549px;
  background-color: white;
  border-radius: 20px;
  bottom: 30px;
  position: absolute;
  z-index: 1;
  /* position: relative; */
`;

const Titlecard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
`;

const Title = styled.p`
  font-family: "Kumbh Sans", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
`;

const Cancelimg = styled.img``;

const Hr = styled.p`
  background-color: #e3e1e1;
  width: 100%;
  height: 1px;
  margin-top: 10px;
`;

const TimechangerContainer = styled.div``;

const Timetitle = styled.p`
  font-family: "Kumbh Sans", sans-serif;
  font-size: 11px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 4.230769157409668px;
  text-align: center;
  margin-top: 15px;
`;

const TimechangerCard = styled.div`
  padding: 0 20px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Titletext = styled.p`
  font-family: "Kumbh Sans", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 40%;
`;

const PomodoroInput = styled.input`
  width: 140px;
  height: 40px;
  background-color: #eff1fa;
  border: none;
  border-radius: 10px;
  padding: 5px 15px;
  font-family: "Kumbh Sans", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
`;

const Shortinput = styled.input`
  width: 140px;
  height: 40px;
  background-color: #eff1fa;
  border: none;
  border-radius: 10px;
  padding: 5px 15px;
  font-family: "Kumbh Sans", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
`;

const Longinput = styled.input`
  width: 140px;
  height: 40px;
  background-color: #eff1fa;
  border: none;
  border-radius: 10px;
  padding: 5px 15px;
  font-family: "Kumbh Sans", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
`;

const FontchangerContainer = styled.div`
  padding: 0 20px;
`;

const Fonttitle = styled.p`
  font-family: "Kumbh Sans", sans-serif;
  font-size: 11px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 4.230769157409668px;
  text-align: center;
  color: #161932;
  margin-top: 20px;
`;

const Fontcard = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
`;
const Font = styled.div`
  width: 40px;
  height: 40px;
  background-color: #eff1fa;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Kumbh Sans", sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 10px;
`;

const Colorchangercontainer = styled.div``;

const Color = styled.p`
  font-family: "Kumbh Sans", sans-serif;
  font-size: 11px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 4.230769157409668px;
  text-align: center;
  margin-top: 15px;
`;

const Circlecard = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
`;

const Circle1 = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f87070;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Circle2 = styled.div`
  width: 40px;
  height: 40px;
  background-color: #70f3f8;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Circle3 = styled.div`
  width: 40px;
  height: 40px;
  background-color: #d881f8;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Apply = styled.div`
  width: 140px;
  height: 53px;
  background-color: #f87070;
  border-radius: 40px;
  position: absolute;
  bottom: -25px;
  right: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
`;

const Imgsetting = styled.img`
  margin-top: 30px;
  margin-bottom: 20px;
  cursor: pointer;
`;
