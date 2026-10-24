import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";



export const router = createBrowserRouter([
    { path: '/', element: <LoginPage /> },
    { path: '/login', element: <LoginPage /> },
    // { path: '/register', element: <RegisterPage /> },
    // { path: '/profile', element: <ProfilePage /> },
])