import React from "react";

export const TiendaCard = () => {
  return (
    <>
      <style>{`
        .store-title{
          animation: slideDown 1s ease;
        }

        .banner-card{
          animation: fadeIn 1.2s ease;
          transition: all .4s ease;
        }

        .banner-card:hover{
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0,0,0,.15);
        }

        .product-card{
          transition: all .4s ease;
          overflow: hidden;
          cursor: pointer;
          width: 100%; /* Asegura que ocupe todo el ancho de la columna */
        }

        .product-card:hover{
          transform: translateY(-15px) scale(1.03);
          box-shadow: 0 20px 35px rgba(0,0,0,.18);
        }

        /* NUEVO: Contenedor con altura fija para centrar y homogeneizar los stickers */
        .product-img-container {
          width: 100%;
          height: 220px; /* Controla la altura uniforme de la zona de imagen */
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 10px;
        }

        .product-card img{
          max-width: 100%;
          max-height: 100%;
          object-fit: contain; /* Evita que las imágenes se deformen o estiren */
          transition: transform .5s ease;
        }

        .product-card:hover img{
          transform: scale(1.08);
        }

       
        @keyframes slideDown{
          from{
            opacity:0;
            transform:translateY(-50px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes fadeIn{
          from{
            opacity:0;
          }
          to{
            opacity:1;
          }
        }
      `}</style>

      <section className="container d-flex flex-column align-items-center gap-5 py-5">

        {/* Título */}
        <h2
          className="fw-bold text-center px-4 py-2 rounded-pill store-title"
          style={{
            backgroundColor: "#a8d5c2",
            color: "#000",
            fontSize: "1.4rem",
          }}
        >
          PRODUCTOS DESTACADOS
        </h2>

        {/* Banner */}
        <div className="d-flex justify-content-center w-100">
          <div
            className="w-100 p-4 rounded d-flex justify-content-center shadow banner-card"
            style={{
              backgroundColor: "#cfe3f5",
              maxWidth: "1100px",
            }}
          >
            <p
              className="text-center mb-0"
              style={{
                width: "55%",
                color: "#333",
              }}
            >
            </p>
          </div>
        </div>

        {/* Productos */}
        {/* Agregada la clase align-items-stretch para que todas las columnas midan igual verticalmente */}
        <div
          className="row w-100 justify-content-center align-items-stretch"
          style={{
            maxWidth: "1100px",
          }}
        >

          {/* Producto 1 */}
          <div className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
            {/* Se añade flex-column y justify-content-between para alinear textos abajo */}
            <div className="card text-center shadow rounded-4 p-3 border border-dark product-card d-flex flex-column justify-content-between">
              <div className="product-img-container">
                <img
                  className="card-img-top"
                  src="../public/stiker.png"
                  alt="Stikers"
                />
              </div>
              <div>
                <p className="mt-3 fw-semibold">
                  Stikers Glitch Verse
                </p>
                <p className="fw-bold mb-0">$15.000</p>
              </div>
            </div>
          </div>

          {/* Producto 2 */}
          <div className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
            <div className="card text-center shadow rounded-4 p-3 border border-dark product-card d-flex flex-column justify-content-between">
              <div className="product-img-container">
                <img
                  className="card-img-top"
                  src="../public/stiker-noah.png"
                  alt="Stikers Noah"
                />
              </div>
              <div>
                <p className="mt-3 fw-semibold">
                  Stikers Noah
                </p>
                <p className="fw-bold mb-0">$30.000</p>
              </div>
            </div>
          </div>

          {/* Producto 3 */}
          <div className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
            <div className="card text-center shadow rounded-4 p-3 border border-dark product-card d-flex flex-column justify-content-between">
              <div className="product-img-container">
                <img
                  className="card-img-top"
                  src="../public/stikers-emma.png"
                  alt="Stikers Emma"
                />
              </div>
              <div>
                <p className="mt-3 fw-semibold">
                  Stikers Emma
                </p>
                <p className="fw-bold mb-0">$30.000</p>
              </div>
            </div>
          </div>

          {/* Producto 4 */}
          <div className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
            <div className="card text-center shadow rounded-4 p-3 border border-dark product-card d-flex flex-column justify-content-between">
              <div className="product-img-container">
                <img
                  className="card-img-top"
                  src="../public/stiker-chappie.png"
                  alt="Stikers Chappie"
                />
              </div>
              <div>
                <p className="mt-3 fw-semibold">
                  Stikers Chappie
                </p>
                <p className="fw-bold mb-0">$40.000</p>
              </div>
            </div>
          </div>

          {/* Producto 5 */}
          <div className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
            <div className="card text-center shadow rounded-4 p-3 border border-dark product-card d-flex flex-column justify-content-between">
              <div className="product-img-container">
                <img
                  className="card-img-top"
                  src="../public/stiker2.png"
                  alt="Stikers"
                />
              </div>
              <div>
                <p className="mt-3 fw-semibold">
                  Stikers Glitch Verse
                </p>
                <p className="fw-bold mb-0">$10.000</p>
              </div>
            </div>
          </div>

          {/* Producto 6 */}
          <div className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
            <div className="card text-center shadow rounded-4 p-3 border border-dark product-card d-flex flex-column justify-content-between">
              <div className="product-img-container">
                <img
                  className="card-img-top"
                  src="../public/stiker2.png"
                  alt="Stikers GlitchVerse"
                />
              </div>
              <div>
                <p className="mt-3 fw-semibold">
                  Stikers Glitch Verse
                </p>
                <p className="fw-bold mb-0">$10.000</p>
              </div>
            </div>
          </div>

          {/* Producto 7 */}
          <div className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
            <div className="card text-center shadow rounded-4 p-3 border border-dark product-card d-flex flex-column justify-content-between">
              <div className="product-img-container">
                <img
                  className="card-img-top"
                  src="../public/stiker3.png"
                  alt="Stikers GlitchVerse"
                />
              </div>
              <div>
                <p className="mt-3 fw-semibold">
                  Stikers Glitch Verse
                </p>
                <p className="fw-bold mb-0">$15.000</p>
              </div>
            </div>
          </div>

        </div>

      </section>
    </>
  );
};