import { BrowserRouter as Router, Routes, Route,useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import DataTable from "./components/DataTable";
import LoginPage from "./components/LoginPage";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";

function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = ["/"]; 
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
    {!shouldHideNavbar && <Navbar />}
   
       <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={ <ProtectedRoute> <DataTable /> </ProtectedRoute>} />
      </Routes>
   
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
