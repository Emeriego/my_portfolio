import React from 'react';
import './Resume.css'; // Import your custom styles

const Resume = () => {
  return (
    <section id="resume" className="bootstrap-scope resume section">
      {/* Section Title */}
      <div className="container2">
        <h2 className='section-title'>Resume</h2>
          {/* <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
            quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui
            impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
          </p> */}

        {/* Bootstrap Row and Columns */}
        <div className="my-row">
          <div className="my-col">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item">
              <h4>Godwin Chiemerie Ojukwu</h4>
              <p>
                <em>
                  Innovative and deadline-driven Software developer with 3+ years of experience
                  designing and developing user-centered digital/print marketing material from
                  initial concept to final, polished deliverable.
                </em>
              </p>
              <ul>
                <li>University of Calabar, Calabar, CRS</li>
                <li>(234) 80307 61163</li>
                <li>emeriego@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education & Training</h3>
            <div className="resume-item">
              <h4>BSc Computer Science</h4>
              <h5>2007 - 2012</h5>
              <p><em>University of Abuja, Abuja, NG</em></p>
              <p>
                Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit.
                Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend.
              </p>
            </div>

            <div className="resume-item">
              <h4>Certificate in Software Engineering</h4>
              <h5>2023 - 2024</h5>
              <p><em>ALX/Holberton, Lagos, NG</em></p>
              <p>
                Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis
                Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum
                molestiae consequatur neque etlon sader mart dila.
              </p>
            </div>
          </div>

          <div className="my-col">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Senior Graphic Design Specialist</h4>
              <h5>2019 - Present</h5>
              <p><em>Experion, New York, NY</em></p>
              <ul>
                <li>
                  Lead in the design, development, and implementation of the graphic, layout, and
                  production communication materials.
                </li>
                <li>
                  Delegate tasks to the 7 members of the design team and provide counsel on all
                  aspects of the project.
                </li>
                <li>
                  Supervise the assessment of all graphic materials to ensure quality and
                  accuracy of the design.
                </li>
                <li>
                  Oversee the efficient use of production project budgets ranging from $2,000 -
                  $25,000.
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Graphic Design Specialist</h4>
              <h5>2017 - 2018</h5>
              <p><em>Stepping Stone Advertising, New York, NY</em></p>
              <ul>
                <li>
                  Developed numerous marketing programs (logos, brochures, infographics,
                  presentations, and advertisements).
                </li>
                <li>Managed up to 5 projects or tasks at a given time while under pressure.</li>
                <li>
                  Recommended and consulted with clients on the most appropriate graphic design.
                </li>
                <li>
                  Created 4+ design presentations and proposals a month for clients and account
                  managers.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="my-row2">
        <button className='btn download-btn3'>Download CV</button>
        </div>

      </div>
    </section>
  );
};

export default Resume;
