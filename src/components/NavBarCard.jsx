import React from 'react'
import '../Styles/NavBar.css'

export const HeaderPrincipal = () => {
  return (
    <>
      <style>{`
        .navbar-glitch {
          animation: fadeDown 1s ease;
        }

        .navbar-top {
          animation: fadeIn 1.2s ease;
        }

        .logo-navbar {
          width: 220px;
          animation: floatLogo 4s ease-in-out infinite;
          transition: all .4s ease;
        }

        .logo-navbar:hover {
          transform: scale(1.08);
          filter: drop-shadow(0 0 15px rgba(1,108,106,.4));
        }

        .navbar-bottom {
          animation: fadeUp 1.2s ease;
        }

        .nav-link-custom {
          text-decoration: none;
          color: #000;
          font-weight: 500;
          position: relative;
          transition: all .3s ease;
        }

        .nav-link-custom:hover {
          color: #016C6A;
          transform: translateY(-3px);
        }

        .nav-link-custom::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 0%;
          height: 2px;
          background: #016C6A;
          transition: width .3s ease;
        }

        .nav-link-custom:hover::after {
          width: 100%;
        }

        .btn-navbar {
          background: #A5D9C3;
          border: none;
          padding: 12px 28px;
          border-radius: 30px;
          font-weight: bold;
          transition: all .3s ease;
          box-shadow: 0 4px 10px rgba(0,0,0,.08);
        }

        .btn-navbar:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 10px 20px rgba(0,0,0,.15);
          background: #8ecfb3;
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
            transform: translateY(40px);
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

        @keyframes floatLogo {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>

      <nav className="navbar-glitch">

        <div className="navbar-top">
          <img
            src="/logo.png"
            alt="GlitchVerse"
            className="logo-navbar"
          />
        </div>

        <div className="navbar-bottom">

          <a href="#" className="nav-link-custom">
            Conoce el cómic
          </a>

          <button className="btn-navbar">
            Conoce GlitchVerse
          </button>

          <div className="nav-icons"></div>

        </div>

      </nav>
    </>
  )
}