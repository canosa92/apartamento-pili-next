"use client";

import React, { useState } from "react";

const Reservas = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    fechaEntrada: "",
    fechaSalida: "",
    comentario: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/movjpwvw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Hubo un error al enviar tu solicitud. Inténtalo de nuevo.");
      }
    } catch (error) {
      alert("Hubo un error de conexión. Inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-primary border border-gray-700 rounded-2xl text-center">
        <h2 className="font-serif text-3xl text-accent mb-6">
          ¡Gracias por contactarnos!
        </h2>
        <p className="font-sans text-lg text-white/80">
          Hemos recibido tu mensaje y te responderemos a la brevedad.
        </p>
      </div>
    );
  }

  return (
    <div className=" bg-gray-800 max-w-2xl mx-auto p-8  border border-gray-700 rounded-2xl shadow-xl hover:border-accent/40 transition-all duration-300">
      <h2 className="font-serif text-3xl text-accent text-center mb-8">
        Consulta Disponibilidad
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Campo Nombre */}
        <div>
          <label className="font-sans block text-white/90 mb-2">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full p-3 bg-[#0F0F0F] border border-gray-700 rounded-lg text-white/90 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            placeholder="Tu nombre completo"
          />
        </div>

        {/* Campo Email */}
        <div>
          <label className="font-sans block text-white/90 mb-2">Correo Electrónico</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 bg-[#0F0F0F] border border-gray-700 rounded-lg text-white/90 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            placeholder="tuemail@ejemplo.com"
          />
        </div>

        {/* Campos de Fecha */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="font-sans block text-white/90 mb-2">Fecha de Entrada</label>
            <input
              type="date"
              name="fechaEntrada"
              value={formData.fechaEntrada}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#0F0F0F] border border-gray-700 rounded-lg text-white/90 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            />
          </div>
          <div>
            <label className="font-sans block text-white/90 mb-2">Fecha de Salida</label>
            <input
              type="date"
              name="fechaSalida"
              value={formData.fechaSalida}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#0F0F0F] border border-gray-700 rounded-lg text-white/90 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            />
          </div>
        </div>

        {/* Campo Comentario */}
        <div>
          <label className="font-sans block text-white/90 mb-2">
            Comentarios o Peticiones Especiales
          </label>
          <textarea
            name="comentario"
            value={formData.comentario}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 bg-[#0F0F0F] border border-gray-700 rounded-lg text-white/90 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            placeholder="¿Algo más que debamos saber? (opcional)"
          ></textarea>
        </div>

        {/* Botón de Envío */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-accent hover:bg-[#B08A5C] text-white py-3 rounded-lg font-sans font-semibold transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? "Enviando..." : "Enviar Solicitud"}
        </button>
      </form>
    </div>
  );
};

export default Reservas;
