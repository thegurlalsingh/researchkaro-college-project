import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Types</h2>
            <span>Applied</span>
            <span>Analytical</span>
            <span>Descriptive</span>
            <span>Qualitative</span>
            <span>Quantitive</span>
            <span>Fundamental</span>
            <span>Exploratory</span>
            <span>Conclusive</span>
            <span>Surveys</span>
            <span>Case Studies</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Terms & Conditions</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Inspirational Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>More Like Us</h2>
            <span>ResearchGate</span>
            <span>Google Scholar</span>
            <span>Academia.edu</span>
            <span>ORCID</span>
            <span>IEEE Xplore</span>
            <span>PubMed</span>
            <span>Semantic Scholar</span>
            <span>arXiv</span>
            <span>Mendeley</span>
            <span>SSRN</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>ResearchKaro</h2>
            <span>© 2025 Prototype-Model</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>USD</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
