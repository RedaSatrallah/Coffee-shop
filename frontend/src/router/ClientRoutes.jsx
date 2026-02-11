import { Routes, Route } from "react-router-dom";
//import UserOrders from "../pages/client/UserOrders";
import ClientLayout from "../components/layouts/ClientLayout";
import ProtectedRoute from "./ProtectedRoutes";
//import CartPage from "../pages/client/CartPage";
//import ChooseAddressPage from "../pages/client/ChooseAddressPage";
//import CheckoutPage from "../pages/client/CheckoutPage";
//import OrderDetails from "../pages/client/OrderDetails";


export default function ClientRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <ProtectedRoute requiredRole="client">
                        <ClientLayout />
                    </ProtectedRoute>
                }
            >
                
        
            </Route>
        </Routes>
    );
}
























/*<ProtectedRoute requiredRole="client">
    <ClientLayout />
</ProtectedRoute>
Donc :

🛡️ Avant d’afficher ClientLayout, on vérifie que :

L’utilisateur est connecté

Son rôle = "client" */