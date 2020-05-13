import React, { Component } from "react";
import "./App.css";
import { Spring } from "react-spring/renderprops";
import doc1 from "./doc1.png";
import doc2 from "./doc-2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import PersistentDrawerLeft from "./SideNav";
import {
  Container,
  Jumbotron,
  Modal,
  Button,
  ButtonToolbar
} from "react-bootstrap";
import {
  Map,
  InfoWindow,
  Marker,
  google,
  maps,
  GoogleApiWrapper
} from "google-maps-react";
// import { white } from "material-ui/colors/white";

export class MapContainer6 extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <div>
        <PersistentDrawerLeft />
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          delay={{ delay: 3000, duration: 3000 }}
        >
          {props => (
            <div style={props}>
              <Jumbotron
                style={{ marginLeft: "200px", height: "30vh", width: "70%" }}
              >
                <Container>
                  <h4>
                    You most likely don't have any problems, if you are in need
                    of additional assistance, here are some of the best
                    hospitals in your visinity.
                  </h4>
                  <h6>Chennai's best Hospitals</h6>
                  <p>
                    Kindly direct to your nearest Hospital and specialised
                    doctors from list below!{" "}
                  </p>
                </Container>
              </Jumbotron>
            </div>
          )}
        </Spring>
        {/* <div className="maps1"> */}
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          delay={{ delay: 5000, duration: 5000 }}
        >
          {props => (
            <div style={props}>
              <Map
                style={{ marginLeft: "200px", height: "55vh", width: "70%" }}
                google={this.props.google}
                initialCenter={{
                  lat: 13.067439,
                  lng: 80.237617
                }}
                zoom={11}
                onClick={this.onMapClicked}
              >
                {/* <Marker onClick={this.onMarkerClick}
                name={'Current location'} /> */}
                <Marker
                  onClick={this.onMarkerClick}
                  title={"Apollo Spectra MRC Nagar"}
                  name={"Apollo Spectra"}
                  position={{ lat: 13.018014, lng: 80.271083 }}
                />
                <Marker
                  onClick={this.onMarkerClick}
                  title={"Harikrishnan's Heart Care"}
                  name={"Harikrishnan's Heart Care"}
                  position={{ lat: 13.072455, lng: 80.20061 }}
                />
                <Marker
                  onClick={this.onMarkerClick}
                  title={"MIOT Intnl"}
                  name={"MIOT Intnl"}
                  position={{ lat: 13.020948, lng: 80.18483 }}
                />

                <InfoWindow
                  marker={this.state.activeMarker}
                  visible={this.state.showingInfoWindow}
                >
                  <div className="InfoW">{this.state.selectedPlace.name}</div>
                </InfoWindow>
              </Map>
            </div>
          )}
        </Spring>
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          delay={{ delay: 8000, duration: 8000 }}
        >
          {props => (
            <div style={props}>
              <Jumbotron
                style={{
                  backgroundColor: "white",
                  marginTop: "470px",
                  marginLeft: "200px",
                  height: "120vh",
                  width: "70%"
                }}
              >
                <Container>
                  <ul style={{ listStyle: "none" }}>
                    <li data-val="Audi">
                      <img
                        src={doc1}
                        style={{ height: "200px", width: "200px" }}
                      />
                      <h1>Dr.X</h1>
                      <h3>General Physician at Kauvery Hospital</h3>
                      <h5>Ph No. 9987538827</h5>
                    </li>
                    <br />
                    <li data-val="BMW">
                      <img
                        src={doc2}
                        style={{ height: "200px", width: "200px" }}
                      />
                      <h1>Dr.Y</h1>
                      <h3>General Physician at Apollo Hospital</h3>
                      <h5>Ph No. 9537738887</h5>
                    </li>
                  </ul>
                </Container>
              </Jumbotron>
            </div>
          )}
        </Spring>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBeNbuNVn_z95rVs0SVfyMEnIhCh0KuIWg"
})(MapContainer6);
