export const NavBar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#c8d8e8",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px 0 20px",
        width: "100%",
      }}
    >
      <img
        src="/logo.png"
        alt="GlitchVerse"
        style={{
          width: "180px",
          height: "auto",
          marginBottom: "20px",
        }}
      />

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <a
          href="/"
          style={{
            textDecoration: "none",
            color: "black",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Inicio
        </a>

        <a
          href="/comic"
          style={{
            textDecoration: "none",
            color: "black",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Cómic
        </a>

        <a
          href="/tienda"
          style={{
            textDecoration: "none",
            color: "black",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Tienda
        </a>
      </div>
    </nav>
  );
}