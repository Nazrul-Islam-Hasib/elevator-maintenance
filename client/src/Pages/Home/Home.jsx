import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Home = () => {
    const [operationalElevator, setOperationalElevator] = useState([]);
    const [outOfOrderElevator, setOutOfOrderElevator] = useState([]);
    const [warningElevator, setWarningElevator] = useState([]);
    const navigate = useNavigate();



    useEffect(() => {
        axios.get('http://localhost:8000/elevator')
            .then(data => {
                const elevatorData = data.data;
                const operationalElevator = elevatorData.filter(elevator =>
                    elevator.state === 'operational'
                )
                setOperationalElevator(operationalElevator)

                const outOfOrderElevator = elevatorData.filter(elevator =>
                    elevator.state === 'out-of-order'
                )
                setOutOfOrderElevator(outOfOrderElevator)
                const warningElevator = elevatorData.filter(elevator =>
                    elevator.state === 'warning'
                )
                setWarningElevator(warningElevator)

            });
    }, [])

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
        <div className="hero min-h-screen">
            <div className="hero-content text-center">
                <div className="stats shadow">

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div className="stat-title">Operational elevator</div>
                        <div className="stat-value">{operationalElevator.length}</div>
                        <div className="stat-actions">
                            <button className="btn btn-sm btn-success" onClick={handleOperationalElevators}>View details</button>
                        </div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                        </div>
                        <div className="stat-title">Out-of-order elevator</div>
                        <div className="stat-value">{outOfOrderElevator.length}</div>
                        <div className="stat-actions">
                            <button className="btn btn-sm btn-error" onClick={handleOutOfOrderElevators}>View details</button>
                        </div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div className="stat-title">Warning elevator</div>
                        <div className="stat-value">{warningElevator.length}</div>
                        <div className="stat-actions">
                            <button className="btn btn-sm btn-warning" onClick={handleWarningElevators}>View details</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Home;