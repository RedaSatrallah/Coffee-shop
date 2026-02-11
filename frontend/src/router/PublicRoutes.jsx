import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/public/HomePage";
//import ProductDetailsPage from "../pages/public/ProductDetailsPage";
//import NotFoundPage from "../pages/public/NotFoundPage";
//import LoginPage from "../pages/public/auth/LoginPage";
import RegisterPage from "../pages/public/auth/RegisterPage";
//import ForgotPasswordPage from "../pages/public/auth/ForgotPasswordPage";
//import ResetPasswordPage from "../pages/public/auth/ResetPasswordPage";
//import ActivateAccountPage from "../pages/public/auth/ActivateAccountPage";
import CoffeesPage from "../pages/public/CoffeesPage";
import ProductCart from "../pages/public/ProductCart";

export default function PublicRoutes() {
    return (
     <ProductCart />
    );
}
