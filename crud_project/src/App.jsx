import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DataTable from "./components/DataTable";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar/>
      <>
      <DataTable/>
      </>
    </Router>
  );
}

export default App;
