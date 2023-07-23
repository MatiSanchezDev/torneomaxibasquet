import { Link } from "react-router-dom";

export const HomePrincipal = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-3xl font-semibold">Tu Equipo App</h1>
          <h4>Crea tu equipo con los jugadores que ya jugaron!</h4>
        </div>
        <div className="flex gap-7 items-center">
          <Link to="/teams" className="p-2 bg-green-500 border rounded-xl">
            Equipos
          </Link>
          <Link to="/createTeam" className="p-2 bg-green-500 border rounded-xl">
            Crear equipo
          </Link>
          <Link to="/players" className="p-2 bg-green-500 border rounded-xl">
            Jugadores
          </Link>
        </div>
      </div>
    </div>
  );
};
