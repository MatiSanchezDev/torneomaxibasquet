import { useJugadores } from "../../hooks/useJugadores";
import { Card } from "./Card";
import { Loader } from "./Loader";

export const CardPlayers = () => {
  const { jugadores, isLoading } = useJugadores();

  return <>{isLoading ? <Loader /> : <Card jugadores={jugadores} />}</>;
};
