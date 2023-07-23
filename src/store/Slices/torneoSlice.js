import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jugadores: [],
  equipos: [],
};

export const torneoSlice = createSlice({
  name: "torneo",
  initialState: initialState,
  reducers: {
    // * CRUD Jugadores
    addJugadores: (state, { payload }) => {
      state.jugadores = payload;
    },
    newJugadores: (state, { payload }) => {
      state.jugadores.push(payload);
    },
    editJugadores: (state, { payload }) => {
      const jugador = state.jugadores.find(
        (jugador) => jugador.id === payload.id
      );
      if (jugador) {
        jugador.jugador = payload.jugador;
        jugador.nacimiento = payload.nacimiento;
        jugador.dni = payload.dni;
        jugador.email = payload.email;
        jugador.contacto = payload.contacto;
        jugador.posicionP = payload.posicionP;
        jugador.posicionS = payload.posicionS;
        jugador.puntaje = payload.puntaje;
      }
    },
    delJugador: (state, { payload }) => {
      const jugador = state.jugadores.find((jugador) => jugador.id === payload);
      if (jugador) {
        state.jugadores.splice(state.jugadores.indexOf(jugador), 1);
      }
    },
    // * CRUD Equipos
    addEquipos: (state, { payload }) => {
      state.equipos = payload;
    },
    newEquipos: (state, { payload }) => {
      state.equipos.push(payload);
    },
    editEquipos: (state, { payload }) => {
      const equipo = state.equipos.find((equipo) => equipo.id === payload.id);
      if (equipo) {
        equipo.nombre = payload.nombre;
        equipo.torneo = payload.torneo;
        equipo.delegado = payload.delegado;
      }
    },
    delEquipo: (state, { payload }) => {
      const equipo = state.equipos.find((equipo) => equipo.id === payload);
      if (equipo) {
        state.equipos.splice(state.equipos.indexOf(equipo), 1);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addJugadores,
  newJugadores,
  delJugador,
  editJugadores,
  addEquipos,
  newEquipos,
  editEquipos,
  delEquipo,
} = torneoSlice.actions;
