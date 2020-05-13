// import React, { Component } from "react";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
// import { Button, Form, FormGroup } from "react-bootstrap";

// class DetectBrc extends Component {
//   constructor(props) {
//     super(props);
//     // this.state = {
//     //   : "",
//     //   : "",
//     //   : "",
//     //   : "",
//     //   : "",
//     //   : "",
//     //   : "",
//     //   : ""
//     // };
//   }

//   Detectbrc() {
//     debugger;
//     alert("ok");
//     // let obj = {
//     //   : this.state.,
//     //   : this.state.,
//     //   : this.state.,
//     //   : this.state.,
//     //   : this.state.=,
//     //   : this.state.,
//     //   : this.state.,
//     //   : this.state.
//     // };
//     console.log("datas", obj);
//     axios.post("http://127.0.0.1:5000/brc", obj).then(json => {
//       if (json) {
//         console.log(json);
//         localStorage.setItem("returndata", JSON.stringify(json));
//         //this.state.age = json.data.results[0];
//         alert(json.data.results[0]);
//         alert("Data Save Successfully");
//       } else {
//         alert("Data not Saved");
//         debugger;
//       }
//     });
//   }

//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   render() {
//     return (
//       <div className="Fit">
//         <br></br>
//         <h1 className="heading">Detect Alzheimers</h1>
//         <div className="Signup">
//           <Form>	'radius_mean', 'texture_mean', 'perimeter_mean',
//        'area_mean', 'smoothness_mean', 'compactness_mean', 'concavity_mean',
//        'concave points_mean', 'symmetry_mean', 'fractal_dimension_mean',
//        'radius_se', 'texture_se', 'perimeter_se', 'area_se', 'smoothness_se',
//        'compactness_se', 'concavity_se', 'concave points_se', 'symmetry_se',
//        'fractal_dimension_se', 'radius_worst', 'texture_worst',
//        'perimeter_worst', 'area_worst', 'smoothness_worst',
//        'compactness_worst', 'concavity_worst', 'concave points_worst',
//        'symmetry_worst', 'fractal_dimension_worst'
//             <Form.Group controlId="radius_mean">
//               <Form.Label>:</Form.Label>
//               <Form.Control
//                 name=""
//                 onChange={this.handleChange}
//                 value={this.state.}
//                 type="number"
//                 placeholder=""
//               />
//               <Form.Text className="text-muted">

//               </Form.Text>
//             </Form.Group>

//             <Form.Group controlId="texture_mean">
//               <Form.Label>:</Form.Label>
//               <Form.Control
//                 name=""
//                 onChange={this.handleChange}
//                 value={this.state.}
//                 type="number"
//                 placeholder=""
//               />
//               <Form.Text className="text-muted">

//               </Form.Text>
//             </Form.Group>

//             <Form.Group controlId="perimeter_mean">
//               <Form.Label>:</Form.Label>
//               <Form.Control
//                 name=""
//                 onChange={this.handleChange}
//                 value={this.state.}
//                 type="number"
//                 placeholder=""
//               />
//               <Form.Text className="text-muted">

//               </Form.Text>
//             </Form.Group>

//             <Form.Group controlId="area_mean">
//               <Form.Label>:</Form.Label>
//               <Form.Control
//                 name=""
//                 onChange={this.handleChange}
//                 value={this.state.}
//                 type="number"
//                 placeholder=""
//               />
//               <Form.Text className="text-muted">

//               </Form.Text>
//             </Form.Group>

//             <Form.Group controlId="">
//               <Form.Label>:</Form.Label>
//               <Form.Control
//                 name=""
//                 onChange={this.handleChange}
//                 value={this.state.}
//                 type="number"
//                 placeholder=""
//               />
//               <Form.Text className="text-muted">

//               </Form.Text>
//             </Form.Group>

//             <Form.Group controlId="">
//               <Form.Label>:</Form.Label>
//               <Form.Control
//                 name=""
//                 onChange={this.handleChange}
//                 value={this.state.}
//                 type="number"
//                 placeholder=""
//               />
//               <Form.Text className="text-muted">

//               </Form.Text>
//             </Form.Group>

//             <Form.Group controlId="">
//               <Form.Label>:</Form.Label>
//               <Form.Control
//                 name=""
//                 onChange={this.handleChange}
//                 value={this.state.}
//                 type="number"
//                 placeholder=""
//               />
//               <Form.Text className="text-muted">

//               </Form.Text>
//             </Form.Group>

//             <Form.Group controlId="">
//               <Form.Label>:</Form.Label>
//               <Form.Control
//                 name=""
//                 onChange={this.handleChange}
//                 value={this.state.}
//                 type="number"
//                 placeholder=""
//               />
//               <Form.Text className="text-muted">

//               </Form.Text>
//             </Form.Group>

//             <Form.Group controlId="">
//               <Form.Label>:</Form.Label>
//               <Form.Control
//                 name=""
//                 onChange={this.handleChange}
//                 value={this.state.}
//                 type="number"
//                 placeholder=""
//               />
//               <Form.Text className="text-muted">

//               </Form.Text>
//             </Form.Group>

//             <Form.Group controlId="">
//               <Form.Label>:</Form.Label>
//               <Form.Control
//                 name=""
//                 onChange={this.handleChange}
//                 value={this.state.}
//                 type="number"
//                 placeholder=""
//               />
//               <Form.Text className="text-muted">

//               </Form.Text>
//             </Form.Group>
//             <FormGroup>
//               <Button
//                 onClick={this.Detectbrc.bind(this)}
//                 variant="primary"
//                 type="submit"
//               >
//                 Detect
//               </Button>
//             </FormGroup>
//           </Form>
//         </div>
//       </div>
//     );
//   }
// }
// export default DetectBrc;
