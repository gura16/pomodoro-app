import { createGlobalStyle } from "styled-components";
import Setting from "./setting";

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyles />
      <Setting />
    </div>
  );
};

export default App;
const GlobalStyles = createGlobalStyle` 
  @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap');  
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');



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
