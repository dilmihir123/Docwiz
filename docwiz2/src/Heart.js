import React, { Component } from "react";
import "./App.css";
import heart from "./cardiac-ailment.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

import { Jumbotron, Button, Col, Image } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";

class Heart extends Component {
  home() {
    let path = "./UserDash";
    this.props.history.push(path);
  }
  render() {
    return (
      <div className="m">
        <div className="heart">
          <Container>
            <Row>
              <Col>
                <Image src={heart} rounded fluid />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="card">
          <Jumbotron fluid>
            <Container>
              <h1>Heart Disease</h1>
              <h5>
                {" "}
                Heart disease is a term covering any disorder of the heart{" "}
              </h5>
              <p>
                {" "}
                Unlike cardiovascular disease, which describes problems with the
                blood vessels and circulatory system as well as the heart, heart
                disease refers to issues and deformities in the heart itself..{" "}
                <br />
                The symptoms of heart disease depend on which condition is
                affecting an individual. However, common symptoms include chest
                pain, breathlessness, and heart palpitations. The chest pain
                common to many types of heart disease is known as angina, or
                angina pectoris, and occurs when a part of the heart does not
                receive enough oxygen. <br />
                Angina can be triggered by stressful events or physical exertion
                and normally lasts under 10 minutes. <br />
                Heart attacks can also occur as a result of different types of
                heart disease. The signs of a heart attack are similar to angina
                except that they can occur during rest and tend to be more
                severe. <br />
                The symptoms of a heart attack can sometimes resemble
                indigestion. Heartburn and a stomach ache can occur, as well as
                a heavy feeling in the chest. <br />
              </p>
              <br />

              <h3>Some of the common ailments are listed here:</h3>
              <br />
              <p>
                <b>Angina (Chest Pain)</b> – It may feel like indigestion, but
                can be a symptom that can lead to more fatal diseases.
                <br />
                <b>Coronary heart disease </b> –It occurs due to deposition of
                plaque in the arteries, restricting blood flow into the heart,
                starving it of oxygen. If this ruptures, it could lead to heart
                attack, and many times fatal as well.
                <br />
                <b>Enlarged Heart (Cardiomegaly)</b> –This is caused by high
                blood pressure or due to coronary heart disease, by which the
                heart loses its ability to effectively pump blood and thus leads
                to a congestive heart attack.
                <br />
                <b>Heart failure </b>– The heart supplies blood to the rest of
                the body and a heart failure is a condition in which the heart
                fails to do its job effectively. This can lead to shortness of
                breath and swelling of legs.
                <br />
                <b>Rheumatic heart disease</b> – This is a bacterial infection,
                often affecting children and affects heart valves and joints.
                <br />
                <b>Congenital heart disease</b> – This is a defect in heart
                formation due to birth, like a hole in the heart, which may go
                undetected for many years.
                <br />
                <b>Atrial Fibrillation</b> – An irregular heartbeat condition
                that can lead to a heart attack or a stroke.
                <br />
                <b>Arrhythmias</b> – Irregular heart rhythm or fluttering of the
                heart could be a sign of an impending heart disorder
                <br />
                <b>Heart muscle disease (Cardiomyopathy)</b> – The heart is
                either enlarged, stiffened, or thickened and thus its muscles
                lose the ability to pump blood.
              </p>
              <p>
                <Button
                  onClick={this.home.bind(this)}
                  variant="primary"
                  type="submit"
                >
                  Home Page
                </Button>
              </p>
            </Container>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default Heart;
