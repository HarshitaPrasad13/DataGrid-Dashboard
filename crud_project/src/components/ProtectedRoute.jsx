import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axiosAuthInstance";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        await axios.get("/auth/me"); 
        setLoading(false);
      } catch (err) {
        if (err.response?.status === 401) {
          alert("Session expired. Please log in again.");
          navigate("/");
        } else {
          alert("Something went wrong");
        }
      }
    };

    verifyUser();
  }, [navigate]);

  if (loading) return <div>Loading...</div>;

  return children;
};

export default ProtectedRoute;
