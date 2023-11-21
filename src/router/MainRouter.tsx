import { Route, Routes } from 'react-router-dom';
import SideBar from '../components/common/Sidebar';
import Inquire from '../pages/Inquire';
import SearchUser from '../pages/SearchUser';
import Messages from '../pages/Messages';
import MyPage from '../pages/Mypage';
import LoginPage from '../pages/auth/LoginPage';
import FindPWPage from '../pages/auth/FindPWPage';
import Error from '../pages/ErrorPage';
import ProtectedRoute from './ProctedRoute';
import ChangePWPage from '../pages/auth/ChangePWpage';
import AddChat from '../pages/AddChat';

const MainRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/findFW" element={<FindPWPage />} />
      <Route path="ChangePW" element={<ChangePWPage />} />
      {/* 유저 전용 */}
      <Route element={<ProtectedRoute />}>
        <Route element={<SideBar />}>
          <Route path="/inquire" element={<Inquire />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/message" element={<Messages />} />
          <Route path="/searchuser" element={<SearchUser />} />
          <Route path="/addChat" element={<AddChat />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default MainRouter;
