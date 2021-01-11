import React from "react";
import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

import faGithub from "@fortawesome/fontawesome-free-brands/faGithub";
import { faLinkedin } from "@fortawesome/fontawesome-free-brands";

// import tvTracker from "../static/images/tv-tracker.png";
// import ticTacToe from "../static/images/tic-tac-toe.png";
// import password from "../static/images/password.png";

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle();
        }}
      ></div>
    );

    return (
      <div
        id="main"
        style={this.props.timeout ? { display: "flex" } : { display: "none" }}
      >
        <article
          id="intro"
          className={`${this.props.article === "intro" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">About - Josh Hall</h2>
          <span className="image main">
            <img src="/static/images/joshHallPicture.jpg" alt="Image of Josh" />
          </span>
          <p>
            Full Stack Web Developer with a focus on front-end development using
            a background in music with training in attention to detail and
            collaboration to ensure the creation of user-friendly web
            applications. Well-versed in HTML, CSS, JavaScript, and React to
            build applications from mock-up to rollout. A recent graduate of the
            University of Central Florida’s Full Stack Coding Boot Camp.
            Experience with working with a team with strong verbal and written
            communications skills.
          </p>

          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === "work" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src="/static/images/tv-tracker.png" alt="" />
          </span>
          <p>
            A MERN-Stack SPA for you to track your interested, currently
            watching, and completed TV shows during quarantine.
          </p>
          <p>
            <a href="https://stark-brushlands-99590.herokuapp.com/">
              Deployed Site
            </a>
            <br />
            <a href="https://github.com/Dannymont94/tv-tracker">GitHub</a>
          </p>
          <span className="image main">
            <img src="/static/images/tic-tac-toe.png" alt="" />
          </span>
          <p>A game of tic-tac-toe built with HTML, CSS, and JavaScript.</p>
          <p>
            <a href="https://jahallb1.github.io/tic-tac-toe/">Deployed Site</a>
            <br />
            <a href="https://github.com/jahallb1/tic-tac-toe">GitHub</a>
          </p>
          <span className="image main">
            <img src="/static/images/password.png" alt="" />
          </span>
          <p>A password generator built with HTML, CSS, and JavaScript.</p>
          <p>
            <a href="https://jahallb1.github.io/passwordgenerator/">
              Deployed Site
            </a>
            <br />
            <a href="https://github.com/jahallb1/passwordgenerator">GitHub</a>
          </p>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === "about" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src="/static/images/pic03.jpg" alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === "contact" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="https://www.linkedin.com/in/josh-hall-98bb5699/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="https://github.com/jahallb1">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Main;
