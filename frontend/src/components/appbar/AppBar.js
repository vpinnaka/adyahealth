import React from "react";
import styled from "@emotion/styled";
import PatientSearch from "./PatientSearch";
import Notification from "../Notification";
import Profilelogo from "../../asserts/user-logo.png";


const Container = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 3rem;
`;

const ProfileImg = styled.img`
  height: 2rem;
  margin: 0 1rem;
  cursor: pointer;
`;

const MessageIcon = styled.span`
  color: ${({ theme }) => theme.colorGray};
  font-size: 27px;
  cursor: pointer;
`;

const Appbar = () => {
  return (
    <Container>
      <PatientSearch/>
      <ProfileImg src={Profilelogo}/>
    </Container>
  )
};

export default Appbar;
