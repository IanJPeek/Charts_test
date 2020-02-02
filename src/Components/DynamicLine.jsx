import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class DynamicLine extends Component {
  state = {
    labels: [
      "neutral 😐",
      "happy 😀",
      "sad 🙁",
      "angry 😡",
      "fearful 😬",
      "disgusted 🤢",
      "surprised 😮"
    ],
    datasets: [
      {
        label: "neutral 😐",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "green",
        borderColor: "green",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "black",
        pointBackgroundColor: "green",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "green",
        pointHoverBorderColor: "green",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40,]
      }
    ]
  };

  componentWillMount() {
    this.setState(this.state);
  }

  componentDidMount() {
    let _this = this;

    setInterval(function() {
      let oldDataSet = _this.state.datasets[0];
      let newData = [];
      //add new info via updateData from eg (props)?
      let updateData = [10, 20, 30, 5, 15, 25, 5];

      for (var x = 0; x < _this.state.labels.length; x++) {
        newData.push(updateData[x]);
        // newData.push(Math.floor(Math.random() * 100));
      }

      let newDataSet = {
        ...oldDataSet
      };

      newDataSet.data = newData;

      let newState = {
        ...this.state,
        datasets: [newDataSet]
      };

      _this.setState(newState);
    }, 5000);
  }

  render() {
    return (
      <section>
        <h3 className="DynamicLineHead">
          <u>Example Dynamic Line Chart</u>
        </h3>
        <Line data={this.state} />
      </section>
    );
  }
}

export default DynamicLine;
