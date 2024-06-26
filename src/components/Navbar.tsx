import './Navbar.css'

function Navbar() {
  return (
    <nav className="nav justify-content-end bg-dark fixed-top navbar-with-shadow">
      <a className="btn btn-1 text-light" href="/" role="button">
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
