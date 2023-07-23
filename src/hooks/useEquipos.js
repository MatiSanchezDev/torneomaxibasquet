import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  createEquipo,
  deleteEquipo,
  getEquipos,
  updateEquipo,
} from "../api/torneoApi";
import { useEffect } from "react";
import {
  addEquipos,
  delEquipo,
  editEquipos,
  newEquipos,
} from "../store/Slices/torneoSlice";

export const useEquipos = () => {
  const { equipos } = useSelector((state) => state.torneoState);
  console.log(equipos);
  const dispatch = useDispatch();

  //* Recibir api Jugadores
  const { data, isLoading } = useQuery({
    queryKey: ["equipos"],
    queryFn: getEquipos,
  });

  const Equipos = data;
  console.log(Equipos);

  useEffect(() => {
    dispatch(addEquipos(Equipos));
  }, [Equipos]);

  //* Crear Equipo api
  const queryClient = useQueryClient();

  const agregarEquipo = useMutation({
    mutationFn: createEquipo,
    onSuccess: () => {
      queryClient.invalidateQueries("equipos");
    },
  });

  const handleCreateEquipo = (equipo) => {
    agregarEquipo.mutate(equipo);
    dispatch(newEquipos(equipo));
  };

  //* Eliminar jugador api
  const eliminarEquipo = useMutation({
    mutationFn: deleteEquipo,
    onSuccess: () => {
      queryClient.invalidateQueries("equipos");
    },
  });

  const handleDeleteEquipo = (equipo) => {
    eliminarEquipo.mutate(equipo);
    dispatch(delEquipo(equipo));
  };

  //* Editar Equipo Api
  const editarEquipo = useMutation({
    mutationFn: updateEquipo,
    onSuccess: () => {
      queryClient.invalidateQueries("jugadores");
    },
  });

  const handleEditEquipo = async (equipo) => {
    await editarEquipo.mutate(equipo);
    dispatch(editEquipos(equipo));
  };

  return {
    equipos,
    isLoading,
    handleCreateEquipo,
    handleDeleteEquipo,
    handleEditEquipo,
  };
};
