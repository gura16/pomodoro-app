import { createGlobalStyle } from "styled-components";

import Timer from "./timer";

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyles />
      {/* <CircularCountdown /> */}
      <Timer />
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
  margin-top: 100px;  
  font-family: "Kumbh Sans", sans-serif;
}
 
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }
`;
