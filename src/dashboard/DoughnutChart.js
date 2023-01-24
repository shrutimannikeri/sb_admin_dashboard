import React from "react";
import Card from "react-bootstrap/Card";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Dropdown from 'react-bootstrap/Dropdown';
ChartJS.register(ArcElement, Tooltip, Legend);
export function DoughnutChart() {
  const data = {
    
    
    datasets: [
      {
        data: [55, 30, 15],
        backgroundColor: [
          '#4e73df',
          '#1cc88a',
          '#36b9cc'
        ],
        cutout:"80%",
        
      }
    ],
    labels: ['Direct', 'Social ', 'Referral']
  };

  const options = {
    responsive: true,
    title: {
      display: true,
      text: 'Doughnut Chart',
      
    }
  };
  return (
    <div className="col-xl-4 col-lg-5">
      {/*  <!-- Pie Chart --> */}
      <Card className="shadow mb-4 text-center">
        {/*  <!-- Card Header - Dropdown --> */}
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
          <Dropdown className="no-arrow">
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
        </div>
        {/*  <!-- Card Body --> */}
        <Card.Body className="card-body">
          <Doughnut data={data} options={options}/>
        </Card.Body>
      </Card>
    </div>
  );
}
