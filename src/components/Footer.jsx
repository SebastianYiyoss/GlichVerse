export const Footer = () => {
  return (
    <>
      <style>{`
        .footer-glitch {
          animation: footerFadeUp 1s ease;
          transition: all .4s ease;
        }

        .footer-glitch:hover {
          box-shadow: 0 -10px 30px rgba(47,93,138,.15);
        }

        .footer-logo {
          transition: all .4s ease;
        }

        .footer-logo:hover {
          transform: scale(1.05);
          text-shadow: 0 0 15px rgba(47,93,138,.4);
        }

        .footer-link {
          text-decoration: none;
          color: #2f5d8a;
          transition: all .3s ease;
          display: inline-block;
        }

        .footer-link:hover {
          color: #016C6A;
          transform: translateX(8px);
        }

        .footer-bottom {
          position: relative;
        }

        .footer-bottom::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: #2f5d8a;
          animation: lineGrow 1.5s ease forwards;
        }

        @keyframes footerFadeUp {
          from {
            opacity: 0;
            transform: translateY(80px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes lineGrow {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
      `}</style>

      <footer
        className="footer-glitch"
        style={{
          backgroundColor: "#c8d8e8",
          color: "#2f5d8a",
          padding: "40px 60px 20px",
          marginTop: "50px",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          {/* Marca */}
          <div>
            <h2
              className="footer-logo"
              style={{
                margin: 0,
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              GlitchVerse
            </h2>

            <p
              style={{
                margin: 0,
                maxWidth: "250px",
                lineHeight: "1.5",
              }}
            >
              Explora historias, personajes y aventuras dentro del universo
              GlitchVerse.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 style={{ marginBottom: "15px" }}>
              Navegación
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <a href="/" className="footer-link">
                Inicio
              </a>

              <a href="/comic" className="footer-link">
                Cómic
              </a>

              <a href="/tienda" className="footer-link">
                Tienda
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 style={{ marginBottom: "15px" }}>
              Contacto
            </h3>

            <p style={{ margin: "5px 0" }}>
              contacto@Glitchverse.com
            </p>
          </div>
        </div>

        {/* Línea inferior */}
        <div
          className="footer-bottom"
          style={{
            marginTop: "40px",
            paddingTop: "20px",
            textAlign: "center",
          }}
        >
          <p style={{ margin: 0 }}>
            © 2025 GlitchVerse. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
};