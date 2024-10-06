"use client";

import React, { useState, useEffect, Suspense } from "react";
import { Product } from "@/shared/types";
import Footer from "./Footer";

// Lazy load components
const Header = React.lazy(() => import("./Header"));
const FeaturedProducts = React.lazy(() => import("./FeaturedProducts"));
const ProductGrid = React.lazy(() => import("./ProductGrid"));

// Skeleton Loader component
const SkeletonLoader: React.FC = () => {
  return (
    <div style={gridStyle}>
      {Array(8)
        .fill(0)
        .map((_, index) => (
          <div key={index} style={skeletonCardStyle}>
            <div style={skeletonImageStyle} />
            <div style={skeletonDetailsStyle}>
              <div style={skeletonTitleStyle} />
              <div style={skeletonPriceStyle} />
            </div>
          </div>
        ))}
    </div>
  );
};

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log(data.products);
        setFeaturedProducts(data.products.slice(0, 4));
        setProducts(data.products.slice(4));
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div aria-busy="true" style={loadingStyle}>
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return <div style={errorStyle}>{error}</div>;
  }

  return (
    <div>
      <Header />
      <div style={contentStyle}>
        <Suspense fallback={<SkeletonLoader />}>
          <FeaturedProducts products={featuredProducts} />
        </Suspense>
        <Suspense fallback={<SkeletonLoader />}>
          <ProductGrid products={products} />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

// Skeleton Loader Styles
const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)", // 4 columns for the grid
  gap: "1rem",
};

const skeletonCardStyle: React.CSSProperties = {
  borderRadius: "8px",
  backgroundColor: "#f0f0f0",
  padding: "1rem",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
};

const skeletonImageStyle: React.CSSProperties = {
  width: "100%",
  height: "150px",
  backgroundColor: "#e0e0e0",
  marginBottom: "0.5rem",
  animation: "skeleton-loading 1.5s infinite",
};

const skeletonDetailsStyle: React.CSSProperties = {
  padding: "0.5rem 0",
};

const skeletonTitleStyle: React.CSSProperties = {
  width: "70%",
  height: "20px",
  backgroundColor: "#e0e0e0",
  marginBottom: "0.5rem",
  animation: "skeleton-loading 1.5s infinite",
};

const skeletonPriceStyle: React.CSSProperties = {
  width: "30%",
  height: "15px",
  backgroundColor: "#e0e0e0",
  animation: "skeleton-loading 1.5s infinite",
};

// Skeleton Loader Animation
const skeletonKeyframes = `
  @keyframes skeleton-loading {
    0% {
      background-color: #e0e0e0;
    }
    100% {
      background-color: #f0f0f0;
    }
  }
`;

// Add keyframes to the document
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(skeletonKeyframes, styleSheet.cssRules.length);

// Dashboard and other styles
const contentStyle = {
  padding: "2rem 10rem",
};

const loadingStyle = {
  textAlign: "center",
  marginTop: "5rem",
  fontSize: "1.5rem",
} as React.CSSProperties;

const errorStyle = {
  color: "red",
  textAlign: "center",
  fontSize: "1.2rem",
  marginTop: "2rem",
} as React.CSSProperties;

export default Dashboard;
