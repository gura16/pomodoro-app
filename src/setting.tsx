import styled from "styled-components";
import cancel from "../public/cancel.svg";

function Setting() {
  return (
    <div>
      <Maincontainer>
        <Titlecard>
          <Title>Settings</Title>
          <Cancelimg src={cancel} />
        </Titlecard>
        <Hr />
        <TimechangerContainer>
          <Timetitle>TIME (MINUTES)</Timetitle>
          <TimechangerCard>
            <Card>
              <Titletext>pomodoro</Titletext>
              <PomodoroInput type="number" min="0"></PomodoroInput>
            </Card>
            <Card>
              <Titletext>short break</Titletext>
              <Shortinput type="number" min="0"></Shortinput>
            </Card>
            <Card>
              <Titletext>long break</Titletext>
              <Longinput type="number" min="0"></Longinput>
            </Card>
          </TimechangerCard>
        </TimechangerContainer>
      </Maincontainer>
    </div>
  );
}

export default Setting;

const Maincontainer = styled.div`
  width: 327px;
  height: 549px;
  background-color: white;
  border-radius: 20px;
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
  width: 327px;
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
  margin-top: 20px;
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
