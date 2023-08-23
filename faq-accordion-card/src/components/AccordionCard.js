import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardImg } from 'reactstrap';
import AccordionItem from './AccordionItem';
import { accordionData } from '../utils/content';
import image from '../images/illustration-woman-online-desktop.svg';

const AccordionCard = () => {
  
  return (
    <>
      <Container className='container container-fluid'>
        <Card className='border-0 align-middle'>
          <Row className='row-content'>

            <Col sm='10'>
                <CardImg src={image} className='img-fluid' />
            </Col>


            <Col sm='12'>
              <CardBody>
              
                <CardTitle tag='h1'>FAQ</CardTitle>
                <div className="accordion accordion-flush border-0">
                  {accordionData.map(({ title, content }) => (
                    <AccordionItem title={title} content={content} />
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

export default AccordionCard;
