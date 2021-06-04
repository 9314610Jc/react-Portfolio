import github from "../../Utils/images/github_64px.png";
import linkedin from "../../Utils/images/linkedin_64px.png";
import Gmail from "../../Utils/images/gmail_64px.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Navi.css";
import Container from "react-bootstrap/Container";

function Main() {
  return (
    <Container>
      <div className="row">
        <div className="col-12">
          <div id="menuCard" className="card">
            <div className="card-body">
              <p
                id="name"
                className="align-middle text-center card-title fw-bold"
              >
                Joshua Coleman
              </p>
              <p id="position" className="text-center card-subtitle fw-bold">
                FULLSTACK WEB DEVELOPER
              </p>
              <Container fluid>
                <div className="row justify-content-center">
                  <div className="col-4 text-center">
                    <a
                      href="https://github.com/9314610Jc"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <img
                        src={github}
                        alt="github"
                        style={{ height: 64, width: 64 }}
                      ></img>
                    </a>
                  </div>
                  <div className="col-4 text-center">
                    <a
                      href="https://www.linkedin.com/in/joshua-coleman-b2b5531ba/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={linkedin}
                        alt="linkedin"
                        style={{ height: 64, width: 64 }}
                      ></img>
                    </a>
                  </div>
                  <div className="col-4 text-center">
                    <a
                      href="mailto:jlc42302@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={Gmail}
                        alt="gmail"
                        style={{ height: 64, width: 64 }}
                      ></img>
                    </a>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Main;
