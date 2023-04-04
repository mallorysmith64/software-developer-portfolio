import React from "react";
import ScrollToTop from "react-scroll-up";

function GoUp() {
  return (
    <ScrollToTop
      showUnder={3700}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        color: "#1EAF9C",
        padding: "1em",
        borderRadius: "50%",
        backgroundColor: "#63707E",
        bottom: "10em",
        left: "50%",
        transform: "translateX(-50%)",
        width: "4em",
        height: "4em",
      }}
    >
      <span>
        <i className="fa fa-arrow-up" arial-label="go back up arrow"></i>
      </span>
    </ScrollToTop>
  );
}

export default GoUp;
