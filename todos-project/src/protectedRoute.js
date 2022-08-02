import { Navigate } from "react-router-dom";
// import { useLocalStorage } from "./useLocalStorage";

export const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token")
        ? localStorage.getItem("token") !== "undefined"
        : false;

    if (!token) {
        localStorage.removeItem("token");
        return <Navigate to="/" />;
    }
    return children;
};
