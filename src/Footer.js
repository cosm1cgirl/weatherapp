import React from "react";
import "./App.css"; // Ensure you have the styles available

function Footer() {
  return (
    <footer className="footer">
      <p>
        Coded By <a href="https://github.com/cosm1cgirl">Mary-Anne Schaffers</a>{" "}
        | Hosted on{" "}
        <a href="https://github.com/cosm1cgirl/weatherapp">GitHub</a> &{" "}
        <a href="https://app.netlify.com/sites/weathernodejs/overview">
          Netlify
        </a>
      </p>
    </footer>
  );
}
export default Footer;
