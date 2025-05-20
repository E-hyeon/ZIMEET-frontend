import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Join from './Authentication/Join/Join1/Join';
import Join2 from './Authentication/Join/Join2/Join2';
import SelectEmoji from './Authentication/Join/SelectEmoji/SelectEmoji';
import Join3 from './Authentication/Join/Join3/Join3';
import Login from './Authentication/Login/Login';
import MyPage from './MyPage/MyPage/MyPage';
import ModifyProfile from './MyPage/ModifyProfile/ModifyProfile';
import ModifyEmoji from './MyPage/ModifyEmoji/ModifyEmoji';
import Booth from './Booth/Booth';
import BoothDetail from './Booth/BoothDetail/BoothDetail';
import Chatting from './Chatting/Chatting/Chatting';
import ChattingInventory from './Chatting/ChattingInventory/ChattingInventory';
import Meeting22 from './Meeting22/Meeting22';
import TeamMaking from './TeamMaking/TeamMaking';
import Meeting from './NonMember/Meeting/Meeting';
import ZimeetIntroduct from './Introduct/ZimeetIntroduct/ZimeetIntroduct';
import GdgocIntroduct from './Introduct/GdgocIntroduct/GdgocIntroduct';
import ReceiveHi from './Chatting/ReceiveHi/ReceiveHi';
import SentHi from './Chatting/SentHi/SentHi';
import TeamIntro from './TeamIntro/TeamIntro';
import OurTeamIntro from './OurTeamIntro/OurTeamIntro';
import Notion from './Notion/NotionMain';
import UserDetail from './Chatting/UserDetail/ChatUserdetail';
import SetList from './SetList/SetList';
import Profile1to1 from './Meeting22/Profile1to1/Profile1to1';

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Booth />} />
      <Route path="/join" element={<Join />} />
      <Route path="/join2" element={<Join2 />} />
      <Route path="/selectemoji" element={<SelectEmoji />} />
      <Route path="/join3" element={<Join3 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/modifyprofile" element={<ModifyProfile />} />
      <Route path="/modifyemoji" element={<ModifyEmoji />} />
      <Route path="/booth" element={<Booth />} />
      <Route path="/boothDetail/:clubId" element={<BoothDetail />} />
      <Route path="/zimeetIntroduct" element={<ZimeetIntroduct />} />
      <Route path="/gdgocIntroduct" element={<GdgocIntroduct />} />
      <Route path="/chatting/:chatRoomId" element={<Chatting />} />
      <Route path="/chatuserdetail" element={<UserDetail />} />
      <Route path="/chattingInventory" element={<ChattingInventory />} />
      <Route path="/receiveHi" element={<ReceiveHi />} />
      <Route path="/sentHi" element={<SentHi />} />
      <Route path="/meeting22" element={<Meeting22 />} />
      <Route path="/teamMaking" element={<TeamMaking />} />
      <Route path="/Profile1to1/:userId" element={<Profile1to1 />} />
      <Route path="/nonmember-Meeting" element={<Meeting />} />
      <Route path="/teamintro/:teamId" element={<TeamIntro />} />
      <Route path="/ourteamintro" element={<OurTeamIntro />} />
      <Route path="/setlist" element={<SetList />} />
      {/* Notion */}
      <Route path="/notion/randomMeetingHelp" element={<Notion />} />
      <Route path="/notion/personalInfoPolicy" element={<Notion />} />
      <Route path="/notion/termsOfService" element={<Notion />} />
      <Route path="/notion/faq" element={<Notion />} />
      <Route path="/notion/notificationSetting" element={<Notion />} />
      <Route path="/notion/meetingGuide" element={<Notion />} />
      <Route path="/notion/randomMeetingGuide" element={<Notion />} />
      <Route path="/notion/developmentTeam" element={<Notion />} />
    </Routes>
  );
};

export default Routers;
