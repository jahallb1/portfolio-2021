import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

import faGithub from "@fortawesome/fontawesome-free-brands/faGithub";
import { faLinkedin } from "@fortawesome/fontawesome-free-brands";

const Footer = (props) => (
  <footer id="footer" style={props.timeout ? { display: "none" } : {}}>
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
    </ul>{" "}
  </footer>
);

Footer.propTypes = {
  timeout: PropTypes.bool,
};

export default Footer;
