export const SeccionPrincipal = () => {
  return (
    <>
      <style>{`
        .fade-down {
          animation: fadeDown 1s ease-out;
        }

        .fade-up {
          animation: fadeUp 1.2s ease-out;
        }

        .card-animation {
          animation: cardAppear 1s ease-out;
          transition: transform 0.3s ease;
        }

        .card-animation:hover {
          transform: translateY(-10px) scale(1.05);
        }

        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(80px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardAppear {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="container py-5">

        <div className="text-center mb-5 fade-down">
          <h2
            className="fw-bold"
            style={{
              color: "#006d6f",
              fontFamily: "Georgia, serif",
            }}
          >
            Conoce GlitchVerse
          </h2>

          <div className="d-flex justify-content-center align-items-center gap-4 mt-3">
            <div
              style={{
                width: "3px",
                height: "40px",
                backgroundColor: "#000",
              }}
            />

            <p className="mb-0" style={{ maxWidth: "500px" }}>
              Nuestra marca se enfoca en buscar la mejora en el trato que le
              podemos dar a la tecnología, buscando a través de un cómic
              interactivo, mostrando la importancia que tiene el buen manejo
              de las redes sociales y la tecnología.
            </p>

            <div
              style={{
                width: "3px",
                height: "40px",
                backgroundColor: "#000",
              }}
            />
          </div>
        </div>

        <div
          className="rounded text-center py-5 px-4 mb-5 fade-up"
          style={{
            backgroundColor: "#B8CCE0",
            minHeight: "400px",
          }}
        >
          <button
            className="btn mb-5"
            style={{
              backgroundColor: "#B6DCC7",
              border: "1px solid #666",
              fontWeight: "bold",
              padding: "12px 30px",
            }}
          >
            ¿Cómo nació nuestra marca?
          </button>

          <p
            className="mx-auto"
            style={{
              maxWidth: "550px",
              lineHeight: "2",
            }}
          >
            Glitchverse nació de la necesidad de contar historias que
            advirtieran sobre los riesgos del mal uso tecnológico. Somos una
            empresa creativa que desarrolla cómics interactivos totalmente
            distópicos, donde cada decisión del lector revela las
            consecuencias de vivir en un mundo dominado por lo digital.
            No solo buscamos entretener, sino generar conciencia sobre el
            impacto real de nuestras elecciones en un futuro cada vez más
            cercano.
          </p>
        </div>

        <div className="text-center mb-5 fade-up">
          <p
            className="fw-bold"
            style={{
              fontSize: "1.5rem",
              padding: "10px 30px",
            }}
          >
            Entérate de nosotros
          </p>

          <p
            className="mx-auto"
            style={{
              maxWidth: "800px",
              lineHeight: "2",
            }}
          >
            Cada una de nosotras desempeña un papel esencial en la creación y
            evolución de Glitchverse, un universo digital donde la innovación
            y la creatividad se entrelazan para dar vida a una experiencia
            única.
          </p>
        </div>

        <div className="row text-center">

          <div className="col-md-4 mb-4 card-animation">
            <img
              src="/nicol.jpeg"
              alt="Nicol"
              className="rounded-circle border border-dark border-3"
              style={{
                width: "180px",
                height: "180px",
                objectFit: "cover",
              }}
            />

            <h2
              className="mt-3 fw-bold"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Nicol
            </h2>

            <p>
              Organizadora digital, estructura todo estéticamente.
              Ella se encarga de todo lo visual y estético.
            </p>
          </div>

          <div className="col-md-4 mb-4 card-animation">
            <img
              src="/Dahiana.jpeg"
              alt="Dahiana"
              className="rounded-circle border border-dark border-3"
              style={{
                width: "180px",
                height: "180px",
                objectFit: "cover",
              }}
            />

            <h2
              className="mt-3 fw-bold"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Dahiana
            </h2>

            <p>
              Creadora de redes, cuenta con un buen manejo de estas.
              Ella se encarga de buscar colaboradores.
            </p>
          </div>

          <div className="col-md-4 mb-4 card-animation">
            <img
              src="/Alexa.jpeg"
              alt="Alexandra"
              className="rounded-circle border border-dark border-3"
              style={{
                width: "180px",
                height: "180px",
                objectFit: "cover",
              }}
            />

            <h2
              className="mt-3 fw-bold"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Alexandra
            </h2>

            <p>
              Editora y diseñadora. Creadora de diseños en Figma e
              ilustraciones para la página web.
            </p>
          </div>

        </div>

      </div>
    </>
  );
};