import React from "react";
import "./App.css"; // Ensure you have the styles available

function Footer() {
  return (
    <footer className="footer">
      <p>
        Coded By{" "}
        <a
          href="https://github.com/cosm1cgirl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mary-Anne Schaffers
        </a>{" "}
        | Hosted on{" "}
        <a
          href="https://github.com/cosm1cgirl/weatherapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        &{" "}
        <a
          href="https://app.netlify.com/sites/weathernodejs/overview"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </p>
    </footer>
  );
}
export default Footer;
