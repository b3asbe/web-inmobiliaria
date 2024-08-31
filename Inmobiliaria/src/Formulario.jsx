import React, { useState } from 'react';

function Formulario() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(name);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateName(name)) {
      alert('Por favor, ingrese un nombre y apellido válido (solo letras).');
      return;
    }

    if (!validateEmail(email)) {
      alert('Por favor, ingrese un correo electrónico válido.');
      return;
    }
    alert(`Datos enviados correctamente:
    - Nombres y apellidos: ${name}
    - Correo electrónico: ${email}
    - Mensaje: ${message}`);
  };

  return (
    <div className="contact-form">
      <h2>CONTÁCTANOS PARA PODER AYUDARTE:</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombres y apellidos</label>
        <input
          type="text"
          placeholder="Nombres y apellidos"
          value={name}
          onChange={(e) => setName(e.target.value)}
          
        />

        <label>Correo electrónico</label>
        <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Escribe tu Mensaje</label>
        <textarea placeholder="Escribe tu Mensaje" rows="4" value={message}
onChange={(e) => setMessage(e.target.value)}></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
export default Formulario;