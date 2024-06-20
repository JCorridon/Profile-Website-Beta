import "./HomePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center backgroundRed text-light flex-column align-items-center">
        <div>
          <h1>Welcome</h1>
        </div>
        <div className="text-center">
          <img
            src="./images/Professional Headshot.jpg"
            className="img-fluid quarter-size"
            alt="Professional Headshot"
          />
        </div>
      </div>
      <div className="pt-4 pb-2 backgroundGray text-light">
        <div className="container">
          <div className="row">
            <h3>Education</h3>
            <p>
              I graduated in 2023 from Stevens Institute of Technology with a
              B.E. in Software Engineering, maintaining a 3.44 GPA and a minor
              in Pre-Law. I am currently working on my master's in Computer
              Science.
            </p>
          </div>
          <div className="row justify-content-end">
            <div className="col-4 offset-2">
              <img
                src="./images/Graduation Photo.jpg"
                className="img-fluid seventy-size"
              />
            </div>
            <div className="col-6">
              <p>
                The software engineering track focuses on designing, developing,
                and maintaining software systems. It combines computer science
                principles with engineering practices, covering programming,
                algorithms, data structures, software architecture, testing, and
                project management. I learned to create efficient, reliable, and
                scalable software solutions, preparing myself for a career in
                various tech industries. Taking classes like "Agile methods for
                software developement" and "Software Requirement Analysis".
              </p>
              <p>
                During the computer science masters I furthered my education in
                computer science principles taking classes like "Algorithms" and
                "Fundamentals of Computing". I also am taking several classes on
                modern Artificial Intelligence and Machine Learning,
                "Mathematical Foundations of Machine Learning", "Natural
                Language Processing", and "Deep Learning".
              </p>
              <div>
                <Link to="https://www.stevens.edu/program/software-engineering-bachelor-degree">
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-lg"
                  >
                    Stevens Software Engineering
                  </button>
                </Link>
              </div>
              <div>
                <Link to="https://www.stevens.edu/program/computer-science-masters">
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-lg"
                  >
                    Stevens Computer Science Masters
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-2 pb-2 backgroundRed text-light">
        <div className="container">
          <div className="row">
            <h3>Skills</h3>
          </div>
          <div className="row">
            <div className="col-6">
              <p>
                I possess a vairety of skills in both engineering and computer
                science fields.
              </p>
              <ul>
                <li>Autodesk Inventor: a 3D modeling software</li>
                <li>MicroSoft Office/Google Docs Suite</li>
                <li>HTML and CSS</li>
                <li>React and Bootstrap: Website development frameworks</li>
                <li>JavaScript</li>
                <li>Python</li>
              </ul>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
      <div className="pt-2 pb-2 backgroundGray text-light">
        <div className="container">
          <h3>Work Experience</h3>
          <p>
            <b>Proskauer Rose LLP</b>
          </p>
          <p>
            At Proskauer Rose LLP in New York City, as a Summer Intern in 2022,
            I worked in the IT department utilizing Agile management techniques
            like Scrum. Working to develope applications for lawyers using the
            ServiceNow platform.
          </p>
          <p>
            <b>Strato Inc.</b>
          </p>
          <p>
            As a Summer Intern at Strato, Inc. in 2021, I assembled various
            types of hoses on the manufacturing line and ensured quality control
            of incoming parts using high-tech measuring equipment. Additionally,
            I worked in the engineering department creating Arduino code to
            automate existing machinery, achieving annual cost savings of over
            $50,000.
          </p>
        </div>
      </div>
      <div className="pt-2 pb-2 backgroundRed text-light">
        <div className="container">
          <h3>Projects</h3>
          <p>
            <b>Profile Website</b>
          </p>
          <p>
            My latest Project has been this portfolio website in order to
            demonstrate some of my skills. This website was built using the
            fundamental web development languages, HTML/CSS/ and Javascript. I
            had used React framework for this specific website and bootstrap
            v5.0 (The latest at the time) for much of the styling. If you would
            like to learn more about this website please refer to the about
            page.
          </p>
          <p>
            <b>Senior Design Project</b>
          </p>
          <p>UPDATING</p>
        </div>
      </div>
      <div className="pt-2 pb-2 backgroundGray text-light">
        <div className="container">
          <h3>Activities</h3>
          <p>UPDATING</p>
        </div>
      </div>
      <div className="pt-2 pb-2 backgroundRed text-light">
        <div className="container">
          <h3>Awards</h3>
          <p>UPDATING</p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
