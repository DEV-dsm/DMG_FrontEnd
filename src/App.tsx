import { RecoilRoot } from 'recoil';
import GlobalStyle from './styles/GlobalStyle';
import MainRouter from './router/MainRouter';

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <MainRouter />
    </RecoilRoot>
  );
};

export default App;
