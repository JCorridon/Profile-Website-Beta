function HomePage() {
  return (
    <>
      <div
        className="bg-image"
        style={{
          backgroundImage: "url('images/Stevens Background Image.jpg')",
          width: "100%",
          height: "600px",
          backgroundSize: "cover",
          backgroundPosition: "center -100px",
          display: "flex", // Use flexbox for centering
          justifyContent: "center", // Center horizontally
        }}
      >
        <h1 className="mt-5" style={{ color: "white" }}>John Corridon's Portfolio</h1>
      </div>
      <div>
        <h3>Education</h3>
        <p>
          I graduated in 2023 from Stevens Institute of Technology with a B.E.
          in Software Engineering, maintaining a 3.44 GPA and a minor in
          Pre-Law. I am currently working on my master's in Computer Science.
        </p>
        <p>
          The software engineering track focuses on designing, developing, and
          maintaining software systems. It combines computer science principles
          with engineering practices, covering programming, algorithms, data
          structures, software architecture, testing, and project management. I
          learned to create efficient, reliable, and scalable software
          solutions, preparing myself for a career in various tech industries.
          Taking classes like "Agile methods for software developement" and
          "Software Requirement Analysis".
        </p>
        <p>
          During the computer science masters I furthered my education in
          computer science principles taking classes like "Algorithms" and
          "Fundamentals of Computing". I also am taking several classes on
          modern Artificial Intelligence and Machine Learning, "Mathematical
          Foundations of Machine Learning", "Natural Language Processing", and
          "Deep Learning".
        </p>
      </div>
      <div>
        <h3>Skills</h3>
        <p>
          I possess a vairety of skills in both engineering and computer science
          fields.
        </p>
        <ul>
          <li>Autodesk Inventor: a 3D modeling software</li>
          <li>
            MicroSoft Office, Google Docs Suite: Soft skills aquired throughout
            my education
          </li>
          <li>HTML and CSS</li>
          <li>React and Bootstrap: Website development frameworks</li>
          <li>JavaScript</li>
          <li>Python</li>
        </ul>
      </div>
      <div>
        <h3>Work Experience</h3>
        <p>
          <b>Proskauer Rose LLP</b>
        </p>
        <p>
          At Proskauer Rose LLP in New York City, as a Summer Intern in 2022, I
          worked in the IT department utilizing Agile management techniques like
          Scrum. Working to develope applications for lawyers using the
          ServiceNow platform.
        </p>
        <p>
          <b>Strato Inc.</b>
        </p>
        <p>
          As a Summer Intern at Strato, Inc. in 2021, I assembled various types
          of hoses on the manufacturing line and ensured quality control of
          incoming parts using high-tech measuring equipment. Additionally, I
          worked in the engineering department creating Arduino code to automate
          existing machinery, achieving annual cost savings of over $50,000.
        </p>
      </div>
      <div>
        <h3>Projects</h3>
        <p>
          <b>Profile Website</b>
        </p>
        <p>
          My latest Project has been this portfolio website in order to
          demonstrate some of my skills. This website was built using the
          fundamental web development languages, HTML/CSS/ and Javascript. I had
          used React framework for this specific website and bootstrap v5.0 (The
          latest at the time) for much of the styling. If you would like to
          learn more about this website please refer to the about page.
        </p>
        <p>
          <b>Senior Design Project</b>
        </p>
        <p>
          My senior design team and I created a google chrome extension that
          would allow for
        </p>
      </div>
      <div>
        <h3>Activities</h3>
        <p></p>
      </div>
      <div>
        <h3>Awards</h3>
        <p></p>
      </div>
    </>
  );
}

export default HomePage;
