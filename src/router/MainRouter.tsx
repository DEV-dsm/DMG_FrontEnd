import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import MyPage from "../pages/Mypage";
import SearchUser from "../pages/SearchUser";
import Messages from "../pages/Messages";
import Inquire from "../pages/Inquire";
import SideBar from "../components/common/Sidebar";
import { styled } from "styled-components";

const MainRouter = () => {
  return (
    <Container>
      <SideBar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/searchUser" element={<SearchUser />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/inquire" element={<Inquire />} />
      </Routes>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

export default MainRouter;
