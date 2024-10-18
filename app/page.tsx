import Nav from "./components/navBar";
import React from "react";

export default function Home() {
  return (
    <>
      {/* Basic Information Section */}
      <section id="basic-info" className="section">
        <h1>Hi, I'm Almas Kanwal</h1>
        <h3>Future Web Developer</h3>
        <p>
          Aspiring to utilize my academic background and passion for CS(Computer
          Science) to contribute effectively to a dynamic organization, while
          continuously learning and enhancing my skills to achieve professional
          growth and excellence.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills-info" className="section">
        <h3>Skills</h3>
        <ul>
          <li>Ms Office</li>
          <li>Video Editing</li>
          <li>2D Animation</li>
          <li>Graphic Designing</li>
          <li>HTML</li>
          <li>CSS(Beginner)</li>
          <li>TypeScript</li>
          <li>Problem-Solving</li>
        </ul>
      </section>

      {/* Education Section */}
      <section id="education-info" className="section">
        <h3>Education</h3>
        <p>
          <b>Matriculation:</b> From T.C.F(The Citizens Foundation) (2021-2022)
        </p>
        <p>
          <b>Intermediate:</b> ICS From Govt. Degree Boys & Girls College
          SRE-III, Majeed, Stadium Road (2022-2023)
        </p>
        <p>
          <b>Artificial Intelligence, Web 3.0 & Metaverse:</b>`&nbsp;`From Governor
          House Karachi (Ongoing)
        </p>
        <p>I am learning web development and enhancing my technical skills.</p>
      </section>

      {/* Experience Section */}
      <section id="experience-info" className="section">
        <h3>Work Experience</h3>
        <p>
          No formal job experience yet, but I have completed projects in
          TypeScript & now learning about HTML, CSS, Next.js
        </p>
        <p>
          <b>Work On My YouTube Channel:</b>
          </p>
          <p>
            <b>Channel Link:</b>
            <a
              href="https://www.youtube.com/channel/UCu2rw6nY5yFxZzNzJVDW81Q"
              target="_blank"
            >
              `&nbsp;`Chamakte Sitare
            </a>
          </p>
        <p>My mother writes the script and does the voiceover as well. I edit videos, create thumbnails, and manage the YouTube channel.</p>
        <p>Intended to work as Web Developer in the future.</p>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio-info" className="section">
      <h3>Portfolio</h3>
        <p>
          You can visit my GitHub repository to check my projects.Link is given
          below:
        </p>
        <p>
          <b>GitHub:</b>
          <a href="https://github.com/AlmasKanwal" target="blank">
          `&nbsp;`Almas Kanwal GitHub
          </a>
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact-info" className="section">
        <h3>Contact</h3>
        <p>
          <b>Contact No:</b> 03222788665
        </p>
        <p>
          <b>Email:</b>
          <a href="mailto:areeshayameen15ak@gmail.com" target="blank">
          `&nbsp;`areeshayameen15ak@gmail.com
          </a>
        </p>
        <p>
          <b>GitHub:</b>
          <a href="https://github.com/AlmasKanwal" target="blank">
          `&nbsp;`Almas Kanwal GitHub
          </a>
        </p>
      </section>
    </>
  );
}
