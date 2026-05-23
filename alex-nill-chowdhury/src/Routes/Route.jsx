import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout/Layout";
import About from "../components/About";
import Contact from "../components/Contact";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
    },
    {
        path: '/about',
        Component: About
    },
    {
        path: '/contact',
        Component: Contact
    }
])