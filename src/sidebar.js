import React from "react";
// import {Model,ModalHeader} from "reactstrap";
import logo from "./images/logo.png";
import "./css_files/sidebar.css";
import SettingsIcon from "@material-ui/icons/Settings";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import CalendarTodaySharpIcon from "@material-ui/icons/CalendarTodaySharp";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import briefcase from "./images/briefcase 2.png";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Popup from "reactjs-popup";
import ellipse50 from "./images/ellipse50.png";
import HelpIcon from "@material-ui/icons/Help";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import line50 from "./images/Line 10.png";
import vector50 from "./images/Vector50.png";
import vector51 from "./images/Vector51.png";
import vector52 from "./images/Vector52.png";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import vector53 from "./images/Vector53.png";
import vector54 from "./images/Vector54.png";
import vector55 from "./images/Vector55.png";
import vector56 from "./images/Vector56.png";
import vector57 from "./images/Vector57.png";
import { NavLink } from "react-router-dom";
import vector84 from "./images/Vector84.png"
import vector85 from "./images/Vector85.png"




const Sidebar = (props) => {
  const {setModalOpen} = props

  console.log("modalOpen1",props);
 
  const StartModel =() =>{
    setModalOpen(true)
 }




  return (
    <div className="sidebar">
      <div className="sidebar_img">
        <img src={logo} alt="" />
        <h1
          style={{
            paddingTop: "25px",
            position: "absolute",
            paddingLeft: "82px",
          }}
        >
          ZENWE
        </h1>

        <div style={{ padding: "20px" }}>
          {/* <SettingsIcon className="setting" onClick={() => setModel(true)} /> */}
          {/* <SettingsIcon className="setting" /> */}

          <Popup
            trigger={<SettingsIcon className="setting" />}
            position="right center"
          >
            <div className="popupmodel1">
              <div className="popupmodel">
                <div className="modelcontent">
                  <div>
                    <img src={ellipse50} alt="" />
                  </div>
                  <div>
                    <h3> Ron Swanson</h3>
                    <p>jbass@lenty.ag</p>
                  </div>
                </div>

                <div className="modelcontent">
                  <div>
                    <PermIdentityIcon />
                  </div>
                  <div>
                    <p>User Setting</p>
                  </div>
                </div>

                <div className="modelcontent">
                  <div>
                    <HelpIcon />
                  </div>
                  <div>
                    <p>Helps & Documentation</p>
                  </div>
                </div>

                <div className="modelcontent">
                  <div>
                    <KeyboardIcon />
                  </div>
                  <div>
                    <p>Keyboard Shortcuts</p>
                  </div>
                </div>

                <div className="modelcontent">
                  <div>
                    <ExitToAppIcon />
                  </div>
                  <div>
                    <p>Sign Out</p>
                  </div>
                </div>

                <div style={{}}>
                  <img
                    src={line50}
                    alt=""
                    style={{
                      width: "-webkit-fill-available",
                      border: "0.5px solid #C4C4C4",
                    }}
                  />
                </div>

                <div className="modelcontent">
                  <div>
                    <img src={ellipse50} alt="" />
                  </div>
                  <div>
                    <h3>Plenty</h3>
                    <p>https://zenwe.breezy.hr/</p>
                  </div>
                </div>

                    {/* <button onClick={StartModel}>
                      click
                    </button> */}
                
                <NavLink to="/CompanySetting" onClick={StartModel}>
                {/* <NavLink to="/CompanySetting" > */}

                  <div className="modelcontent" >
                    <div>
                      <img src={vector50} alt="" />
                    </div>
                    <div> 
                      <p>Company Settings</p>
                      {/* <button onClick={()=>{setModalOpen(true)}}>
                      Company Settings
                      </button> */}
                    </div>
                  </div>
                </NavLink>

                {/* <NavLink to="/companySetting">
                    <div className="modelcontent">
                      <div>
                        <img src={vector50} alt="" />
                      </div>
                      <div>
                        <p>Company Settings</p>
                      </div>
                    </div>
                  </NavLink> */}

                <div className="modelcontent">
                  <div>
                    <img src={vector84} alt=""/>
                  </div>
                  <div>
                    <p>Recruiting Preferences</p>
                  </div>
                  <div>
                    <ArrowRightIcon />
                  </div>
                </div>

                <div className="modelcontent">
                  <div>
                    <img src={vector85} alt=""/>
                  </div>
                  <div>
                    <p>Invite Members</p>
                  </div>
                </div>

                <div className="modelcontent">
                  <div>
                    <img src={vector51} alt="" />
                  </div>
                  <div>
                    <p>Billing Details</p>
                  </div>
                </div>

                <div className="modelcontent">
                  <div>
                    <img src={vector52} alt="" />
                  </div>
                  <div>
                    <p>Manage Subscriptions</p>
                  </div>
                </div>

                <div style={{}}>
                  <img
                    src={line50}
                    alt=""
                    style={{
                      width: "-webkit-fill-available",
                      border: "0.5px solid #C4C4C4",
                    }}
                  />
                </div>

                <div className="modelcontent">
                  <div>
                    <img src={vector53} alt="" />
                  </div>
                  <div>
                    <p>Feature Requests</p>
                  </div>
                </div>

                <div className="modelcontent">
                  <div>
                    <img src={vector54} alt="" />
                  </div>
                  <div>
                    <p>Live Demo</p>
                  </div>
                </div>

                <div className="modelcontent">
                  <div>
                    <img src={vector55} alt="" />
                  </div>
                  <div>
                    <p>Product Updates</p>
                  </div>
                </div>

                <div className="modelcontent">
                  <div>
                    <img src={vector56} alt="" />
                  </div>
                  <div>
                    <p>Refer a friend</p>
                  </div>
                  <div>
                    <ArrowRightIcon />
                  </div>
                </div>

                <div style={{}}>
                  <img
                    src={line50}
                    alt=""
                    style={{
                      width: "-webkit-fill-available",
                      border: "0.5px solid #C4C4C4",
                    }}
                  />
                </div>

                <div className="modelcontent">
                  <div>
                    <img src={vector57} alt="" />
                  </div>
                  <div>
                    <p>Add Company</p>
                  </div>
                </div>
              </div>
            </div>
          </Popup>
        </div>
      </div>
      <div>
        {/* <NavLink to="/" activeClassName="sidebarIcon2">
          <span className="sidebarIcon" >
            <HomeIcon /> Dashboard
          </span>
        </NavLink> */}

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: "50px",
          }}
        >
          <span className="sidebarIcon">
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#FFFFFF" : "",
                  color: isActive ? "#1A344B" : "#FFFFFF",
                  borderRadius: isActive ? "10px 0px 0px 10px" : "",
                  width: isActive ? "257px" : "",
                  display: isActive ? "flex" : "flex",
                  height: isActive ? "45px" : "",
                  justifyContent: isActive ? "center" : "center",
                  alignItems: isActive ? "center" : "center",
                  paddingRight: isActive ? "21px" : "80px",
                };
              }}
            >
              <HomeIcon /> Dashboard
            </NavLink>
          </span>
        </div>

        <span className="sidebarIcon">
          <MailIcon /> Inbox
        </span>
        <span className="sidebarIcon">
          <EventAvailableIcon /> Tasks
        </span>
        <span className="sidebarIcon">
          <CalendarTodaySharpIcon /> Calender
        </span>
        <span className="sidebarIcon">
          <SignalCellularAltIcon /> Reports
        </span>

        {/* <NavLink to="/position">
          <span className="sidebarIcon">
            <div style={{ display: "flex" }}>
              <img
                src={briefcase}
                alt=""
                style={{ width: "20px", height: "20px" }}
              />
              Position
              <AddCircleIcon className="plushIcon" />
            </div>
          </span>
        </NavLink> */}

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            // paddingTop: "50px",
          }}
        >
          <span className="sidebarIcon">
            <NavLink
              to="/position"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "white" : "",
                  color: isActive ? "#1A344B" : "white",
                  borderRadius: isActive ? "10px 0px 0px 10px" : "",
                  width: isActive ? "257px" : "",
                  display: isActive ? "flex" : "flex",
                  height: isActive ? "45px" : "",
                  justifyContent: isActive ? "center" : "center",
                  alignItems: isActive ? "center" : "center",
                  paddingRight: isActive ? "41px" : "84px",
                };
              }}
            >
              <img
                src={briefcase}
                alt=""
                style={{ width: "20px", height: "20px", background: "#1A344B" }}
              />{" "}
              Position
              <AddCircleIcon className="plushIcon" />
            </NavLink>
          </span>
        </div>

        
          <span className="sidebarIcon">
            <PermIdentityIcon /> Candidates
            <AddCircleIcon className="plushIcon" />
          </span>
        
      </div>
    </div>
  );
};

export default Sidebar;
