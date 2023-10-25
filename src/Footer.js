import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-description">
          Self-learned Frontend Web Developer, continuously learning
        </p>{" "}
        <div>
          <p className="footer-name">Abdullah</p>
          <p className="footer-email">Email: zeb16208@gmail.com</p>
        </div>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/abdullahnezami"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/AbdullahPro2"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://discord:chessaudacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord: chessaudacity
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
