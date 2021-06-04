import "bootstrap/dist/css/bootstrap.min.css";
import  Container  from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "./RepoCard.css";

function TopCard() {
  return (
    <Container fluid="true">
       <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <Card id="topCard">
            <Card.Body className="text-center">
              <Card.Title>
                These are my Top 12 most recently updated repos{" "}
              </Card.Title>
              <Card.Subtitle>Here you can always stay up to date on what I'm working on!</Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
        <div className="col-3"></div>
      </div> 
    </Container>
  );
}

export default TopCard;
