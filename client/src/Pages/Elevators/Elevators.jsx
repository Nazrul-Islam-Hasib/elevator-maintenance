import { Link, useLocation } from "react-router-dom";

const Elevators = () => {
    const location = useLocation();
    let elevatorData;
    if (location.state.type == "out-of-order") {
        elevatorData = location.state.outOfOrderElevator
    }
    else if (location.state.type == "warning") {
        elevatorData = location.state.warningElevator
    }
    else {
        elevatorData = location.state.operationalElevator
    }
    return (
        <div className="my-8">
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>fabricationNumber</th>
                            <th>address</th>
                            <th>floorNumber</th>
                            <th>deviceIdentificationNumber</th>
                            <th>state</th>
                            <th>View details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elevatorData.map((elevator, index) => (
                            <tr
                                key={elevator._id}
                                className="hover">
                                <th>{index + 1}</th>
                                <td>{elevator.fabricationNumber}</td>
                                <td>{elevator.address}</td>
                                <td>{elevator.floorNumber}</td>
                                <td>{elevator.deviceIdentificationNumber}</td>
                                <td>{elevator.state}</td>
                                <td> <Link
                                    className="btn btn-accent"
                                    to={{ pathname: `/elevator-details/${elevator._id}` }}
                                    state={{ elevatorData: elevator }}>
                                    view details
                                </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Elevators;