import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import DisplayError from "../Pages/Shared/DisplayError/DisplayError";
import Home from "../Pages/Home/Home";
import Elevators from "../Pages/Elevators/Elevators";
import ElevatorDetails from "../Pages/Elevators/ElevatorDetails/ElevatorDetails"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/elevators',
                element: <Elevators></Elevators>
            },
            {
                path: '/elevator-details/:id',
                element: <ElevatorDetails></ElevatorDetails>
            },
        ]
    }
])