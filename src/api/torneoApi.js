import axios from "axios";

const torneoApi = axios.create({
  baseURL: "http://localhost:3001",
});

// * CRUD Jugadores
export const getJugadores = async () => {
  const res = await torneoApi.get("/jugadores");
  return res.data;
};

export const createJugador = async (jugador) =>
  await torneoApi.post("/jugadores", jugador);

export const deleteJugador = async (id) =>
  await torneoApi.delete(`/jugadores/${id}`);

export const updateJugador = async (jugador) =>
  await torneoApi.put(`/jugadores/${jugador.id}`, jugador);

// * CRUD Equipos
export const getEquipos = async () => {
  const res = await torneoApi.get("/equipos");
  return res.data;
};

export const createEquipo = async (equipo) =>
  await torneoApi.post("/equipos", equipo);

export const deleteEquipo = async (id) =>
  await torneoApi.delete(`/equipos/${id}`);

export const updateEquipo = async (equipo) =>
  await torneoApi.put(`/equipos/${equipo.id}`, equipo);
