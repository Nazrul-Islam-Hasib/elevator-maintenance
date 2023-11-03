# Server API Endpoints

This section provides documentation for the server's API endpoints, including the routes and controllers used.

## Users

### Get All Users

- **Endpoint:** `/users`
- **HTTP Method:** GET
- **Controller Method:** `UserController.getAllUsers`
- **Description:** Retrieve a list of all users.

### Get User by Email

- **Endpoint:** `/users/:email`
- **HTTP Method:** GET
- **Controller Method:** `UserController.getUser`
- **Description:** Retrieve user information based on their email.

## Elevators

### Get All Elevators

- **Endpoint:** `/elevators`
- **HTTP Method:** GET
- **Controller Method:** `ElevatorController.getAllElevators`
- **Description:** Retrieve a list of all elevators.

### Get Elevators by User Email

- **Endpoint:** `/elevators/:email`
- **HTTP Method:** GET
- **Controller Method:** `ElevatorController.getElevatorsByUser`
- **Description:** Retrieve elevators associated with a specific user, identified by their email.

---

# User Schema

This section documents the schema used for the user data in the application.

## Fields

The user schema consists of the following fields:

- **Name** (Type: String, Required: Yes): Represents the user's name.
- **Email** (Type: String, Required: Yes): Represents the user's email address.
- **Picture** (Type: String, Required: Yes): Represents the URL of the user's picture.

## Model

The user schema is used to create a model named 'Users' with the following interfaces:

- `IUser`: Represents the shape of a user document.
- `UserModel`: Represents the User model with specific methods and statics.

# Elevator Schema

This section documents the schema used for elevator data in the application.

## Fields

The elevator schema consists of the following fields:

- **Fabrication Number** (Type: String, Required: Yes): Represents the fabrication number of the elevator.
- **Address** (Type: String, Required: Yes): Represents the address of the elevator.
- **Floor Number** (Type: Number, Required: Yes): Represents the number of floors the elevator serves.
- **Device Identification Number** (Type: String, Required: Yes): Represents the device identification number of the elevator.
- **Manufacturer Name** (Type: String, Required: Yes): Represents the manufacturer's name of the elevator.
- **Production Year** (Type: Number, Required: Yes): Represents the production year of the elevator.
- **Elevator Type** (Type: String, Required: Yes): Represents the type of the elevator.
- **State** (Type: String, Required: Yes): Represents the state of the elevator.
- **User** (Type: String, Reference: 'User', Required: Yes): Represents the user associated with the elevator.
- **Warning Message** (Type: String, Required: No): Represents any warning message associated with the elevator.
- **Reason** (Type: String, Required: No): Represents the reason for the elevator's state.
- **Chart** (Type: Object, Required: No): Represents a chart object containing data for the elevator.

## Subfields in the Chart Object

- **Name** (Type: String, Required: No): Represents the name of the chart.
- **Data** (Type: Array, Required: No): Contains an array of objects representing analytical data for the elevator. Each object includes:
  - **Time** (Type: String, Required: No): Represents the timestamp for the data.
  - **Door Cycles Count** (Type: Number, Required: No): Represents the count of door cycles.
  - **Door Openings Count** (Type: Number, Required: No): Represents the count of door openings.
  - **Door Closings Count** (Type: Number, Required: No): Represents the count of door closings.
  - **Door Closed Count** (Type: Number, Required: No): Represents the count of door closed events.
  - **Door Opened Count** (Type: Number, Required: No): Represents the count of door opened events.

## Model

The elevator schema is used to create a model named 'Elevators' with the following interfaces:

- `IElevator`: Represents the shape of an elevator document.
- `ElevatorModel`: Represents the Elevator model with specific methods and statics.





