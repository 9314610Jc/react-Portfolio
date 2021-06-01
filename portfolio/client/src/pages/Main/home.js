import { Container } from "react-bootstrap";

import Main from "../../components/main";
function Home() {
  return (
    <Container fluid="true">
      <div className="main-view">
        <Main />
      </div>
    </Container>
  );
}
export default Home;
