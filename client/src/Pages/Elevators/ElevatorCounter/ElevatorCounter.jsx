import React from 'react';
import { useNavigate } from 'react-router-dom';

const ElevatorCounter = ({operationalElevator, warningElevator, outOfOrderElevator}) => {
    const navigate = useNavigate();
    const handleOperationalElevators = () => {
        navigate("/elevators", { state: { operationalElevator, type: 'operational' } })
    }

    const handleOutOfOrderElevators = () => {
        navigate("/elevators", { state: { outOfOrderElevator, type: 'out-of-order' } })
    }

    const handleWarningElevators = () => {
        navigate("/elevators", { state: { warningElevator, type: 'warning' } })
    }
    return (
        <div className="stats shadow mt-5">

            <div className="stat">
                <div className="stat-title">Operational elevator</div>
                <div className="stat-value">{operationalElevator.length}</div>
                <div className="stat-actions">
                    <button className="btn btn-sm btn-success" onClick={handleOperationalElevators}>View details</button>
                </div>
            </div>

            <div className="stat">
                <div className="stat-title">Out-of-order elevator</div>
                <div className="stat-value">{outOfOrderElevator.length}</div>
                <div className="stat-actions">
                    <button className="btn btn-sm btn-error" onClick={handleOutOfOrderElevators}>View details</button>
                </div>
            </div>

            <div className="stat">
                <div className="stat-title">Warning elevator</div>
                <div className="stat-value">{warningElevator.length}</div>
                <div className="stat-actions">
                    <button className="btn btn-sm btn-warning" onClick={handleWarningElevators}>View details</button>
                </div>
            </div>

        </div>
    );
};

export default ElevatorCounter;