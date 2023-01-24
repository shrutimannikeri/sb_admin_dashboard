import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from "react-chartjs-2";
import Dropdown from 'react-bootstrap/Dropdown';
import Card from "react-bootstrap/Card";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);


const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun" ,"Jul", "Aug","Sep","Oct","Nov"],
  datasets: [
    {
      label: "First dataset",
      data: [0,10000,16000, 15000,10000,20000,15000,25000,20000,30000,25000,40000],
      fill: true,
      backgroundColor: "#f6f8fd",
      borderColor: "#4e73df"
    }
  ]
};

export function AreaChart() {
  return (
    <div className="col-xl-8 col-lg-7">
      <Card className="shadow mb-4">
        {/*  <!-- Card Header - Dropdown --> */}
        <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">
            Earnings Overview
          </h6>
          <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
      <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        

      <Dropdown.Header>Dropdown Header:</Dropdown.Header>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </Card.Header>
        {/*  <!-- Card Body --> */}
        <Card.Body>
         
          <Line  data={data} />
         
        </Card.Body>
      </Card>
    </div>
  );
}
