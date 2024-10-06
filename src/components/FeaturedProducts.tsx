"use client";

import { Product } from "@/shared/types";
import React from "react";

interface ProductGridProps {
  products: Product[];
}

const FeaturedProducts: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <React.Fragment>
      <h2>New Arrivals</h2>
      <div style={containerStyle}>
        {products.map((product: Product) => (
          <div style={imageContainerStyle} key={product.id}>
            <img src={product.images[0]} alt={product.title} style={imageStyle} />
            <div style={textOverlayStyle}>{product.title}</div>
            <div style={priceStyle}>${product.price.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

const containerStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)", // Two columns
  gridAutoRows: "200px", // Set a default height for grid rows
  gap: "1rem", // Space between items
  padding: "2rem 0",
};

const imageContainerStyle: React.CSSProperties = {
  position: "relative",
  overflow: "hidden",
  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
  border: "1px solid #ddd",
  borderRadius: "8px",
  gridRowEnd: "span 2", // This will allow some items to take up more vertical space
};

// Styles for the images
const imageStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  display: "block",
};

// Styles for the text overlay
const textOverlayStyle: React.CSSProperties = {
  position: "absolute",
  bottom: "10px",
  left: "10px",
  color: "white",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  padding: "5px",
  borderRadius: "5px",
};

// Styles for the price display
const priceStyle: React.CSSProperties = {
  position: "absolute",
  top: "10px",
  right: "10px",
  padding: "5px",
  borderRadius: "5px",
  fontSize: "1.5rem",
};

export default FeaturedProducts;
