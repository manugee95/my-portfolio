function Header() {
  return (
    <>
      <div className="header">
        <span>manugeetech@gmail.com</span>
      </div>
      <div className="hero">
        <div>
          <h3>EMMANUEL ESEIGBE</h3>
          <p>Software Engineer | Fullstack Web & Mobile Developer</p>
          <p className="tagline">
            Bridging Creativity and Transforming Visions into Dynamic, Scalable
            Applications.
          </p>
          <div className="herobtn">
            <a href="/Emmanuel_CV_latest.pdf" download={"/Emmanuel_CV_latest.pdf"}><button>Download CV</button></a>
            <a href="#contact"><button>Hire Me</button></a>
          </div>
        </div>
        <div>
          <img src="/emmanuel.jpg" alt="" />
        </div>
      </div>
    </>
  );
}

export default Header;
