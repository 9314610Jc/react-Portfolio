import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./RepoCard.css";

function RepoCard(props) {
  return (
    <Card id="repoCard">
      <Card.Body>
        <Card.Title className="text-center">{props.Name}</Card.Title>
        <Card.Text id="description">{props.Description}</Card.Text>
        <Card.Link
          id="link"
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Repo Url
        </Card.Link>
      </Card.Body>
    </Card>
  );
}
export default RepoCard;
