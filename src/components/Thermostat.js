import React from "react";
import DonutChart from "./ignore/DonutChart";

function Thermostat({ currentTemp }){
  return (<DonutChart value={currentTemp || 23 } />)
}
export default Thermostat