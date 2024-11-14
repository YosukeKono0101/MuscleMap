import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div
      style={{
        backgroundColor: "#242526",
        padding: "10px",
        color: "white",
        textAlign: "center",
      }}
    >
      <p>© {currentYear} MuscleMap Created By Yosuke Kono</p>
    </div>
  );
}

export default Footer;
