import background from "../Utils/images/background.jpg";
import github from "../Utils/images/github_64px.png";
import linkedin from "../Utils/images/linkedin_64px.png";
import Gmail from "../Utils/images/gmail_64px.png";

import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
function Main() {
  return (
    <Container
      fluid="true"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: 850,
      }}
    >
      <Row className="justify-content-center">
        <div
          className="card"
          style={{
            width: "33%",
            height: 400,
            opacity: ".45",
            marginTop: "10%",
          }}
        >
          <div className="card-body">
            <p
              style={{
                color: "black",
                opacity: "1",
                paddingTop: "20%",
                fontSize: 42,
                fontWeight: "bold",
              }}
              className="align-middle text-center fw-bold"
            >
              Joshua Coleman
            </p>
            <p
              className="text-center card-subtitle fw-bold"
              style={{ fontWeight: "bold" }}
            >
              FULLSTACK WEB DEVELOPER
            </p>
            <Row style={{ paddingTop: 50, opacity: "100%" }}>
              <Col>
                <a
                  style={{ paddingLeft: 95 }}
                  href="https://github.com/9314610Jc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <img
                    src={github}
                    alt="github"
                    style={{ height: 64, width: 64, marginLeft: "25%" }}
                  ></img>
                </a>
              </Col>
              <Col>
                <a
                  href="https://www.linkedin.com/in/joshua-coleman-b2b5531ba/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedin}
                    alt="linkedin"
                    style={{ height: 64, width: 64, marginLeft: "35%" }}
                  ></img>
                </a>
              </Col>
              <Col>
                <a href="gmail.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src={Gmail}
                    alt="gmail"
                    style={{ height: 64, width: 64, marginRight: "25%" }}
                  ></img>
                </a>
              </Col>
            </Row>
          </div>
        </div>
      </Row>
    </Container>
  );
}
export default Main;
