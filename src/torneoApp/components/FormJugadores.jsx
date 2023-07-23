import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useJugadores } from "../../hooks/useJugadores";

export const FormJugadores = () => {
  const [form, setForm] = useState({
    jugador: "",
    nacimiento: "",
    dni: "",
    email: "",
    contacto: "",
    posicionP: "",
    posicionS: "",
    puntaje: "",
    equipoElegido: false,
    nombreEquipo: "",
  });
  const { handleCreateJugador, handleEditJugador, jugadores } = useJugadores();
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  const onInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (id) {
      const paramsId = parseInt(id);
      setForm(jugadores.find((jugador) => jugador.id === paramsId));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      handleEditJugador(form);
      navigate("/");
    } else {
      handleCreateJugador(form);
      navigate("/");
    }
  };

  return (
    <div className=" flex justify-center items-cente p-3">
      <div className="w-96 overflow-hidden bg-slate-400 rounded-lg p-3">
        <form onSubmit={handleSubmit} className="p-2 flex flex-col">
          <label htmlFor="jugador">Nombre Completo del Jugador:</label>
          <input
            type="text"
            id="jugador"
            name="jugador"
            placeholder="Ej: Pedro Gomez"
            onChange={onInputChange}
            className="p-1 m-1"
            value={form.jugador}
          />

          <label htmlFor="nacimiento">Fecha de nacimiento:</label>
          <input
            type="date"
            name="nacimiento"
            id="nacimiento"
            placeholder="Ej: 1995"
            onChange={onInputChange}
            className="p-1 m-1"
            value={form.nacimiento}
          />

          <label htmlFor="dni">DNI:</label>
          <input
            type="number"
            id="dni"
            name="dni"
            placeholder="Ej: 40218413"
            onChange={onInputChange}
            className="p-1 m-1"
            value={form.dni}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ej: pedro@gmail.com"
            onChange={onInputChange}
            className="p-1 m-1"
            value={form.email}
          />

          <label htmlFor="contacto">Celular:</label>
          <input
            type="number"
            id="contacto"
            name="contacto"
            placeholder="Ej: 3774446633"
            onChange={onInputChange}
            className="p-1 m-1"
            value={form.contacto}
          />

          <label htmlFor="posicionP">Rol Principal:</label>
          <select
            id="posicionP"
            name="posicionP"
            onChange={onInputChange}
            className="p-1 m-1"
            placeholder="Elegí tu posición"
            value={form.posicionP}
          >
            <option defaultValue></option>
            <option>Director/Asist</option>
            <option>Polifuncional</option>
            <option>Base</option>
            <option>Escolta/Ayuda</option>
            <option>Ala Pivot</option>
            <option>Alero</option>
            <option>Pivot</option>
          </select>

          <label htmlFor="posicionS">Rol Secundario:</label>
          <select
            id="posicionS"
            name="posicionS"
            onChange={onInputChange}
            className="p-1 m-1"
            placeholder="Elegí tu posición"
            value={form.posicionS}
          >
            <option defaultValue></option>
            <option>Ninguno</option>
            <option>Polifuncional</option>
            <option>Base</option>
            <option>Escolta/Ayuda</option>
            <option>Ala Pivot</option>
            <option>Alero</option>
            <option>Pivot</option>
          </select>

          <label htmlFor="puntaje">Puntaje:</label>
          <input
            type="puntaje"
            id="puntaje"
            name="puntaje"
            placeholder="Entre 30 a 75"
            onChange={onInputChange}
            className="p-1 m-1 mb-3"
            value={form.puntaje}
          />

          <button className="bg-gray-700 rounded-md text-white p-2">
            Agregar Jugador
          </button>
        </form>
      </div>
    </div>
  );
};
