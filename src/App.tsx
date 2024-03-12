import { createGlobalStyle } from "styled-components";
import PomodoroTimer from "./pomodorotimer";
import Pomodoro from "./pomodoro";
import Shortbreaktimer from "./shortbreaktimer";
import Longbreaktimer from "./longbreaktimer";
import Setting from "./setting";

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyles />
      {/* <Pomodoro /> */}
      {/* <PomodoroTimer /> */}
      <Setting />
    </div>
  );
};

export default App;
const GlobalStyles = createGlobalStyle` 
  @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&display=swap');


body{
  background-color:#1E213F;
  display:flex;
  justify-content:center;
  text-align: center;
  margin-top: 40px;  
  font-family: "Kumbh Sans", sans-serif;
}
 
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }
`;
