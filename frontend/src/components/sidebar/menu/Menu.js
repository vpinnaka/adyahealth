import React, { Fragment } from "react";
import styled from "@emotion/styled";
import MenuLink from "./MenuLink";
import DashboardIcon from "../../../asserts/dashboard_icon.svg";
import LogoImage from "../../../asserts/logo-image.png";

const Logo = styled.img`
  position: absolute;
  left: 2rem;
  right: 0%;
  top: 1rem;
  bottom: 0%;
`;

const PrimaryContainer = styled.div`
  position: absolute;
  margin-top: 4rem;
  width: 100%;
`;

const SecondaryContainer = styled.div`
  position: absolute;
  margin-top: 430px;
  width: 100%;
`;

const Divider = styled.div`
  position: absolute;
  height: 0px;
  left: 0px;
  right: 0px;
  top: 422px;
  border: 1px solid #e8e8e8;
`;

const Menu = () => {
  return (
    <Fragment>
      <Logo src={LogoImage} />
      <PrimaryContainer>
        <MenuLink title="Dashboard" icon={DashboardIcon} active />
        <MenuLink title="Appointments" icon={DashboardIcon} />
        <MenuLink title="Patients" icon={DashboardIcon} />
        <MenuLink title="Clinical" icon={DashboardIcon} />
        <MenuLink title="Network" icon={DashboardIcon} />
      </PrimaryContainer>
      <Divider />
      <SecondaryContainer>
        <MenuLink title="Help" icon={DashboardIcon} />
      </SecondaryContainer>
    </Fragment>
  );
};

export default Menu;
