import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';

// 🚀 IMPORTACIONES DE IMÁGENES DESDE ASSETS PARA REUTILIZAR LA BASE DE DATOS
import cap1 from '../assets/cap1.png';
import cap2 from '../assets/cap2.png';
import cap3 from '../assets/cap3.png';
import cap4 from '../assets/cap4.png';
import cap5 from '../assets/cap5.png';
import cap6 from '../assets/cap6.png';
import cap7 from '../assets/cap7.png';
import imagenCasita from '../assets/home.png';

const comicData = {
  nombreComic: "Matrix",
  capitulos: [
    { id: 1, nombreCap: "Un día al revés", imgPortada: cap1, video: "./img_videos/Darte.mp4", descripcion: "Emma inicia nerviosa la universidad, pero hace nuevos amigos y comparte su experiencia con su madre orgullosa." },
    { id: 2, nombreCap: "El inicio del fin", imgPortada: cap2, video: "./img_videos/Darte.mp4", descripcion: "Un apagón provoca caos total en la ciudad; Noah y Alma huyen entre disparos y destrucción." },
    { id: 3, nombreCap: "La creación de Chappie", imgPortada: cap3, video: "./img_videos/Darte.mp4", descripcion: "Chappie es activado y desata el caos; Ámsterdam cae en manos de robots, Emma y Noah sobreviven." },
    { id: 4, nombreCap: "El infierno", imgPortada: cap4, video: "./img_videos/Darte.mp4", descripcion: "Con Ámsterdam en ruinas, Noah sufre pérdidas familiares y Emma presencia el ataque de robots en la universidad." },
    { id: 5, nombreCap: "El encuentro", imgPortada: cap5, video: "./img_videos/Darte.mp4", descripcion: "Emma ayuda a Noah y Alma en Ámsterdam; Alma muere, surge Chappie, la esperanza contra robots." },
    { id: 6, nombreCap: "Arreglar lo que no dañamos", imgPortada: cap6, video: "./img_videos/Darte.mp4", descripcion: "Emma y Noah reprograman a Chappie, terminan la amenaza robótica y viven en paz con Emily." },
    { id: 7, nombreCap: "La calma", imgPortada: cap7, video: "./img_videos/Darte.mp4", descripcion: "Después de la guerra tecnológica, Emma, Noah y Chappie viven en paz reconstruyendo el mundo." }
  ]
};

export const Capitulos = () => {
  const [searchParams] = useSearchParams();
  // Obtiene el ID de la URL (ej: /ver-comic?id=3)
  const idCapitulo = parseInt(searchParams.get('id'));

  // Busca el capítulo que coincida con el ID
  const capitulo = comicData.capitulos.find(cap => cap.id === idCapitulo);

  if (!capitulo) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Capítulo no encontrado</h2>
        <Link to="/" className="btn btn-dark mt-3">Volver al Inicio</Link>
      </div>
    );
  }

  return (
    <>
      <style>{`
        .reproductor-container {
          max-width: 900px;
          margin: 40px auto;
          padding: 0 20px;
        }
        .video-box {
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
          background-color: #000;
        }
        .video-box video {
          width: 100%;
          display: block;
        }
        .info-video {
          margin-top: 25px;
        }
        .btn-volver {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #016C6A;
          text-decoration: none;
          font-weight: 600;
          margin-bottom: 20px;
          transition: color 0.2s;
        }
        .btn-volver:hover {
          color: #A5D9C3;
        }
        .btn-volver img {
          width: 18px;
          height: 18px;
        }
      `}</style>

      <div className="reproductor-container">
        {/* Botón para regresar */}
        <Link to="/" className="btn-volver">
          <img src={imagenCasita} alt="Inicio" /> Volver al listado
        </Link>

        {/* Contenedor del Video */}
        <div className="video-box">
          <video controls poster={capitulo.imgPortada}>
            <source src={capitulo.video} type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
          </video>
        </div>

        {/* Detalles del Capítulo */}
        <div className="info-video">
          <span className="badge bg-secondary mb-2" style={{ backgroundColor: '#016C6A' }}>
            Capítulo {capitulo.id}
          </span>
          <h1 className="fw-bold mb-3" style={{ color: '#016C6A' }}>{capitulo.nombreCap}</h1>
          <p className="fs-5 text-muted">{capitulo.descripcion}</p>
        </div>
      </div>
    </>
  );
};