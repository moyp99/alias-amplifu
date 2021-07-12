import React from "react";
import Alias from "../../assets/Alias.svg";
import Clients from "../../assets/Clients.svg";
import Profile from "../../assets/Profile.svg";

const SideNav = () => {
  return (
    <div className="side-nav">
      <div className="logo">
        <img src={Alias}></img>
      </div>
      <div className="menu">
        <div>
          <img src={Clients}></img>
          <p>Clients</p>
        </div>
      </div>

      <div className="profile">
        <img src={Profile}></img>
        <p>John Doe</p>
      </div>
    </div>
  );
};

export default SideNav;
