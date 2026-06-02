import React from "react";

export const ComicCard = () => {
  return (
     <div className="container py-5">


  <div className="text-center mb-4">
    <h1 className="fw-bold" style={{ color: "#016C6A" }}>Matrix</h1>
  </div>

  
  <div className="text-center mb-4">
    <p className="lead mb-1">Matrix es un cómic interactivo que busca concienciar</p>
    <p className="lead">a las personas sobre el buen uso que se le debe dar a la tecnología</p>
  </div>

  
  <section
    className="w-100 rounded-3 p-4 mb-5"
    style={{ backgroundColor: "#A5D9C3", minHeight: "28rem" }}
  >
    <div className="container">
      <div className="row align-items-center">

        
        <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
          <h2 className="fw-bold mb-3">CONOCE EL CÓMIC</h2>

          <button className="btn btn-outline-dark mb-3" style={{ minWidth: "14rem" }}>
            Historia del cómic
          </button>

          <p className="mt-3" style={{ maxWidth: "36rem", fontFamily: "Georgia, 'Times New Roman', Times, serif" }}>
            Matrix es una historia basada en un mundo controlado por la tecnología, mostrando cómo la manipulación tecnológica puede llegar a ser nuestro mayor destructor.
            En cada una de las fases, Matrix muestra cómo Chappie —un robot creado para dominar— se da cuenta de lo que hace la tecnología y que no está bien. Noah y Emma buscan una solución para evitar el desastre.
          </p>
        </div>

        
        <div className="col-12 col-md-6 text-center">
          <img
            src="../public/glicht.png"
            alt="Glicht"
            className="img-fluid mx-auto d-block"
            style={{ maxWidth: "320px" }}
          />
        </div>

      </div>
    </div>
  </section>


  <div className="mb-4 text-center">
    <button className="btn btn-outline-dark">Personajes</button>
  </div>

  <div className="row gy-4">

    
    <div className="col-12 col-md-4 text-center">
      <img className="img-fluid mb-3" src="../public/chappie.png" alt="Chappie" style={{ maxWidth: "240px" }} />
      <h5 className="fw-semibold">Chappie</h5>
      <p>Es un robot que fue hecho para controlar y gobernar el mundo.</p>
    </div>

  
    <div className="col-12 col-md-4 text-center">
      <img className="img-fluid mb-3" src="../public/noah-completo.png" alt="Noah" style={{ maxWidth: "240px" }} />
      <h5 className="fw-semibold">Noah</h5>
      <p>Un trabajador de TECO que amaba la tecnología hasta que conoció sus consecuencias.</p>
    </div>

   
    <div className="col-12 col-md-4 text-center">
      <img className="img-fluid mb-3" src="../public/emma.png" alt="Emma" style={{ maxWidth: "240px" }} />
      <h5 className="fw-semibold">Emma</h5>
      <p>Una estudiante universitaria que descubrirá las consecuencias del mal uso de la tecnología y tratará de resolverlo.</p>
    </div>

  </div>

 
  <div
    className="w-100 rounded-3 p-4 mt-5"
    style={{ backgroundColor: "#A5D9C3" }}
  >
    <div className="row align-items-center">
      
   
      <div className="col-12 col-md-6 mb-4 mb-md-0">
        <img
          src="../public/viejass.png"
          alt="Leer Comic"
          className="img-fluid rounded"
        />
      </div>

      <div className="col-12 col-md-6">
        <h2 className="fw-bold text-center mb-3">
          ¿Por qué deberías conocer <br /> nuestro cómic?
        </h2>

        <p style={{ textAlign: "justify", fontSize: "1.05rem" }}>
          Nos gustaría invitarte a descubrir nuestro cómic, una propuesta innovadora
          que incorpora elementos de interacción con el público, permitiendo a los
          lectores formar parte activa del desarrollo de la historia. Si eres
          aficionado a historias con estética similar a Matrix, esta narrativa te
          atrapará aún más.
          <br /><br />
          Si este no es tu estilo, estamos seguros de que igual encontrarás valor, ya que la
          interactividad transforma la lectura en una experiencia única, innovadora
          y distinta a los cómics tradicionales.
        </p>

        <div className="text-center mt-4">
          <button className="btn btn-dark px-4 py-2 rounded-3">
            Leer cómic
          </button>
        </div>
      </div>

    </div>
  </div>

 
  <div className="container my-5">
    <div className="row d-flex align-items-center justify-content-center">

  
      <div className="col-md-6">
        <h2 className="text-center fw-bold" style={{ color: "#0d5a57" }}>
          MUNDO DEL CÓMIC
        </h2>

        <p className="mt-3">
          La historia transcurre en un futuro donde la tecnología ha superado los límites de la humanidad. 
          Las ciudades están controladas por máquinas, y la mayoría ha sido reemplazada por eficiencia. 
          Un apagón global desencadenará el caos y obligará a los protagonistas a redescubrir lo que 
          significa ser humano.
        </p>

        <h3 className="text-center fw-bold mt-4" style={{ color: "#0d5a57" }}>
          CAPÍTULOS
        </h3>

        <ul className="mt-2">
          <li>Prólogo - El dilema del alma</li>
          <li>Capítulo 1 - Un día al revés</li>
          <li>Capítulo 2 - El inicio del fin</li>
          <li>Capítulo 3 - La creación de Chappie</li>
          <li>Capítulo 4 - El infierno</li>
          <li>Capítulo 5 - El reencuentro</li>
          <li>Capítulo 6 - Arreglar lo que no dejamos</li>
          <li>Capítulo 7 - La calma</li>
        </ul>
      </div>

      
      <div className="col-md-4 text-center">
        <img 
          src="../public/Emma-Noah-.png"
          alt="Comic"
          className="img-fluid rounded shadow"
        />
      </div>

    </div>
  </div>

 
  <div
    className="w-100 py-5 px-3 mt-5 rounded-3"
    style={{ backgroundColor: "#A5D9C3" }}
  >
    <div className="container text-center">

      <h2
        className="fw-bold mb-4"
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          letterSpacing: "2px",
          color: "#0b5b58"
        }}
      >
        MATRIX
      </h2>

      <p className="mx-auto" style={{ maxWidth: "760px", fontSize: "1.05rem" }}>
        Nuestro proyecto nació como una respuesta a la creciente dependencia de la tecnología
        en la vida cotidiana. Observamos cómo las personas comenzaban a ceder cada vez más
        control a las máquinas, sin cuestionar las implicaciones de esta entrega…
      </p>

      <p
        className="fw-semibold"
        style={{
          maxWidth: "760px",
          margin: "20px auto",
          fontSize: "1.1rem",
          color: "#0073e6"
        }}
      >
        ¿Qué sucedería si las máquinas, en lugar de servir al ser humano, tomaran el control?
      </p>

      <p className="mx-auto" style={{ maxWidth: "760px", fontSize: "1.05rem" }}>
        Así nació Matrix, una obra que explora un futuro donde la realidad es una ilusión
        creada por máquinas para mantener su dominio.
      </p>

      <div className="text-center mt-4">
        <button className="btn btn-dark px-4 py-2 fw-bold rounded-3">
          Ir al cómic interactivo
        </button>

        <div className="mt-3">
          <img
            src="../public/rayas.png"
            alt="icono"
            style={{ width: "65px" }}
          />
        </div>
      </div>

    </div>
  </div>

</div>
  );
};