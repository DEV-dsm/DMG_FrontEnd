import GlobalStyle from './styles/GlobalStyle';
import MainRouter from './router/MainRouter';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 1000,
      refetchInterval: 0,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <RecoilRoot>
        <Toaster />
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
