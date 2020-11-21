import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  border-left: 3px solid
    ${(props) => (props.active ? props.theme.activeMenu : "transparent")};
  width: 100%;
  padding: 0.3rem;
  padding-left: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
  transition: 0.2s all ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Img = styled.img`
  /* color: ${(props) =>
    props.active ? props.theme.activeMenu : "#AAA5A5"}; */
  color: ${(props) => !props.active && props.theme.textColor};
  font-size: 1rem;
  margin-right: 1rem;
  filter: ${(props) => (props.active ? "" : "grayscale(100%)")} ;
`;

const Title = styled.h1`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${(props) => (props.active ? props.theme.activeMenu : "#52575C")};
`;

const MenuLink = ({ title, active, icon }) => {
  return (
    <Container active={active}>
      <Img
        src={icon}
        active={active}
      ></Img>
      <Title active={active}>{title}</Title>
    </Container>
  );
};

export default MenuLink;
