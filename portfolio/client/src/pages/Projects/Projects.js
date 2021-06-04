import "bootstrap/dist/css/bootstrap.min.css";
import API from "../../Utils/API/API";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import  CardColumns  from "react-bootstrap/CardColumns";
import RepoCard from "../../components/Card/RepoCard.js";
import TopCard from "../../components/Card/TopCard";

function Projects() {
  const [state, setState] = useState({ repos: [] });
  useEffect(() => {
    const remoteApiPromise = API.getRepos();
    remoteApiPromise.then((items) => {

      const transfromedData = items.data;
    
      setState((prevState) => ({
        ...prevState,
        repos: transfromedData,
      }));
    });
  }, []);

  return (
    <Container fluid='true'>
        <TopCard/>
      <CardColumns>
        {state.repos.map((item) => (
          <RepoCard key={item.id}
            Name={item.name}
            Description={item.description}
            url={item.html_url}
          ></RepoCard>
        ))}
      </CardColumns>
    </Container>
  );
}
export default Projects;
