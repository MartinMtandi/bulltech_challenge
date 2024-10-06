"use client";

import React, { useState } from "react";
import { Product } from "@/shared/types";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import "swiper/css"; // Import Swiper core styles
import "swiper/css/navigation"; // Optional: for navigation buttons
import { Navigation } from "swiper/modules";

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Get unique categories from the products
  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );
  categories.unshift("All"); // Add 'All' option at the beginning

  // Filter products based on the selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <React.Fragment>
      <div style={headerContainerStyle}>
        <h2 style={headerStyle}>Featured Collection</h2>
        <div>
          <label htmlFor="category-select" style={labelStyle}>
            Filter by Category:
          </label>
          <select
            id="category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={selectStyle}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        navigation={true} // Enable navigation buttons
        pagination={{ clickable: true }} // Enable pagination dots
        loop={true} // Enable looping of slides
        modules={[Navigation]} // Add the modules directly here
      >
        {filteredProducts.map((product: Product) => (
          <SwiperSlide key={product.id}>
            <div style={cardStyle}>
              <div style={imageContainerStyle}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  style={imageStyle}
                  loading="lazy"
                />
                <div style={discountPillStyle}>
                  -{Math.ceil(product.discountPercentage)}%
                </div>
              </div>
              <div style={detailsStyle}>
                <h3 style={titleStyle}>{product.title}</h3>
                <p style={priceStyle}>${product.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </React.Fragment>
  );
};

// Styles
const headerContainerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between", // Align items to the ends
  alignItems: "center", // Center items vertically
  marginBottom: "1rem", // Space below the header
};

const headerStyle: React.CSSProperties = {
  margin: 0, // Remove default margin
};

const labelStyle: React.CSSProperties = {
  marginBottom: "0.5rem",
  display: "block",
};

const selectStyle: React.CSSProperties = {
  padding: "0.5rem",
  borderRadius: "4px",
  border: "1px solid #ddd",
};

const cardStyle: React.CSSProperties = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  backgroundColor: "#fff",
};

const imageContainerStyle: React.CSSProperties = {
  position: "relative",
};

const imageStyle: React.CSSProperties = {
  width: "100%",
  height: "auto",
  display: "block",
};

const discountPillStyle: React.CSSProperties = {
  position: "absolute",
  top: "10px",
  left: "10px",
  backgroundColor: "#ff4d4d",
  color: "#fff",
  borderRadius: "20px",
  padding: "5px 10px",
  fontSize: "0.8rem",
};

const detailsStyle: React.CSSProperties = {
  padding: "1rem",
  textAlign: "left",
};

const titleStyle: React.CSSProperties = {
  margin: "0 0 0.5rem 0",
  fontSize: "1.2rem",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

const priceStyle: React.CSSProperties = {
  margin: 0,
  fontSize: "1rem",
  color: "#333",
};

export default ProductCarousel;
