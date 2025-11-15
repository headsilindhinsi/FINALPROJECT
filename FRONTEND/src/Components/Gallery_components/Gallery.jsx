import React from "react";
import { items } from "../../assets/assets"; // your image data array

const MasonryGrid = () => {
  return (
    <section
      style={{
        backgroundColor: "#faf6ef",
        padding: "60px 0",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "1300px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gridAutoRows: "10px",
          gap: "20px",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              borderRadius: "10px",
              background: "#fff",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.08)";
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{
                width: "100%",
                display: "block",
                objectFit: "cover",
                borderRadius: "10px 10px 0 0",
              }}
            />
            <div
              style={{
                padding: "20px 10px",
                textAlign: "center",
              }}
            >
              <h5
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  color: "#222",
                  marginBottom: "5px",
                }}
              >
                {item.title}
              </h5>
              {item.subtitle && (
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#555",
                    margin: 0,
                  }}
                >
                  {item.subtitle}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MasonryGrid;
