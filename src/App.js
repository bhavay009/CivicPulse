import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreateComplaint from "./pages/Complaint";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/create"
          element={
            <PrivateRoute>
              <CreateComplaint />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



