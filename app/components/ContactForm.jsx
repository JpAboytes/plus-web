"use client";

import { useState } from "react";
import { IconCheck } from "./Icons";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="form-sent">
        <div className="check">
          <IconCheck width={30} height={30} />
        </div>
        <h3>Mensaje enviado</h3>
        <p>Gracias por contactarnos. Nuestro equipo le responderá a la brevedad.</p>
      </div>
    );
  }

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div>
        <label>Nombre</label>
        <input type="text" required placeholder="Su nombre completo" />
      </div>
      <div className="form-row">
        <div>
          <label>Teléfono</label>
          <input type="tel" required placeholder="Número de contacto" />
        </div>
        <div>
          <label>Correo</label>
          <input type="email" required placeholder="correo@ejemplo.com" />
        </div>
      </div>
      <div>
        <label>Mensaje</label>
        <textarea required rows={4} placeholder="¿Cómo podemos ayudarle?" />
      </div>
      <button type="submit" className="form-submit">Enviar mensaje</button>
    </form>
  );
}
