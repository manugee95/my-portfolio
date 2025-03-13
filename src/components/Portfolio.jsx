function Portfolio() {
  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <div className="portitems">
        <div>
          <a href="https://postertrackv4-frontend.vercel.app" target="_blank"><img src="/postertrack.png" alt="" /></a>
          <h3>PosterTrack</h3>
          <p>A tracking and auditing software for OOH advertising</p>
        </div>
        <div>
          <a href="https://www.astutehcc.com" target="_blank"><img src="/astute.png" alt="" /></a>
          <h3>Astute Healthcare Clinic</h3>
          <p>A healthcare clinic website for mental health treatment</p>
        </div>
        <div>
          <a href="https://artisanapp-8wu3.onrender.com" target="_blank"><img src="/artisan.png" alt="" /></a>
          <h3>ArtisanConnect</h3>
          <p>An application for connecting with artisans in your locality</p>
        </div>
        <div>
          <a href="https://mccajglam.onrender.com" target="_blank"><img src="/mcajglam.png" alt="" /></a>
          <h3>Mcajglam</h3>
          <p>An E-commerce platform for unisex wears</p>
        </div>
        <div>
          <a href="https://www.hoperisinginc.com" target="_blank"><img src="/hoperising.png" alt="" /></a>
          <h3>Hoperising Inc</h3>
          <p>A medicaid provider website</p>
        </div>
        <div>
          <a href="https://taxproses.com" target="_blank"><img src="/taxproses.png" alt="" /></a>
          <h3>Taxproses</h3>
          <p>A tax processing website</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
