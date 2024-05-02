import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import HOME from "./pages/HOME";
import CreateNewAccount from "./pages/CreateNewAccount";
import EmailConfirmation from "./components/signup/signup2/EmailConfirmation";
import CreatePassword from "./components/signup/signup2/CreatePassword";
import API from "./components/signup/signup2/API";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Dashboard1 from "./pages/Dashboard1";
import BotManager from "./components/dashboard/BotManager";
import BotManager1 from "./components/dashboard/BotManager1";
import BotManager2 from "./components/dashboard/BotManager2";
import Settings from "./components/dashboard/Settings";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
   <Routes>
      <Route path="/" element={<HOME />} />
      <Route path="/signup" element={<CreateNewAccount />} />
      <Route path="/signup2" element={<EmailConfirmation />} />
      <Route path="/signup1" element={<CreatePassword />} />
      <Route path="/signup3" element={<API />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard1" element={<Dashboard1 />} />
      <Route path="/botmanager" element={<BotManager />} />
      <Route path="/botmanager1" element={<BotManager1 />} />
      <Route path="/botmanager2" element={<BotManager2 />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
   
   
  );
}
export default App;
