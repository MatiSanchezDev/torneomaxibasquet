import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addJugadores,
  delJugador,
  editJugadores,
  newJugadores,
} from "../store/Slices/torneoSlice";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getJugadores,
  createJugador,
  updateJugador,
  deleteJugador,
} from "../api/torneoApi";

export const useJugadores = () => {
  const { jugadores } = useSelector((state) => state.torneoState);
  const dispatch = useDispatch();

  //* Recibir api Jugadores
  const { data, isLoading } = useQuery({
    queryKey: ["jugadores"],
    queryFn: getJugadores,
  });
  const Jugadores = data;

  useEffect(() => {
    dispatch(addJugadores(Jugadores));
  }, [Jugadores]);

  //* Crear Jugador api
  const queryClient = useQueryClient();

  const agregarJugador = useMutation({
    mutationFn: createJugador,
    onSuccess: () => {
      queryClient.invalidateQueries("jugadores");
    },
  });

  //* Eliminar jugador api
  const eliminarJugador = useMutation({
    mutationFn: deleteJugador,
    onSuccess: () => {
      queryClient.invalidateQueries("jugadores");
    },
  });

  //* Editar Jugador
  const editarJugador = useMutation({
    mutationFn: updateJugador,
    onSuccess: () => {
      queryClient.invalidateQueries("jugadores");
    },
  });

  const handleCreateJugador = (jugador) => {
    agregarJugador.mutate(jugador);
    dispatch(newJugadores(jugador));
  };

  const handleDeleteJugador = (jugador) => {
    eliminarJugador.mutate(jugador);
    dispatch(delJugador(jugador));
  };

  const handleEditJugador = async (jugador) => {
    await editarJugador.mutate(jugador);
    dispatch(editJugadores(jugador));
  };

  return {
    jugadores,
    isLoading,
    handleCreateJugador,
    handleDeleteJugador,
    handleEditJugador,
  };
};
