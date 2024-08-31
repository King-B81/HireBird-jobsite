import './App.css';
import Login from './components/auth/login/Login';
import Forgotpassword from './components/auth/reset/Forgotpassword';
import Resetpassword from './components/auth/reset/Resetpassword';
import Resetsuccess from './components/auth/reset/Resetsuccess';
import CreatePassword from './components/auth/signup/CreatePassword';
import Createaccount from './components/auth/signup/Createaccount';
import RoleSelect from './components/auth/signup/RoleSelect';
import ProfileView from './components/ProfileView/ProfileView';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';
import Sidebar from './components/dashboards/Sidebar';
import Navbar from './components/dashboards/Navbar';
import Dashboard from './components/dashboards/dashboard/Dashboard';
import CreateJob from './components/dashboards/dashboard/createJob';
import CompanyDetailPage from './components/ProfileView/CompanyProfileDetail';
import CompanyDetail from './components/ProfileView/CompanyDetail';

// import Applicants from "./components/dashboards/dashboard/applicants";
// import Messages from "./components/dashboards/dashboard/messagesChat/messages";
// import Settings from "./components/dashboards/dashboard/settings";
import MarketingSearchResults from "./components/dashboards/dashboard/marketingSearchResults/marketingSearchResults";
function App() {
  const [token , settoken] = useState(false)
  const [isCollapsed, setCollapsed] = useState(true);
  const [activeButton, setActiveButton] = useState("dashboard");
  if(!token){
  return (
    
    <div className="App">
        <Router>
        <Routes>
          <Route path="/" element={ <Login settoken={settoken}/>} />
          <Route path="/roleselect" element={ <RoleSelect/>} />
          <Route path="/createaccount" element={ <Createaccount/>} />
          <Route path="/CreatePassword" element={ <CreatePassword/>} />
          <Route path="/Forgotpassword" element={ <Forgotpassword/>} />
          <Route path="/Resetpassword" element={ <Resetpassword/>} />
          <Route path="/Resetsuccess" element={ <Resetsuccess/>} />
          <Route path= "/profile" element={<ProfileView />} />
          <Route path= "/company-detail" element={<CompanyDetailPage />} />
          <Route path= "/profile-detail" element={<CompanyDetail />} />
          <Route
              path="/marketingSearchResults"
              element={<MarketingSearchResults />}
            />
         </Routes>
        </Router>
  
   
    </div>
  );
}
  return(
    <Router>
    <div className="flex h-full justify-start">
      <Sidebar setActiveButton={setActiveButton} activeButton={activeButton} />
      <div className="w-full">
        <Navbar setCollapsed={setCollapsed} isCollapsed={isCollapsed} />
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/createJob" element={<CreateJob />} /> 
          {/* <Route path="/applicants" element={<Applicants />} /> */}
              {/* <Route path="/messages" element={<Messages />} /> */}
              {/* <Route path="/settings" element={<Settings />} />  */}
          </Routes>
          </div>
        </div>
      </Router>
  )
}

export default App;
