import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { GlobalStyle } from "./styles/GlobalStyle";
import MainRouter from "./router/MainRouter";

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
