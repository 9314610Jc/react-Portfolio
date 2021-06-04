import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Bio from "../../components/Bio/Bio";

function AboutMe() {
  return (
    <Container className="fixedContainer" fluid>
      <div className="row justify-content-center">
     
       
          <Bio></Bio>
        </div>
       
     
    </Container>
  );
}
export default AboutMe;
