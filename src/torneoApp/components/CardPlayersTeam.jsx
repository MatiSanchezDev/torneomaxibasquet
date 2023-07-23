import { useJugadores } from "../../hooks/useJugadores";
import { CardPTeam } from "./CardPTeam";
import { Loader } from "./Loader";

export const CardPlayersTeam = () => {
  const { jugadores, isLoading } = useJugadores();

  return <>{isLoading ? <Loader /> : <CardPTeam jugadores={jugadores} />}</>;
};
