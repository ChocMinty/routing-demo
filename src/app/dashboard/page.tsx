import LineChart from "./line-chart";

function BarChart() {
  return <h1>barChart</h1>;
}

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <BarChart />
      <LineChart />
    </div>
  );
}
