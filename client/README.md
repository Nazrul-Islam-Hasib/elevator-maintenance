# Main Layout Component

The `Main` layout component is a high-level layout used to structure the main content of your application. It includes a navigation bar, the primary content (typically rendered by React Router), and a footer.

## Component Structure

The `Main` layout component is structured as follows:

1. **Navbar**: The navigation bar component (`Navbar`) is displayed at the top of the layout. It typically contains links and navigation elements to help users navigate the application.

2. **Outlet**: The `<Outlet>` component from React Router is used to render the primary content of your application. The content rendered inside the `<Outlet>` depends on the specific route and view being displayed.

3. **Footer**: The footer component (`Footer`) is displayed at the bottom of the layout. It often contains information, links, or additional content relevant to the application.

## Usage

To use the `Main` layout component, import it into your application and include it in your route configuration or any part of your application where you need this layout.


# Home Component

The `Home` component is a React component responsible for displaying elevator statistics based on the user's authentication status. It fetches data from the server and renders an `ElevatorCounter` component to display the counts of operational, warning, and out-of-order elevators when the user is authenticated. If the user is not authenticated, it renders a `SignIn` component.

## Component Structure

The `Home` component consists of the following main parts:

1. **Data Fetching**: It makes asynchronous requests to fetch data from the server using Axios based on the user's authentication status.

2. **Rendering**:
   - When the user is authenticated, it renders an `ElevatorCounter` component to display elevator statistics.
   - When the user is not authenticated, it renders a `SignIn` component to prompt the user to sign in.

# ElevatorCounter Component

The `ElevatorCounter` component is a React component responsible for displaying elevator statistics, including the counts of operational, out-of-order, and warning elevators. It provides buttons to navigate to details for each elevator category.

## Component Structure

The `ElevatorCounter` component consists of the following main parts:

1. **Navigation**: It uses the `useNavigate` hook from React Router to handle navigation when users click on the "View Details" buttons.

2. **Rendering**: The component renders statistics for each elevator category (operational, out-of-order, and warning). It displays the count of elevators in each category and provides a button to view more details for each category.


# Elevators Component

The `Elevators` component is a React component responsible for displaying a list of elevators based on their state (operational, out-of-order, or warning). It retrieves elevator data from the location state and presents it in a tabular format. Each elevator is linked to a detailed view.

## Component Structure

The `Elevators` component consists of the following main parts:

1. **Data Retrieval**: It retrieves elevator data from the location state based on the type (operational, out-of-order, or warning) passed via the route.

2. **Rendering**: The component renders the elevator data in a tabular format. Each row in the table represents an elevator, and users can click on the "View Details" button to navigate to a detailed view of each elevator.


# ElevatorDetails Component

The `ElevatorDetails` component is a React component responsible for displaying detailed information about a specific elevator. It retrieves elevator data from the location state and presents details such as device identification number, manufacturer name, production year, elevator type, state, and optional warning messages and reasons. It also includes a chart view if chart data is available.

## Component Structure

The `ElevatorDetails` component consists of the following main parts:

1. **Data Retrieval**: It retrieves elevator data from the location state.

2. **Rendering**:
   - The component renders detailed elevator information in a card-style layout.
   - It displays attributes such as device identification number, manufacturer name, production year, elevator type, and state.
   - Optional attributes like warning messages and reasons are shown if available.
   - It includes a chart view (using the `ElevatorCharts` component) if chart data is available.


# ElevatorCharts Component

The `ElevatorCharts` component is a React component responsible for rendering bar charts using data provided as `chartData`. It uses the `recharts` library to display data with various bars representing different aspects of elevator operations.

## Component Structure

The `ElevatorCharts` component consists of the following main parts:

1. **Data Transformation**: It maps and formats the provided `chartData`, converting the 'time' field into Date objects and formatting it as "YYYY-MM-DD."

2. **Rendering**: The component renders a bar chart using the `recharts` library. It visualizes data for attributes such as door closed count, door opened count, door cycles count, door openings count, and door closings count.


