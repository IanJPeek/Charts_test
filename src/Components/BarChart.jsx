import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart(props) {
  const data = {
    labels: [
      "neutral",
      "happy",
      "sad",
      "angry",
      "fearful",
      "disgusted",
      "surprised"
    ],
    datasets: [
      {
        label: "Emotional Data eg",
        backgroundColor: ["green","yellow","rgba(133, 190, 212)", "red", "black", "grey", "orange"],
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [65, 59, 80, 81, 56, 55, 40, 0]
        // add eg ", 0" (dummy category) at end to set different minimum
      }
    ]
  };

  return (
    <section>
      <h3 className="BarHead">
        <u>Example Bar Chart</u>
      </h3>
      <Bar
        data={data}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: false
        }}
      />
    </section>
  );
}

export default BarChart;
