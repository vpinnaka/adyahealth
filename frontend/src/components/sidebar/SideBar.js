import React from "react";
import styled from "@emotion/styled";
import Menu from "./menu/Menu";

const Container = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 256px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SideBar = () => {
  return (
    <Container>
      <Menu/>
    </Container>
  );
};

export default SideBar;
