import React, { Fragment, useState } from "react";
import SideBar from "../components/sidebar/SideBar";
import Main from "../components/main/Main";

const Layout = () => {
  
  return (
    <Fragment>
      <SideBar />
      <Main />
    </Fragment>
  );
};

export default Layout;
