import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Container } from "react-bootstrap/";
import "./Bio.css";
import Card from "react-bootstrap/Card";

function Bio() {
  return (
    <Container  fluid>
      <Accordion defaultActiveKey='0'>
        <Card className='transparentHeader'>
          <Accordion.Toggle
            className="text-center"
            as={Card.Header}
            eventKey="0"
            
          >
            Introduction
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="0">
            <Card.Body className='transparentBody'>
              Hey, I'm Josh. I'd like to start by saying thank you for visiting
              my website! This site was made using react, and I learned a lot
              just from coding this simple portfolio. When people ask me why I
              choose to Program; I think back to when I graduated high school. I
              was lost in life some could say. I had drive, but no direction
              struggling to choose a career path; my first thought was
              Entrepreneurship. So the first thing I did was sell my car and buy
              a truck, for the whole summer after high school I would go along
              in my truck doing odd jobs like moving furniture, appliances and
              filling in potholes. When august came and it was time for school,
              I still had no idea what I was going to do. That's when I heard
              about UNC Bootcamps, and all of a sudden I got a blast of energy,
              I remembered my cousin is a Software engineer at Upwork. I asked
              about the Bootcamp and he told me it was a pretty good idea next
              thing I know I'm enrolling myself into said Bootcamp. It was in
              the Bootcamp where I found my love for problem-solving and with
              that came my love for not only programming but also learning.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card  className='transparentHeader'>
          <Accordion.Toggle
            className="text-center"
            as={Card.Header}
            eventKey="1"
          >
            Brand Statement
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="1">
            <Card.Body className='transparentBody'>
              FULLSTACK Web-Developer, Certified by UNC-Chapel Hill in
              Full-stack web development where I sharpened my skills in; HTML,
              CSS, JavaScript, SQL, and NoSQL databases, and Git. I applied
              aspects of UX and agile development in a recent project where I
              worked in a team of four to develop an app that allows the user to
              find the cheapest flights while also using a covid data API to
              relay local covid data for their destination. I aspire to work on,
              whether it’s solely or for a company to create applications that
              make people's lives easier. As an example, I am currently
              programming an app that can map out user set routes, because as a
              street sweeper that is something my company lacks.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card  className='transparentHeader'>
          <Accordion.Toggle
            className="text-center"
            as={Card.Header}
            eventKey="2"
          >
            Education
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="2">
            <Card.Body className='transparentBody'>
              UNC CERTIFICATE PROGRAMS - CERTIFIED FULLSTACK WEB DEVELOPMENT
              NOVEMBER 2020- MAY 2021
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
}
export default Bio;
