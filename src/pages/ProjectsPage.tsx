import Card from "../components/Card";

function ProjectsPage() {
  const projects = [
    { title: "project 1", summary: "summary 1", image: "" },
    { title: "project 2", summary: "summary 2", image: "" },
    { title: "project 3", summary: "summary 3", image: "" },
    { title: "project 4", summary: "summary 4", image: "" },
    { title: "project 4", summary: "summary 4", image: "" },
    { title: "project 4", summary: "summary 4", image: "" },
    { title: "project 4", summary: "summary 4", image: "" },
    { title: "project 4", summary: "summary 4", image: "" },
    { title: "project 4", summary: "summary 4", image: "" },
    { title: "project 4", summary: "summary 4", image: "" },
    { title: "project 4", summary: "summary 4", image: "" },
    { title: "project 4", summary: "summary 4", image: "" },
    { title: "project 4", summary: "summary 4", image: "" },
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
