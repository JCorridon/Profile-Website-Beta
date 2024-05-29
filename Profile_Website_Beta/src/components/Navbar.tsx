function Navbar() {
  return (
    <nav className="nav justify-content-end bg-dark">
      <a className="nav-link bg-secondary text-light" href="/home">
        Home
      </a>
      <a className="nav-link bg-secondary text-light" href="/about">
        About
      </a>
      <a className="nav-link bg-secondary text-light" href="/projects">
        Projects
      </a>
    </nav>
  );
}

export default Navbar;
