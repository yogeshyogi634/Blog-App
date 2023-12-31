import React from "react";
import "./single.css";
import SideBar from "../../components/sidebar/SideBar";
import SinglePost from "../../components/singlepost/SinglePost";

function Single() {
  return (
    <div className="single">
      <SinglePost />
      <SideBar />
    </div>
  );
}

export default Single;
