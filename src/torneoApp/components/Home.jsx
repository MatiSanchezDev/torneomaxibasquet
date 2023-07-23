import { Link } from "react-router-dom";
import { useApiAndStore } from "../../hooks";

export const Home = () => {
  const { jugadores, isLoading, handleDeleteJugador } = useApiAndStore();

  return (
    <>
      <header className="flex flex-col justify-center items-center mb-4">
        <h1 className="text-2xl font-bold m-2">
          Base de Datos: {jugadores ? jugadores.length : ""}
        </h1>
        <Link to={"/create"} className="p-2 w-30 bg-green-500 rounded-lg">
          Agregar Jugador
        </Link>
      </header>
      {isLoading ? (
        <div>
          <h3>Loading...</h3>
        </div>
      ) : (
        ""
      )}
      {jugadores &&
        jugadores.map((jugador) => (
          <div
            key={jugador.id}
            className="flex flex-col gap-2 bg-slate-100 border w-95 h-auto"
          >
            <h1 className="text-lg font-bold">{jugador.jugador}</h1>
            <h3 className="">Rol Principal: {jugador.posicionP}</h3>
            <h3 className="">Rol Secundario: {jugador.posicionS}</h3>
            <h5 className="">Puntaje: {jugador.puntaje}</h5>
            <h5 className="">Nacimiento: {jugador.nacimiento}</h5>
            <h5 className="">Dni: {jugador.dni}</h5>
            <h5 className="">Tel: {jugador.contacto}</h5>
            <h5 className="">Email: {jugador.email}</h5>
            <div>
              <button
                className="bg-red-400 rounded-md w-32 p-2 m-2"
                onClick={() => handleDeleteJugador(jugador.id)}
              >
                Del Jugador
              </button>
              <Link
                className="bg-yellow-400 rounded-md w-32 p-2 m-2"
                to={`/edit/${jugador.id}`}
              >
                Edit Jugador
              </Link>
            </div>
          </div>
        ))}
    </>
  );
};
