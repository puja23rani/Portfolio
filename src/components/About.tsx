export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-heading">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Hello! I'm Brittany, a software engineer based in Boston, MA.</p>
            <p>I enjoy creating things that live on the internet...</p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className="skills-list">
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Vue.js</li>
              <li>Node.js</li>
              <li>WordPress</li>
            </ul>
          </div>
          <div className="profile-image">
            <div className="image-wrapper">
              <img src="https://v4.brittanychiang.com/static/6dec8851d13b8c4e0c55f0d7d7c78e7e/7442a/me.avif" alt="Brittany Chiang" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
