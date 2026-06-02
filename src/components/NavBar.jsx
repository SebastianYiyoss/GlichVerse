import React from "react";

export const NavBar = () => {
  return (
    <header
      className="w-100 bg-info-subtle"
      style={{ height: "160px" }}
    >
      <nav
        className="container h-100 d-grid"
        style={{
          gridTemplateColumns: "1fr auto 1fr", // izquierda | centro | derecha
          alignItems: "center"
        }}
      >
        {/* IZQUIERDA */}
        <div className="d-flex gap-4 align-items-center">
          <a
            href="#"
            className="text-dark fw-medium text-decoration-none"
          >
            Conoce el cómic
          </a>

          <a
            href="#"
            className="text-dark fw-medium text-decoration-none"
          >
            Conoce GlitchVerse
          </a>
        </div>

        {/* CENTRO */}
        <div className="d-flex justify-content-center">
  <img
    src="./logo.png"
    alt="GlitchVerse"
    className="img-fluid"
    style={{
      width: "250px",     // AUMENTADO
      marginRight: "-130px",
      marginTop: "9px"
    }}
  />
</div>

        {/* DERECHA – ICONOS */}
        <div className="d-flex justify-content-end align-items-center gap-3">
          <i className="bi bi-search" style={{ fontSize: "1.3rem", cursor: "pointer" }}></i>
          <i className="bi bi-cart3" style={{ fontSize: "1.3rem", cursor: "pointer" }}></i>
        </div>
      </nav>
    </header>
  );
};