import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// 🚀 IMPORTACIONES DE IMÁGENES DESDE ASSETS
import logoGlitch from '../assets/logo.png';
import imagenCasita from '../assets/home.png';
import imagenPerfil from '../assets/perfil.png'; 
import cap1 from '../assets/cap1.png';
import cap2 from '../assets/cap2.png';
import cap3 from '../assets/cap3.png';
import cap4 from '../assets/cap4.png';
import cap5 from '../assets/cap5.png';
import cap6 from '../assets/cap6.png';
import cap7 from '../assets/cap7.png';

const comicData = {
  nombreComic: "Matrix",
  categoria: "apocalipsis",
  cantidadCap: 7,
  descripcion: "apocalipsis tecnologico",
  bgBanner: "./img_videos/nosotras.png",
  capitulos: [
    { id: 1, nombreCap: "Un día al revés", imgPortada: cap1, video: "./img_videos/Darte.mp4", descripcion: "Emma inicia nerviosa la universidad, pero hace nuevos amigos y comparte su experiencia con su madre orgullosa." },
    { id: 2, nombreCap: "El inicio del fin", imgPortada: cap2, video: "./img_videos/Darte.mp4", descripcion: "Un apagón provoca caos total en la ciudad; Noah y Alma huyen entre disparos y destrucción." },
    { id: 3, nombreCap: "La creación de Chappie", imgPortada: cap3, video: "./img_videos/Darte.mp4", descripcion: "Chappie es activado y desata el caos; Ámsterdam cae en manos de robots, Emma y Noah sobreviven." },
    { id: 4, nombreCap: "El infierno", imgPortada: cap4, video: "./img_videos/Darte.mp4", descripcion: "Con Ámsterdam en ruinas, Noah sufre pérdidas familiares y Emma presencia el ataque de robots en la universidad." },
    { id: 5, nombreCap: "El encuentro", imgPortada: cap5, video: "./img_videos/Darte.mp4", descripcion: "Emma ayuda a Noah y Alma en Ámsterdam; Alma muere, surge Chappie, la esperanza contra robots." },
    { id: 6, nombreCap: "Arreglar lo que no dañamos", imgPortada: cap6, video: "./img_videos/Darte.mp4", descripcion: "Emma y Noah reprograman a Chappie, terminan la amenaza robótica y viven en paz con Emily." },
    { id: 7, nombreCap: "La calma", imgPortada: cap7, video: "./img_videos/Darte.mp4", descripcion: "Después de la guerra tecnológica, Emma, Noah y Chappie viven en paz reconstruyendo el world." }
  ]
};

export const HistoriaComic = () => {
  const navigate = useNavigate();
  
  const [capituloSeleccionado, setCapituloSeleccionado] = useState(comicData.capitulos[0]);
  
  // 🚀 ESTADOS PARA EL MODAL Y EL FORMULARIO
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [usuario, setUsuario] = useState('UsuarioGlitch');
  const [password, setPassword] = useState('123456');

  const handleReproducirVideo = (id) => {
    navigate(`/ver-comic?id=${id}`);
  };

  const handleGuardarPerfil = (e) => {
    e.preventDefault();
    alert('Perfil actualizado con éxito');
    setIsModalOpen(false); // Cierra el modal al guardar
  };

  return (
    <>
      <style>{`
        .layout-container {
          display: flex;
          min-height: 100vh;
          width: 100%;
        }

        /* Estilos del menú lateral */
        .menu-lateral {
          width: 260px;
          min-width: 260px;
          background-color: #f8f9fa;
          border-right: 1px solid #dee2e6;
          padding: 20px;
          display: flex;
          flex-direction: column;
        }

        .menu-lateral .logo {
          max-width: 80%;
          margin-bottom: 30px;
          align-self: center;
        }

        .menu-lateral ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .menu-lateral ul li a, .menu-lateral ul li button {
          display: flex;
          align-items: center;
          padding: 10px 12px;
          color: #333;
          text-decoration: none;
          border-radius: 8px;
          transition: background-color 0.2s;
          margin-bottom: 5px;
          background: none;
          border: none;
          width: 100%;
          text-align: left;
          cursor: pointer;
          font-size: 1rem;
        }

        .menu-lateral ul li a:hover, .menu-lateral ul li button:hover {
          background-color: #e9ecef;
          color: #016C6A;
        }

        .menu-lateral ul li a img, .menu-lateral ul li button img {
          width: 20px;
          height: 20px;
          margin-right: 12px;
        }

        .perfil-seccion {
          margin-top: auto;
          padding-top: 20px;
          border-top: 1px solid #dee2e6;
        }

        /* Estilos de la zona de contenido */
        .contenido-principal {
          flex: 1;
          padding: 40px;
          background-color: #ffffff;
          width: 100%;
          box-sizing: border-box;
        }

        .capitulo-principal-box {
          background-color: #A5D9C3;
          border-radius: 16px;
          padding: 30px;
          margin-bottom: 40px;
          display: flex;
          gap: 30px;
          align-items: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          width: 100%;
          box-sizing: border-box;
        }

        .capitulo-principal-box img {
          width: 250px;
          height: 150px;
          border-radius: 12px;
          object-fit: cover;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        /* 🚀 CAMBIO COMPORTAMIENTO A FLEX: Centra los elementos huérfanos */
        .capitulos-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center; /* Centra el contenido sobrante (capítulo 7) */
          gap: 25px;
          width: 100%;
        }

        /* 🚀 Cada tarjeta ocupa exactamente un tercio del espacio restando el gap */
        .tarjeta-capitulo {
          width: calc(33.333% - 17px);
          min-width: 280px; /* Previene que se colapsen en pantallas chicas */
          border: 1px solid #dee2e6;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          background-color: #fff;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        .tarjeta-capitulo:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.08);
          border-color: #016C6A;
        }

        .tarjeta-capitulo img {
          width: 100%;
          aspect-ratio: 1 / 1; 
          object-fit: cover; 
        }

        .tarjeta-body {
          padding: 20px; /* Un poco más de aire interno */
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        /* 🚀 TEXTO UN POCO MÁS GRANDE */
        .tarjeta-body h4 {
          font-size: 1.25rem; /* Subió de 1.05rem a 1.25rem */
          color: #016C6A;
          margin-bottom: 10px;
          font-weight: bold;
        }

        /* 🚀 TEXTO UN POCO MÁS GRANDE */
        .tarjeta-body p {
          font-size: 1.02rem; /* Subió de 0.88rem a 1.02rem */
          color: #555;
          margin-bottom: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          line-height: 1.5;
        }

        /* Responsividad alternativa con Flexbox */
        @media (max-width: 1024px) {
          .tarjeta-capitulo {
            width: calc(50% - 13px); /* 2 por fila */
          }
        }

        @media (max-width: 650px) {
          .tarjeta-capitulo {
            width: 100%; /* 1 por fila */
          }
        }

        /* Estilos del Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          background-color: #fff;
          padding: 30px;
          border-radius: 16px;
          width: 400px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.15);
          position: relative;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          border-bottom: 1px solid #eee;
          padding-bottom: 10px;
        }

        .modal-header h3 {
          margin: 0;
          color: #016C6A;
          font-weight: bold;
        }

        .btn-close-modal {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #6c757d;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-weight: 600;
          color: #495057;
        }

        .form-group input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ced4da;
          border-radius: 8px;
          box-sizing: border-box;
        }

        .modal-actions {
          display: flex;
          gap: 10px;
          justify-content: flex-end;
          margin-top: 20px;
        }
      `}</style>

      <div className="layout-container">
        
        {/* 1. Menú Lateral */}
        <aside className="menu-lateral">
          <img className="logo" src={logoGlitch} alt="Glitch Verse Logo" />
         
          <nav>
            <ul>
              <li>
                <Link to="/"><img src={imagenCasita} alt="Inicio" /> Inicio</Link>
              </li>
            </ul>
          </nav>

          <div className="perfil-seccion">
            <ul>
              <li>
                <button onClick={() => setIsModalOpen(true)}>
                  <img src={imagenPerfil} alt="Perfil" /> Mi perfil
                </button>
              </li>
            </ul>
          </div>
        </aside>

        {/* 2. Contenido de los Capítulos */}
        <main className="contenido-principal">
          
          {capituloSeleccionado && (
            <section className="capitulo-principal-box">
              <img 
                src={capituloSeleccionado.imgPortada} 
                alt={capituloSeleccionado.nombreCap} 
              />
              <div style={{ flex: 1 }}>
                <h2 className="fw-bold mb-2" style={{ color: '#016C6A' }}>
                  Capítulo {capituloSeleccionado.id}: {capituloSeleccionado.nombreCap}
                </h2>
                <p className="fs-5 text-dark mb-4">
                  {capituloSeleccionado.descripcion}
                </p>
                <button 
                  onClick={() => handleReproducirVideo(capituloSeleccionado.id)}
                  className="btn btn-dark px-4 py-2 fw-semibold shadow-sm"
                >
                  ▶ Reproducir Capítulo
                </button>
              </div>
            </section>
          )}

          <h3 className="fw-bold mb-4 text-secondary">Listado de Capítulos</h3>

          <div className="capitulos-grid">
            {comicData.capitulos.map((cap) => (
              <div 
                key={cap.id} 
                className="tarjeta-capitulo"
                onClick={() => setCapituloSeleccionado(cap)} 
              >
                <img src={cap.imgPortada} alt={`Portada de ${cap.nombreCap}`} />
                <div className="tarjeta-body">
                  <h4>Capítulo {cap.id}: {cap.nombreCap}</h4>
                  <p>{cap.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* 3. VENTANA EMERGENTE (MODAL) PARA EL PERFIL */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Editar Perfil</h3>
              <button className="btn-close-modal" onClick={() => setIsModalOpen(false)}>&times;</button>
            </div>
            
            <form onSubmit={handleGuardarPerfil}>
              <div className="form-group">
                <label>Nombre de Usuario</label>
                <input 
                  type="text" 
                  value={usuario} 
                  onChange={(e) => setUsuario(e.target.value)} 
                  required 
                />
              </div>

              <div className="form-group">
                <label>Nueva Contraseña</label>
                <input 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
              </div>

              <div className="modal-actions">
                <button type="button" className="btn btn-light" onClick={() => setIsModalOpen(false)}>
                  Cancelar
                </button>
                <button type="submit" className="btn btn-success" style={{ backgroundColor: '#016C6A', color: 'white', border: 'none', borderRadius: '6px', padding: '6px 12px' }}>
                  Guardar Cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};