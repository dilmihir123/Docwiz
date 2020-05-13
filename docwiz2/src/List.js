import React, { Component } from "react";
import axios from "axios";
import Table from "./Table";
export default class Studentlist extends Component {
  constructor(props) {
    super(props);
    this.state = { business: [] };
  }
  componentDidMount() {
    debugger;
    axios
      .get("http://127.0.0.1:5000/getdatafortable")
      .then(response => {
        this.setState({ business: response.data });
        localStorage.setItem("table", response);

        debugger;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  tabRow() {
    return this.state.business.map(function(object, i) {
      return <Table obj={object} key={i} />;
    });
  }
  render() {
    return (
      <div>
        <h4 align="center">Student List</h4>
        <table className="table table-striped" style={{ marginTop: 10 }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>age</th>
              <th>ca</th>
              <th>chol</th>
              <th>cp</th>
              <th>exang</th>
              <th>fbs</th>
              <th>oldpeak</th>
              <th>restecg</th>
              <th>sex</th>
              <th>slope</th>
              <th>target</th>
              <th>thal</th>
              <th>thalach</th>
              <th>trestbs</th>
              <th colSpan="4">Action</th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}
