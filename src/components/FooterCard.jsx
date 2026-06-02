import React from 'react'

export const FooterCard = () => {
  return (
    <footer className="mt-5">

      
      <div className="container text-center py-4">
        <div className="d-flex justify-content-center gap-5 mb-4">

          <img
            src="/public/tiktok.png"
            alt="TikTok"
            style={{ width: "60px", height: "60px" }}
          />

          <img
            src="/public/instagram.png"
            alt="Instagram"
            style={{ width: "60px", height: "60px" }}
          />
         

          <img
            src="/public/facebook.png"
            alt="Facebook"
            style={{ width: "60px", height: "60px" }}
            
          />

          <img
            src="/public/wpp.png"
            alt="WhatsApp"
            style={{ width: "60px", height: "60px" }}
          />
        </div>
      </div>

     
      <div
        className="text-center py-3"
        style={{ backgroundColor: "#A8D5C2" }}
      >
        <p className="mb-1">Políticas de seguridad</p>
        <p className="mb-1">©2025 - CleverPrototypes, LLC</p>
        <p className="mb-0">-Reservadostodoslosderechos.</p>
      </div>

    </footer>
  )
}
