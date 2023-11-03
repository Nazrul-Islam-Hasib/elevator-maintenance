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

