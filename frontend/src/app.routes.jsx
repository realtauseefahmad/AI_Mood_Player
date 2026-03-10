import { createBrowserRouter } from "react-router";
import Register from "./features/auth/pages/Register";
import Login from "./features/auth/pages/Login";
import Protected from "./features/auth/components/Protected";
import Home from "./features/home/pages/Home";
import Landing from "./features/home/pages/Landing";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Landing />
    },
    {
        path: "/dashboard",
        element: (
            <Protected>
                <Home />
            </Protected>
        )
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/login",
        element: <Login />
    },
])