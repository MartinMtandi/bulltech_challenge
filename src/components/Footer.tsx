"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={columnStyle}>
          <h4 style={headingStyle}>About Us</h4>
          <p style={textStyle}>
            Learn more about our company, mission, and values.
          </p>
        </div>
        <div style={columnStyle}>
          <h4 style={headingStyle}>Customer Service</h4>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <a href="/help" style={linkStyle}>
                Help Center
              </a>
            </li>
            <li style={listItemStyle}>
              <a href="/shipping" style={linkStyle}>
                Shipping Information
              </a>
            </li>
            <li style={listItemStyle}>
              <a href="/returns" style={linkStyle}>
                Returns & Exchanges
              </a>
            </li>
            <li style={listItemStyle}>
              <a href="/contact" style={linkStyle}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div style={columnStyle}>
          <h4 style={headingStyle}>Follow Us</h4>
          <ul style={socialListStyle}>
            <li style={socialItemStyle}>
              <a href="https://facebook.com" style={socialLinkStyle}>
                Facebook
              </a>
            </li>
            <li style={socialItemStyle}>
              <a href="https://twitter.com" style={socialLinkStyle}>
                Twitter
              </a>
            </li>
            <li style={socialItemStyle}>
              <a href="https://instagram.com" style={socialLinkStyle}>
                Instagram
              </a>
            </li>
            <li style={socialItemStyle}>
              <a href="https://linkedin.com" style={socialLinkStyle}>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div style={columnStyle}>
          <h4 style={headingStyle}>Legal</h4>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <a href="#" style={linkStyle}>
                Terms of Service
              </a>
            </li>
            <li style={listItemStyle}>
              <a href="#" style={linkStyle}>
                Privacy Policy
              </a>
            </li>
            <li style={listItemStyle}>
              <a href="#" style={linkStyle}>
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div style={bottomBarStyle}>
        <p style={bottomTextStyle}>
          © {new Date().getFullYear()} YStore. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// Styles
const footerStyle: React.CSSProperties = {
  backgroundColor: "#f8f9fa",
  padding: "2rem 0",
  borderTop: "1px solid #ddd",
};

const containerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-around",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 1rem",
  flexWrap: "wrap",
};

const columnStyle: React.CSSProperties = {
  flex: "1",
  minWidth: "200px",
  margin: "1rem",
};

const headingStyle: React.CSSProperties = {
  marginBottom: "1rem",
  fontSize: "1.25rem",
  fontWeight: "bold",
};

const textStyle: React.CSSProperties = {
  marginBottom: "1rem",
  fontSize: "0.9rem",
};

const listStyle: React.CSSProperties = {
  listStyle: "none",
  padding: "0",
};

const listItemStyle: React.CSSProperties = {
  marginBottom: "0.5rem",
};

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "#007bff",
  transition: "color 0.3s",
};

const linkHoverStyle: React.CSSProperties = {
  color: "#0056b3",
};

const socialListStyle: React.CSSProperties = {
  listStyle: "none",
  padding: "0",
  display: "flex",
  flexDirection: "column",
};

const socialItemStyle: React.CSSProperties = {
  marginBottom: "0.5rem",
};

const socialLinkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "#007bff",
  transition: "color 0.3s",
};

const bottomBarStyle: React.CSSProperties = {
  textAlign: "center",
  marginTop: "2rem",
};

const bottomTextStyle: React.CSSProperties = {
  fontSize: "0.8rem",
  color: "#6c757d",
};

export default Footer;
