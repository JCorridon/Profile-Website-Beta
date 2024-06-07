import Card from "../components/Card";

function ProjectsPage() {
  const projects = [
    {
      title: "Portfolio Website",
      summary:
        "This website was created in order to display all of my projects past present and future.",
      image: "",
    },
    {
      title: "2048 Browser Game (javascript)",
      summary: "Recreation of the popular 2048 combining web game",
      image: "/images/2048-logo.jpg",
    },
    {
      title: "Fun Fact Generator Web App (python)",
      summary:
        "A python application that will generate fun facts through internet scraping",
      image: "",
    },
    {
      title: "Background Generator (javascript)",
      summary: "A tool that can generate computer backgrounds from images",
      image: "",
    },
  ];

  return (
    <>
      <h1>John Corridons Projects</h1>
      <div className="container">
        <div className="row">
          {projects.map((project, index) => (
            <Card
              key={index}
              image={project.image}
              title={project.title}
              summary={project.summary}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
