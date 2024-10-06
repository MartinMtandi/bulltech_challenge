"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const router = useRouter();
  // Check if user is authenticated
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      router.push("/"); // Redirect to login if not logged in
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push("/");
  };

  return (
    <div style={containerStyle}>
      <img
        src="https://ystore-demo.myshopify.com/cdn/shop/files/logo_73d38031-9e5b-4ed0-abbe-063294e21850_130x.png?v=1701683921"
        alt="Logo"
        style={logoStyle}
      />
      <button onClick={handleLogout} style={logoutButtonStyle}>
        Logout
      </button>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  backgroundColor: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
};

const logoStyle: React.CSSProperties = {
  width: "100px",
  height: "auto",
};

const logoutButtonStyle: React.CSSProperties = {
  padding: "0.5rem 1rem",
  backgroundColor: "#ff4d4d",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default Header;
