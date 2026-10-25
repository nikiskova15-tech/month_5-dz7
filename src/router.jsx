import { Navigate, createBrowserRouter } from "react-router-dom";
import { useIsAuth } from "./store/useAuthStore";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";

function ProtectedProfile() {
    const isAuth = useIsAuth();

    if (!isAuth) {
        return <Navigate to="/login" replace />;
    }

    return <ProfilePage />;
}

export const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> },
    { path: "/profile", element: <ProtectedProfile /> },
    { path: "*", element: <Navigate to="/" replace /> },
]);