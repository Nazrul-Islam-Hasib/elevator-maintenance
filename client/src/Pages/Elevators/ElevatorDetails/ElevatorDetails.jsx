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
            <div className="hero my-8">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <div className="card w-96 shadow-xl bg-base-200">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Elevator details</h2>
                                <ul>
                                    <li>DeviceIdentificationNumber : {elevatorData.deviceIdentificationNumber}</li>
                                    <li>ManufacturerName : {elevatorData.manufacturerName}</li>
                                    <li>ProductionYear : {elevatorData.productionYear}</li>
                                    <li>ElevatorType : {elevatorData.elevatorType}</li>
                                    <li>State : {elevatorData.state}</li>
                                    {elevatorData.warningMessage && <li>WarningMessage : {elevatorData.warningMessage}</li>}
                                    {elevatorData.reason && <li>Reason : {elevatorData.reason}</li>}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero">
                <div className="hero-content text-center">
                    {chartData.length > 0 && <ElevatorCharts key={elevatorData._id} chartData={chartData}></ElevatorCharts>}
                </div>
            </div>
        </div>

    );
};

export default ElevatorDetails;