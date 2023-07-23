import { useEffect, useState } from "react";
/* import { useNavigate, useParams } from "react-router-dom";
import { useJugadores } from "../../hooks/useJugadores"; */
import { useEquipos } from "../../hooks/useEquipos";
import { useNavigate, useParams } from "react-router-dom";

export const FormEquipos = () => {
  const [form, setForm] = useState({
    nombre: "",
    torneo: "",
    delegado: "",
    equipo: [],
  });
  const { handleCreateEquipo, equipos, handleEditEquipo } = useEquipos();
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  const onInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (id) {
      const paramsId = parseInt(id);
      setForm(equipos.find((jugador) => jugador.id === paramsId));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      handleEditEquipo(form);
      navigate("/teams");
    } else {
      handleCreateEquipo(form);
      navigate(`/addPlayer/${form.nombre}`);
    }
  };

  return (
    <div className=" flex justify-center items-cente p-3">
      <div className="w-96 overflow-hidden bg-slate-400 rounded-lg p-3">
        <form onSubmit={handleSubmit} className="p-2 flex flex-col">
          <label htmlFor="nombre">Nombre del Equipo:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Ej: Locos por las bandejas"
            onChange={onInputChange}
            className="p-1 m-1"
            value={form.nombre}
          />

          <label htmlFor="torneo">Edad del torneo:</label>
          <input
            type="number"
            name="torneo"
            id="torneo"
            placeholder="Ej: 50"
            onChange={onInputChange}
            className="p-1 m-1"
            value={form.torneo}
          />

          <label htmlFor="delegado">Delegado:</label>
          <input
            type="text"
            id="delegado"
            name="delegado"
            placeholder="Ej: Julian Torres"
            onChange={onInputChange}
            className="p-1 m-1"
            value={form.delegado}
          />

          <button className="bg-gray-700 rounded-md text-white p-2">
            Crear Equipo
          </button>
        </form>
      </div>
    </div>
  );
};
