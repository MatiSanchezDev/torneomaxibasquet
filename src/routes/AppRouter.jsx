import { Route, Routes } from "react-router-dom";
import {
  CreatePage,
  CreateTeamPage,
  PlayersPage,
  TeamsPage,
} from "../torneoApp/pages/dashboard/";
import { Dashboard } from "../torneoApp/pages/dashboard/Dashboard";
import { AddPlayerPage } from "../torneoApp/pages/dashboard/pages/AddPlayerPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/players" element={<PlayersPage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/createPlayer" element={<CreatePage />} />
        <Route path="/edit/:id" element={<CreatePage />} />
        <Route path="/createTeam" element={<CreateTeamPage />} />
        <Route path="/editTeam/:id" element={<CreateTeamPage />} />
        <Route path="/addPlayer/:name" element={<AddPlayerPage />} />
      </Routes>
    </>
  );
};
