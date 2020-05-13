import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Table extends Component {
  constructor(props) {
    super(props);
  }
  DeleteStudent = () => {
    axios
      .delete("http://127.0.0.1:5000/getdatafortable" + this.props.obj.ID)
      .then(json => {
        if (json.data.Status === "Delete") {
          alert("Record deleted successfully!!");
        }
      });
  };
  render() {
    return (
      <tr>
        <td>{this.props.obj.Date}</td>
        <td>{this.props.obj.age}</td>
        <td>{this.props.obj.ca}</td>
        <td>{this.props.obj.chol}</td>
        <td>{this.props.obj.cp}</td>
        <td>{this.props.obj.exang}</td>
        <td>{this.props.obj.fbs}</td>
        <td>{this.props.obj.oldpeak}</td>
        <td>{this.props.obj.restecg}</td>
        <td>{this.props.obj.sex}</td>
        <td>{this.props.obj.slope}</td>
        <td>{this.props.obj.target}</td>
        <td>{this.props.obj.thal}</td>
        <td>{this.props.obj.thalach}</td>
        <td>{this.props.obj.trestbs}</td>
        <td>
          <Link to={"/edit/" + this.props.obj.ID} className="btn btn-success">
            Edit
          </Link>
        </td>
        <td>
          <button
            type="button"
            onClick={this.DeleteStudent}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
export default Table;
