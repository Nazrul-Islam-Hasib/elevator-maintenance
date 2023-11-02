import React from "react";
import { render, screen } from "@testing-library/react";
import ElevatorDetails from "../Pages/Elevators/ElevatorDetails/ElevatorDetails.jsx";
import { useLocation } from "react-router-dom";
import '@testing-library/jest-dom';


jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(),
}));

test("renders elevator details", () => {
  const elevatorData = {
    deviceIdentificationNumber: "123",
    manufacturerName: "Company XYZ",
    productionYear: 2020,
    elevatorType: "Passenger",
    state: "Operational",
    warningMessage: "No warning",
    reason: null,
    chart: {
      data: [
        {
            "time": "2023-10-05T00:00:00.000Z",
            "door_cycles_count": 845,
            "door_openings_count": 845,
            "door_closings_count": 872,
            "door_closed_count": 845,
            "door_opened_count": 845
        },
      ],
    },
  };

 
  useLocation.mockReturnValue({ state: { elevatorData } });

  render(<ElevatorDetails />);


  expect(screen.getByText("DeviceIdentificationNumber : 123")).toBeInTheDocument();
  expect(screen.getByText("ManufacturerName : Company XYZ")).toBeInTheDocument();
  expect(screen.getByText("ProductionYear : 2020")).toBeInTheDocument();
  expect(screen.getByText("ElevatorType : Passenger")).toBeInTheDocument();
  expect(screen.getByText("State : Operational")).toBeInTheDocument();
  expect(screen.getByText("WarningMessage : No warning")).toBeInTheDocument();
  expect(screen.queryByText("Reason :")).toBeNull(); 
  expect(screen.queryByTestId("elevator-charts")).toBeInTheDocument(); 
});

test("renders elevator details without warningMessage", () => {
  const elevatorData = {
    deviceIdentificationNumber: "456",
    manufacturerName: "Company ABC",
    productionYear: 2019,
    elevatorType: "Freight",
    state: "Warning",
    warningMessage: null,
    reason: "Some reason",
    chart: {
        data: [
          {
              "time": "2023-10-05T00:00:00.000Z",
              "door_cycles_count": 845,
              "door_openings_count": 845,
              "door_closings_count": 872,
              "door_closed_count": 845,
              "door_opened_count": 845
          },
        ],
      },
  };


  useLocation.mockReturnValue({ state: { elevatorData } });

  render(<ElevatorDetails />);


  expect(screen.getByText("DeviceIdentificationNumber : 456")).toBeInTheDocument();
  expect(screen.getByText("ManufacturerName : Company ABC")).toBeInTheDocument();
  expect(screen.getByText("ProductionYear : 2019")).toBeInTheDocument();
  expect(screen.getByText("ElevatorType : Freight")).toBeInTheDocument();
  expect(screen.getByText("State : Warning")).toBeInTheDocument();
  expect(screen.queryByText("WarningMessage :")).toBeNull(); 
  expect(screen.getByText("Reason : Some reason")).toBeInTheDocument();
  expect(screen.queryByTestId("elevator-charts")).toBeInTheDocument(); 
});

test("does not render charts when chartData is empty", () => {
  const elevatorData = {
    deviceIdentificationNumber: "789",
    manufacturerName: "Company DEF",
    productionYear: 2022,
    elevatorType: "Service",
    state: "Operational",
    warningMessage: null,
    reason: null,
    chart: {
      data: [], 
    },
  };


  useLocation.mockReturnValue({ state: { elevatorData } });

  render(<ElevatorDetails />);


  expect(screen.getByText("DeviceIdentificationNumber : 789")).toBeInTheDocument();
  expect(screen.getByText("ManufacturerName : Company DEF")).toBeInTheDocument();
  expect(screen.getByText("ProductionYear : 2022")).toBeInTheDocument();
  expect(screen.getByText("ElevatorType : Service")).toBeInTheDocument();
  expect(screen.getByText("State : Operational")).toBeInTheDocument();
  expect(screen.queryByText("WarningMessage :")).toBeNull(); 
  expect(screen.queryByText("Reason :")).toBeNull(); 
  expect(screen.queryByTestId("elevator-charts")).toBeNull(); 
});

