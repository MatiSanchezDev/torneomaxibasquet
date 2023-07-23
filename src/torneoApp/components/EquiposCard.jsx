import { Link } from "react-router-dom";
import { useEquipos } from "../../hooks/useEquipos";
import { Loader } from "./Loader";

export const EquiposCard = () => {
  const { equipos, isLoading, handleDeleteEquipo } = useEquipos();
  return (
    <>
      {isLoading && <Loader />}
      <div>
        {equipos?.map((equipo) => (
          <div key={equipo.id}>
            <h1>Nombre del Equipo: {equipo.nombre}</h1>
            <p>Toneo: +{equipo.torneo}</p>
            <p>Delegado: {equipo.delegado}</p>
            <p>
              Jugadores:
              {equipo.equipo.map((jugador) => (
                <div key={jugador.id}>
                  <p>{jugador.jugador}</p>
                  <p>{jugador.puntaje}</p>
                </div>
              ))}
            </p>
            <Link
              className="bg-green-400 rounded-md w-32 p-2 m-2"
              to={`/addPlayer/${equipo.nombre}`}
            >
              Agregar Jugadores
            </Link>
            <button
              className="bg-red-400 rounded-md w-32 p-2 m-2"
              onClick={() => handleDeleteEquipo(equipo.id)}
            >
              Del Equipo
            </button>
            <Link
              className="bg-yellow-400 rounded-md w-32 p-2 m-2"
              to={`/editTeam/${equipo.id}`}
            >
              Edit Equipo
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
