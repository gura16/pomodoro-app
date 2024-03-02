import styled from "styled-components";
import React, { useState } from "react";

function Toggle() {
  return (
    <>
      <Togglecontainer>
        <Pomodorotitle>pomodoro</Pomodorotitle>
        <Togglecard>
          <Pomodoro>pomodoro</Pomodoro>
          <Shortbreak>short break</Shortbreak>
          <Longbreak>long break</Longbreak>
        </Togglecard>
      </Togglecontainer>
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
