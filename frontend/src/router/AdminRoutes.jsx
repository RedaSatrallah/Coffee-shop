import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../components/layouts/AdminLayout";
import ProtectedRoute from "./ProtectedRoutes";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Coffees from "../pages/admin/products/Coffees";
import Machines from "../pages/admin/products/Machines";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute requiredRole="admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        {/* Default redirect from / to /dashboard */}
        <Route index element={<Navigate to="dashboard" replace />} />

        {/* Dashboard page */}
        <Route path="dashboard" element={<AdminDashboard />} />

        {/* Other admin pages */}
        <Route path="coffees" element={<Coffees />} />
        <Route path="machines" element={<Machines />} />
      </Route>
    </Routes>
  );
}
