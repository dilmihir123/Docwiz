import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Button, Form, FormGroup } from "react-bootstrap";
import PersistentDrawerLeft from "./SideNav";

class Malaria extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: ""
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();
    const fd = new FormData();
    fd.append("file", this.uploadInput.files[0]);
    axios.post("http://127.0.0.1:5000/mal", fd).then(res => {
      console.log(res);
      if (res.data.results === "Uninfected") {
        this.props.history.push("/nodisease");
      } else {
        this.props.history.push("/mapmalaria");
      }
    });
  }
  render() {
    return (
      <div>
        <PersistentDrawerLeft />
        <div className="heading1">
          <h1>Upload an image to detect Malaria</h1>
        </div>
        <div className="Signup">
          <input
            type="file"
            ref={ref => {
              this.uploadInput = ref;
            }}
          />
          <button onClick={this.handleUploadImage}>Upload</button>
        </div>
      </div>
    );
  }
}

export default Malaria;
