import './Navbar.css'

function Navbar() {
  return (
    <nav className="nav justify-content-end bg-dark">
      <a className="btn text-light btn-1" href="/" role="button">
        Home
      </a>
      <a className="btn btn-1 text-light" href="/about">
        About
      </a>
      <a className="btn btn-1 text-light" href="/projects">
        Projects
      </a>
    </nav>
  );
}

export default Navbar;
