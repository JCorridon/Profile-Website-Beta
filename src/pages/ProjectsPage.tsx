import Card from "../components/Card";
import "./HomePage.css";

function ProjectsPage() {
  const projects = [
    {
      title: "Portfolio Website (react/typescript)",
      summary:
        "This website was created in order to display all of my projects past present and future.",
      image: "/images/webpage-screenshot.jpg",
      link: "https://github.com/JCorridon/Profile-Website-Beta"
    },
    {
      title: "Sorting Algorithms (python)",
      summary:
        "Recreation of common sorting algorithms for time complexity analysis",
      image: "/images/time-complexity.jpg",
      link: "https://github.com/JCorridon/Sorting-Algorithms"
    },
    {
      title: "FUTURE PROJECT: Fun Fact Generator Web App (python)",
      summary:
        "A python application that will generate fun facts through internet scraping",
      image: "/images/fun-fact.jpg",
      link: "https://github.com/JCorridon"
    },
    {
      title: "FUTURE PROJECT: 2048 game recreation (Javascript)",
      summary:
        "My personal recreation of the popular 2048 game using just javascript, html, and css",
      image: "/images/2048-logo.jpg",
      link: "https://github.com/JCorridon"
    },
  ];

  return (
    <div className="backgroundRed">
      <div className="container pt-5 text-light">
        <h1>Projects</h1>
        <div className="container">
          <div className="row">
            {projects.map((project, index) => (
              <Card
                key={index}
                image={project.image}
                title={project.title}
                summary={project.summary}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
