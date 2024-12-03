import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// Bar Chart Data
const barChartData = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Monthly Users",
      data: [120, 200, 150, 80, 300],
      backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#f6c23e", "#e74a3b"],
    },
  ],
};

// Line Chart Data
const lineChartData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Daily Activities",
      data: [50, 70, 90, 30, 80, 120, 60],
      borderColor: "#4e73df",
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      tension: 0.4,
    },
  ],
};

function Dashboard() {
  return (
    <Container fluid className="mt-5">
      {/* Row 1: Summary Cards */}
      <Row className="gy-4">
        <Col sm={12} md={6} lg={3}>
          <Card className="shadow border-left-primary">
            <Card.Body>
              <Card.Title className="text-primary fw-bold">
                Total Users
              </Card.Title>
              <h4 className="fw-bold">1,234</h4>
              <p className="text-muted">Updated just now</p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <Card className="shadow border-left-success">
            <Card.Body>
              <Card.Title className="text-success fw-bold">
                Active Roles
              </Card.Title>
              <h4 className="fw-bold">12</h4>
              <p className="text-muted">Managed effectively</p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <Card className="shadow border-left-warning">
            <Card.Body>
              <Card.Title className="text-warning fw-bold">
                Active Sessions
              </Card.Title>
              <h4 className="fw-bold">57</h4>
              <p className="text-muted">Last 24 hours</p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <Card className="shadow border-left-danger">
            <Card.Body>
              <Card.Title className="text-danger fw-bold">
                Failed Logins
              </Card.Title>
              <h4 className="fw-bold">3</h4>
              <p className="text-muted">Critical actions required</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Row 2: Charts */}
      <Row className="gy-4 mt-4">
        <Col sm={12} md={6}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="fw-bold text-dark">
                Monthly Users
              </Card.Title>
              <Bar data={barChartData} />
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="fw-bold text-dark">
                Weekly Activities
              </Card.Title>
              <Line data={lineChartData} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
