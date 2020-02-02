import React from "react";
import { Doughnut } from "react-chartjs-2";
// import { defaults } from "react-chartjs-2";

function Donut(props) {
  const data = {
    labels: ["One", "Two", "Three"],
    datasets: [
      {
        data: [25, 30, 12],
        backgroundColor: ["#FF6384", "rgba(112, 226, 108, 0.89)", "yellow"],
        hoverBackgroundColor: ["#FF6384", "rgba(112, 226, 108, 0.89)", "yellow"]
      }
    ]
  };

  return (
    <section>
      <h3 className="DoughnutHead">
        <u>Example Doughnut Chart</u>
      </h3>
      <Doughnut
        data={data}
        options={{
          legend: {
            labels: {
              fontColor: "Blue"
            }
          }
        }}
      />
    </section>
  );
}

export default Donut;
