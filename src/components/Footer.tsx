import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/github";
import "react-social-icons/linkedin";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 pb-5">
      <div className="container-fluid">
        <div className="row text-start">
          <div className="col-4 offset-2">
            <h1>Contact</h1>
            <ul className="list-unstyled">
              <li>
                <SocialIcon
                  url="www.linkedin.com"
                  style={{
                    height: 30,
                    width: 30,
                  }}
                />
                <a
                  href="https://www.linkedin.com/in/john-corridon-9bb067209/"
                  className="link-light ms-3"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a>908-256-4750</a>
              </li>
              <li>
                <a>JohnCorridon23@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="col-4 offset-1">
            <h1>Resources</h1>
            <p>
              <SocialIcon
                url="www.github.com"
                style={{
                  height: 30,
                  width: 30,
                }}
              />
              <a
                href="https://github.com/JCorridon"
                className="link-light ms-3"
              >
                Github
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
