import { colorPosicion } from "../../Helpers/colorPosicion";
import { calcularEdad } from "../../Helpers/helpers";

export const CardPTeam = ({ jugadores }) => {
  return (
    <div className="flex gap-5">
      {jugadores?.map((jugador) => (
        <div
          key={jugador.id}
          className="flex flex-col items-center w-60 h-96 border border-gray-500"
        >
          <div className="w-48 h-40 bg-black m-3 text-white text-center">
            img
          </div>
          <h2 className="text-lg font-semibold">{jugador.jugador}</h2>
          <h5 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
            {jugador.puntaje} Pts.
          </h5>
          <div className="flex gap-3">
            {colorPosicion(jugador.posicionP)}
            {colorPosicion(jugador.posicionS)}
          </div>
          <p>DNI: {jugador.dni}</p>
          <p>Edad: {calcularEdad(jugador.nacimiento)}</p>
          <p>Contacto: {jugador.contacto}</p>
          <p>Email: {jugador.email}</p>
          <button onClick={() => {}}>Agregar Jugador</button>
          <button onClick={() => {}}>Elminiar Jugador</button>
        </div>
      ))}
    </div>
  );
};
