import React from 'react';
import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import axios from "axios"; 
import Home from "../Pages/Home/Home.jsx";
import { MemoryRouter } from 'react-router-dom';


jest.mock("@auth0/auth0-react", () => ({
  useAuth0: () => ({
    user: { email: "test@example.com" },
    isAuthenticated: true,
    isLoading: false,
  }),
}));


jest.mock("axios");

describe("Home Component", () => {
  test("renders ElevatorCounter when user is authenticated", async () => {
    
    axios.get.mockResolvedValue({ data: { statusCode: 200 } });

    axios.get.mockResolvedValue({
      data: {
        data: [
          { state: "operational" },
          { state: "out-of-order" },
          { state: "warning" },
        ],
      },
    });

    render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId("elevator-counter")).toBeInTheDocument();
    });
  });

  test("renders SignIn when user is not authenticated", () => {
    
    jest.spyOn(require("@auth0/auth0-react"), "useAuth0").mockReturnValue({
      isAuthenticated: false,
    });

    render(<Home />);

    expect(screen.getByTestId("sign-in")).toBeInTheDocument();
    
  });
});


