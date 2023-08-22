import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardImg } from 'reactstrap';
import AccordionComponent from './components/AccordionComponent';
import { accordionData } from './utils/content';
import image from './images/illustration-woman-online-desktop.svg';
import boxImage from './images/illustration-box-desktop.svg';

const App = () => {
  
  return (
    <>
      <Container>
        <Card className='border-0'>
          <Row className='row-content'>
            
           
            <Col>

              <CardImg src= {image} />
              
            </Col>
        

        
    
            <Col>
              <CardBody>
              
                <CardTitle tag='h1'>FAQ</CardTitle>
                <div className="accordion border-0">
                  {accordionData.map(({ title, content }) => (
                    <AccordionComponent title={title} content={content} />
                  ))}
                </div>
              </CardBody>
            </Col>
      
          </Row>
        </Card>
        
      </Container>
      
    </>
  );
};

export default App;
