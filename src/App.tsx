import { createGlobalStyle } from "styled-components";
import CircularCountdown from "./CircularCountdown";

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyles />
      <CircularCountdown />
    </div>
  );
};

export default App;
const GlobalStyles = createGlobalStyle` 

 
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }
`;
