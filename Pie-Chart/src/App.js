import React, { Component } from "react";
import "./App.css";
import * as shape from "d3-shape";
import * as scale from "d3-scale";
import * as chromatic from "d3-scale-chromatic";
class App extends Component {
  render() {
    const data = [1, 1, 2, 3, 5, 8, 13, 21];
    const PieGenerator = shape.pie();
    const DataOfArcs = PieGenerator(data);

    console.log(DataOfArcs);

    const arcGenerator = shape
      .arc()
      .innerRadius(0)
      .outerRadius(100);

    const colorScale = scale
      .scaleLinear()
      .domain([1, 21])
      .range(["grey", "black"]);
    //chromatic.schemeCategory10[i]
    const colorScale1 = scale.scaleSequential(chromatic.interpolateRainbow).domain([1, 21]);
    return (
      <div className="App">
        <svg width="600" height="600">
          {DataOfArcs.map((el, i) => (
            <path key={i + "arc"} d={arcGenerator(el)} fill={colorScale1(data[i])} transform="translate(300,300)" />
          ))}
        </svg>
      </div>
    );
  }
}

export default App;
