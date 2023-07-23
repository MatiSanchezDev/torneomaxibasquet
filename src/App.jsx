import { Link } from "react-router-dom";
import { AppRouter } from "./routes";

export const App = () => {
  return (
    <>
      <AppRouter />
      <div className="absolute top-0 right-3 p-2 bg-green-400">
        <Link to={"/"}>Home</Link>
      </div>
    </>
  );
};
