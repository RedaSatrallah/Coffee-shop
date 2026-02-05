import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const token = localStorage.getItem("token");

  // pas connecté => redirection login
  if (!token) return <Navigate to="/login" replace />; //Supprime la page actuelle de l’historique / L’utilisateur ne peut pas faire “Retour” pour revenir à la page interdite

  // connecté => autorisé
  return <Outlet />;
}
