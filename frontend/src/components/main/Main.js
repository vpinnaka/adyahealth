import React from "react";
import styled from "@emotion/styled";
import AppBar from "../appbar/AppBar";
import { Card, Button, ListGroup } from "react-bootstrap";

const Container = styled.div`
  background-color: ${({ theme }) => theme.primary};
  width: auto;
  height: 100vh;
  margin-left: 256px;
  position: relative;
  padding: 0 4rem;
`;

const PatientContainer = styled.div`
  width: 70%;
  float: left;
  padding: 10px;
`;

const DoctorContainer = styled.div`
  width: 30%;
  float: right;
  padding: 10px;
`;

const Menu = () => {
  return (
    <Container>
      <AppBar />
      <PatientContainer>
        <h2>Patients</h2>
        <Card>
          <Card.Header as="h5">Mr. Srinivas kuamr</Card.Header>
          <Card.Body>
            <Card.Title>
              36 years old male suffering from anxiety and high blood pressure
            </Card.Title>
            
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header as="h5">Ms. Indraja</Card.Header>
          <Card.Body>
            <Card.Title>
              40 years old female suffering from heart conditions
            </Card.Title>
            
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </PatientContainer>
      <DoctorContainer>
        <h2>Recommended Doctors</h2>
        <ListGroup>
          <ListGroup.Item>
            <Card>
              <Card.Header as="h5">Dr. Raj Kumar</Card.Header>
              <Card.Body>
                <Card.Title>
                Psychiatrist with 15 Years of experinace in treating patients with anxiety
                </Card.Title>
                <Button variant="primary">Refer</Button>
              </Card.Body>
            </Card>
          </ListGroup.Item>
          <ListGroup.Item>
            <Card>
              <Card.Header as="h5">Dr. Madhav Jha</Card.Header>
              <Card.Body>
                <Card.Title>
                Psychiatrist 10 year of experience in treating patients deling with greve ans stress 
                </Card.Title>
                <Button variant="primary">Refer</Button>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        </ListGroup>
      </DoctorContainer>
    </Container>
  );
};

export default Menu;
