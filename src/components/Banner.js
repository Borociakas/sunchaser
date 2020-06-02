import React from "react";

export default function Banner({ children, title }) {
  return (
    <div className="banner">
      <h1 id="banner-title">{title}</h1>
      {children}
    </div>
  );
}
