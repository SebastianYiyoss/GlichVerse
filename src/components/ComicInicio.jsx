import { Link } from 'react-router-dom';


export const ComicInicio = () => {
  return (
    <>
      <style>{`
        .hero-title {
          animation: slideDown 1s ease-out;
        }

        .hero-text {
          animation: fadeIn 1.5s ease-out;
        }

        .comic-section {
          animation: zoomFade 1.2s ease-out;
          transition: all 0.4s ease;
        }

        .comic-section:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
        }

        .character-card {
          transition: all 0.4s ease;
          cursor: pointer;
        }

        .character-card:hover {
          transform: translateY(-15px);
        }

        .character-card img {
          transition: all 0.4s ease;
        }

        .character-card:hover img {
          transform: scale(1.08);
        }

        .character-card h5 {
          transition: all 0.3s ease;
        }

        .character-card:hover h5 {
          color: #016C6A;
        }

        .floating-btn {
          transition: all 0.4s ease;
        }

        .floating-btn:hover {
          transform: scale(1.05);
          background-color: #016C6A;
          color: white !important;
        }

        .fade-up {
          animation: fadeUp 1.2s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-80px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes zoomFade {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="container py-5">

        <div className="text-center mb-4 hero-title">
          <h1 className="fw-bold" style={{ color: "#016C6A" }}>
            Matrix
          </h1>
        </div>

        <div className="text-center mb-4 hero-text">
          <p className="lead mb-1">
            Matrix es un cómic interactivo que busca concienciar
          </p>
          <p className="lead">
            a las personas sobre el buen uso que se le debe dar a la tecnología
          </p>
        </div>

        <section
          className="w-100 rounded-3 p-5 mb-5 comic-section"
          style={{
            backgroundColor: "#A5D9C3",
            minHeight: "28rem",
          }}
        >
          <div className="container text-center">

            <h2
              className="fw-bold mb-4"
              style={{
                fontSize: "3rem",
              }}
            >
              CONOCE EL CÓMIC
            </h2>

            {/* El botón ahora es un Link que redirige a tu nueva sección */}
            <Link
              to="/HistoriaComic"
              className="btn btn-outline-dark px-5 py-2 mb-5 floating-btn text-decoration-none d-inline-flex align-items-center justify-content-center"
              style={{
                minWidth: "22rem",
                fontSize: "1.4rem",
              }}
            >
              Historia del cómic
            </Link>

            <p
              className="mx-auto"
              style={{
                maxWidth: "1200px",
                fontSize: "1.5rem",
                lineHeight: "1.8",
                textAlign: "center",
              }}
            >
              Matrix es una historia basada en un mundo controlado por la
              tecnología, mostrando cómo la manipulación tecnológica puede
              llegar a ser nuestro mayor destructor. En cada una de las fases,
              Matrix muestra cómo Chappie —un robot creado para dominar— se da
              cuenta de lo que hace la tecnología y que no está bien. Noah y
              Emma buscan una solución para evitar el desastre.
            </p>

          </div>
        </section>

        <div className="mb-4 text-center fade-up">
          <p className="fw-bold fs-3">PERSONAJES</p>
        </div>

        <div className="row gy-4">

          <div className="col-12 col-md-4 text-center character-card">
            <img
              className="img-fluid mb-3"
              src="/chappie.png"
              alt="Chappie"
              style={{ maxWidth: "240px" }}
            />
            <h5 className="fw-semibold">Chappie</h5>
            <p>
              Es un robot que fue hecho para controlar y gobernar el mundo.
            </p>
          </div>

          <div className="col-12 col-md-4 text-center character-card">
            <img
              className="img-fluid mb-3"
              src="/noah-completo.png"
              alt="Noah"
              style={{ maxWidth: "240px" }}
            />
            <h5 className="fw-semibold">Noah</h5>
            <p>
              Un trabajador de TECO que amaba la tecnología hasta que conoció
              sus consecuencias.
            </p>
          </div>

          <div className="col-12 col-md-4 text-center character-card">
            <img
              className="img-fluid mb-3"
              src="/emma.png"
              alt="Emma"
              style={{ maxWidth: "240px" }}
            />
            <h5 className="fw-semibold">Emma</h5>
            <p>
              Una estudiante universitaria que descubrirá las consecuencias
              del mal uso de la tecnología y tratará de resolverlo.
            </p>
          </div>

        </div>

        <div
          className="w-100 rounded-3 p-4 mt-5 comic-section"
          style={{ backgroundColor: "#A5D9C3" }}
        >
          <div className="row align-items-center">

            <div className="col-12 col-md-6 mb-4 mb-md-0">
            </div>

            <div>
              <h2
                className="fw-bold text-center mb-4"
                style={{
                  fontSize: "2.5rem",
                }}
              >
                ¿Por qué deberías conocer <br />
                nuestro cómic?
              </h2>

              <p
                style={{
                  textAlign: "center",
                  fontSize: "1.15rem",
                  maxWidth: "600px",
                  margin: "0 auto",
                  lineHeight: "1.8",
                }}
              >
                Nos gustaría invitarte a descubrir nuestro cómic, una propuesta
                innovadora que incorpora elementos de interacción con el público,
                permitiendo a los lectores formar parte activa del desarrollo de
                la historia.

                <br />
                <br />

                Si eres aficionado a historias con estética similar a Matrix,
                esta narrativa te atrapá aún más.

                <br />
                <br />

                Si este no es tu estilo, estamos seguros de que igual
                encontrarás valor, ya que la interactividad transforma la
                lectura en una experiencia única, innovadora y distinta a los
                cómics tradicionales.
              </p>

            </div>

          </div>
        </div>

        <section className="w-100 mt-5 mb-4 text-center">
  <h2
    className="fw-bold mb-4"
    style={{ color: "#016C6A", fontSize: "2.5rem" }}
  >
    Video
  </h2>

  <div className="video-container">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/JD3Ud0hXxRA"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</section>


      </div>
    </>
  );
};
