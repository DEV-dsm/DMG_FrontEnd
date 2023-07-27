import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "../components/common/Sidebar";
import Inquire from "../pages/Inquire";
import SearchUser from "../pages/SearchUser";
import Messages from "../pages/Messages";
import MyPage from "../pages/Mypage";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SideBar />}>
          <Route path="/inquire" element={<Inquire />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/message" element={<Messages />} />
          <Route path="/searchuser" element={<SearchUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
