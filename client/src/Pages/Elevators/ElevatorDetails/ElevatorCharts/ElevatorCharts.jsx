/* eslint-disable react/prop-types */
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ElevatorCharts = ({ chartData }) => {
    // Map chartData to convert the 'time' field to Date objects and format it
    const chartDataWithDates = chartData.map(item => ({
        ...item,
        time: new Date(item.time),
        formattedTime: formatDate(new Date(item.time)),
    }));

    return (
        <BarChart
            width={1000}
            height={600}
            data={chartDataWithDates}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="formattedTime" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="door_closed_count" fill="#7abde6" activeBar={<Rectangle fill="pink" stroke="blue" />} />
            <Bar dataKey="door_opened_count" fill="#fadf00" activeBar={<Rectangle fill="gold" stroke="purple" />} />
            <Bar dataKey="door_cycles_count" fill="#7f1832" activeBar={<Rectangle fill="pink" stroke="blue" />} />
            <Bar dataKey="door_openings_count" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
            <Bar dataKey="door_closings_count" fill="#0e5135" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        </BarChart>
    );
};

// Function to format the date as "YYYY-MM-DD"
function formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Add leading zero if needed
    const day = date.getDate().toString().padStart(2, '0'); // Add leading zero if needed
    return `${year}-${month}-${day}`;
}

export default ElevatorCharts;
