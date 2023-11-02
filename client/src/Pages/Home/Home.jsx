import { useEffect, useState } from "react";
import axios, { HttpStatusCode } from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import SignIn from "../SignIn/SignIn";
import ElevatorCounter from "../Elevators/ElevatorCounter/ElevatorCounter";
const Home = () => {
    const [operationalElevator, setOperationalElevator] = useState([]);
    const [outOfOrderElevator, setOutOfOrderElevator] = useState([]);
    const [warningElevator, setWarningElevator] = useState([]);
    const { user, isAuthenticated, isLoading } = useAuth0();
    useEffect(() => {
        if (isAuthenticated) {
            axios.get(`http://localhost:8000/api/v1/users/${user.email}`)
                .then(data => {
                    let statusCode = data.data.statusCode
                    if (statusCode == HttpStatusCode.Ok) {
                        axios.get(`http://localhost:8000/api/v1/elevators/${user.email}`)
                            .then(data => {
                                const elevatorData = data.data.data;
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
                    }
                });


        }

    }, [isLoading])



    return (
        <div className="hero my-8">
            <div className="hero-content text-center flow-root">
                {isAuthenticated ?
                <div data-testid="elevator-counter">
                    <ElevatorCounter
                        operationalElevator={operationalElevator}
                        warningElevator={warningElevator}
                        outOfOrderElevator={outOfOrderElevator}>
                    </ElevatorCounter>
                </div>
                    
                    :

                    <div data-testid="sign-in">
                    <SignIn></SignIn>
                    </div>
                }
            </div>
        </div>

    );
};

export default Home;