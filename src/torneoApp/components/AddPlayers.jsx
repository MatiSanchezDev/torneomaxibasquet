import { useEffect, useState } from "react";
import { useEquipos } from "../../hooks/useEquipos";
import { useParams } from "react-router-dom";
import { Loader } from "./Loader";
import { CardPlayersTeam } from "./CardPlayersTeam";

export const AddPlayers = () => {
  const { equipos, isLoading } = useEquipos();
  const params = useParams();
  const { name } = params;
  const [team, setTeam] = useState([]);
  const [stop, setStop] = useState(false);

  useEffect(() => {
    if (stop === false) {
      const foundName = equipos.find((equipo) => equipo.nombre === name);
      setTeam([foundName]);
      setStop(true);
    }
  }, [team]);

  return (
    <>
      {isLoading && <Loader />}
      <div>
        {team &&
          team.map((equipoActual) => (
            <ul key={equipoActual.id}>
              <li>Tu equipo: {equipoActual.nombre}</li>
              <li>Año del torneo: {equipoActual.torneo}</li>
              <li>Delegado: {equipoActual.delegado}</li>
              <li>
                Tus jugadores:
                {equipoActual.equipo &&
                  equipoActual.equipo.map((tuEquipo) => (
                    <ul key={tuEquipo.id}>
                      <li>Jugador:{tuEquipo.jugador}</li>
                      <li>Jugador:{tuEquipo.puntaje}</li>
                      <li>Jugador:{tuEquipo.posicionP}</li>
                      <li>Jugador:{tuEquipo.posicionS}</li>
                    </ul>
                  ))}
              </li>
            </ul>
          ))}
      </div>

      <div>
        <CardPlayersTeam />
      </div>
    </>
  );
};
