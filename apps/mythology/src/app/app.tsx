// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import Global from '../components/styles/global';
import Home from '../feature/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import Episode from '../feature/Episode';
import Navbar from '../feature/Navbar';
import { apiProvider } from '../services/api/ApiProvider';

const queryClient = new QueryClient();

export function App() {
  apiProvider.useDefineUrl();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navbar></Navbar>
          <Global />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/episode/:id" element={<Episode />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      {/* <NxWelcome title="mythology" /> */}
    </>
  );
}

export default App;
