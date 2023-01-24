import React from "react";
import { DoughnutChart } from "./DoughnutChart";
import { AreaChart } from "./AreaChart";

export function ChartParts() {
  return (
    <div className="row">
      <AreaChart />
      <DoughnutChart />
    </div>
  );
}
