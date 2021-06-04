import Container from "react-bootstrap/Container";

import Main from "../../components/Navi/main";

import './home.css'
function Home() {
  return (
    <Container className='fixedContainer' fluid>
      
      <div className="row justify-content-center">

  
          <Main />
 

      </div>
    </Container>
  );
}
export default Home;
