export const colorPosicion = (posicion) => {
  if (posicion === "Base")
    return <p className="text-cyan-500 text-lg font-semibold">{posicion}</p>;
  if (posicion === "Escolta/Ayuda")
    return <p className="text-red-500 text-lg font-semibold">{posicion}</p>;
  if (posicion === "Alero")
    return <p className="text-green-500 text-lg font-semibold">{posicion}</p>;
  if (posicion === "Polifuncional")
    return <p className="text-yellow-500 text-lg font-semibold">{posicion}</p>;
  if (posicion === "Ala Pivot")
    return <p className="text-blue-500 text-lg font-semibold">{posicion}</p>;
  if (posicion === "Pivot")
    return <p className="text-violet-500 text-lg font-semibold">{posicion}</p>;
  if (posicion === "Director/Asist")
    return <p className="text-orange-500 text-lg font-semibold">{posicion}</p>;
};
