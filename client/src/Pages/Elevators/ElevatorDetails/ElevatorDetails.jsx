import { useLocation } from "react-router-dom";
import ElevatorCharts from "./ElevatorCharts/ElevatorCharts";
const ElevatorDetails = () => {
    const location = useLocation();
    const { elevatorData } = location.state;
    let chartData;
    if (elevatorData.chart) {
        chartData = elevatorData.chart.data;
    }
    return (

        <div>
            {/* <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>deviceIdentificationNumber</th>
                            <th>manufacturerName</th>
                            <th>productionYear</th>
                            <th>elevatorType</th>
                            <th>state</th>
                            {elevatorData.warningMessage && <th>warningMessage</th>}
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            key={elevatorData._id}
                            className="hover">
                            <td>{elevatorData.deviceIdentificationNumber}</td>
                            <td>{elevatorData.manufacturerName}</td>
                            <td>{elevatorData.productionYear}</td>
                            <td>{elevatorData.elevatorType}</td>
                            <td>{elevatorData.state}</td>
                            {elevatorData.warningMessage && <td>{elevatorData.warningMessage}</td>}
                        </tr>
                    </tbody>
                </table>
            </div> */}
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Elevator details</h2>
                                <ul>
                                    <li>deviceIdentificationNumber : {elevatorData.deviceIdentificationNumber}</li>
                                    <li>manufacturerName : {elevatorData.manufacturerName}</li>
                                    <li>productionYear : {elevatorData.productionYear}</li>
                                    <li>elevatorType : {elevatorData.elevatorType}</li>
                                    <li>state : {elevatorData.state}</li>
                                    {elevatorData.warningMessage && <li>warningMessage : {elevatorData.warningMessage}</li>}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero">
                <div className="hero-content text-center">
                    {chartData && <ElevatorCharts key={elevatorData._id} chartData={chartData}></ElevatorCharts>}
                </div>
            </div>
        </div>

    );
};

export default ElevatorDetails;