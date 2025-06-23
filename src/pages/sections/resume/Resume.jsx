import React from 'react';
import { useState } from 'react';
import './Resume.css'; // Import your custom styles

const Resume = () => {
  const [feedback, setFeedback] = useState(null);
  const showMessage = (message, type) => {
    setFeedback({ message, type });

    setTimeout(() => {
      setFeedback(null);
    }, 6000);
  };

  const showMyMessage = () => {
    showMessage("The Resume has been successfully downloaded", "success")
  }
  return (
    <section id="resume" className="section bootstrap-scope resume">
      {feedback && (
        <div
          class={`feedback ${feedback.type === 'success' ? 'feedback-success' : 'feedback-error'}`}                >
          {feedback.message}
        </div>
      )}
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
                  Multifaceted tech professional with expertise in Frontend and Backend Software Development (ReactJS, AngularJs, NodeJs, Javascript,
                  Django, Python,Typescript, Tailwind, HTML, CSS etc), Graphics design (Corel Draw, Photoshop etc), and UI design (Figma, Adobe XD etc).
                  Passionate about blending creativity and innovation to create beautiful and impactful software solutions.
                </em>
              </p>
              <ul>
                <li>Schwalbenweg 37, 44625 Herne, NRW, DE.</li>
                <li>(49) 015755339577</li>
                <li>emeriego@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education & Training</h3>
            <div className="resume-item">
              <h4>BSc Computer Science</h4>
              <h5>2007 - 2012</h5>
              <p><em>University of Abuja, Abuja, NG</em></p>
              <p>
                Completed coursework in Data Communications, Data Structures, AI, OS, Multicloud, and more. Applied Object-Oriented Programming (OOP) principles to design and implement scalable software solutions as part of academic projects.
              </p>
            </div>

            <div className="resume-item">
              <h4>Certificate in Software Engineering</h4>
              <h5>2023 - 2024</h5>
              <p><em>ALX/Holberton, Lagos, NG</em></p>
              <p>
                A comprehensive, industry-aligned program designed to meet modern software development standards through project-based learning. The intensive training provides hands-on experience with languages like JavaScript, C, Python, and Shell, while fostering collaborative teamwork using tools such as GitHub, Slack, and Discord to simulate real-world development environments.
              </p>
            </div>
          </div>

          <div className="my-col">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>SENIOR SYSTEM ANALYST, SOFTWARE DEVELOPER, DESIGNER (ICT)</h4>
              <h5>2017 - 2025</h5>
              <p><em>University of Calabar, Calabar, NG</em></p>
              <ul>
                <li>
                  Software Development: Designed and implemented system solutions to address key teaching challenges.
                </li>
                <li>
                  Gap Analysis: Performed comprehensive gap analysis to bridge the gap between current systems and desired outcomes.
                </li>
                <li>
                  Training and Education: Delivered personalized training sessions to staff and students, ensuring effective adoption and utilization of new systems."
                </li>

              </ul>
            </div>
            <div className="resume-item">
              <h4>SENIOR FRONTEND ENGINEER</h4>
              <h5>2023 - 2025</h5>
              <p><em>INT+ TECHNOLOGY, Lagos, NG</em></p>
              <ul>

                <li>
                  Developed responsive user interfaces for an e-commerce PWA using frameworks Next.js.                </li>
                <li>
                  API Integration: Implemented third-party APIs to boost the app’s capabilities and facilitate smooth
                  interactions with external services.                </li>

              </ul>
            </div>
            <div className="resume-item">
              <h4>Graphics Design Specialist</h4>
              <h5>2017 - 2018</h5>
              <p><em>Sarki Digital Impressions Ltd, Abuja, NG</em></p>
              <ul>
                <li>
                  Leveraged data-driven insights to guide design decisions and assess the impact of changes.
                </li>
                <li>Played a key role in shaping brand identity, ensuring consistency and cohesion across all touchpoints.</li>
                <li>
                  Successfully designed annual reports for prominent organizations, including Kano Electricity Distribution Company and the Office of the Accountant General of the Federation (OAGF).
                </li>

              </ul>
            </div>
            <div className="resume-item">
              <h4>Technical Support Officer</h4>
              <h5>2014 - 2016</h5>
              <p><em>Academic Automation Technology Ltd, Abuja, NG &</em></p>
              <p><em>JKC Consulting Ltd, Abuja, NG</em></p>

              <ul>
                <li>
                  Hardware/Software Installation and Configuration: Guided users through the installation and configuration of
                  hardware and software applications, ensuring compatibility and functionality.                </li>
                <li>
                  User Training: Conducted user training sessions to empower users with the knowledge to troubleshoot
                  common issues independently and mo                </li>

              </ul>
            </div>
          </div>
        </div>
        <div className="my-row2">
          <a href="./godwin-resume.pdf" download="godwin-ojukwu-resume.pdf">
            <button onClick={showMyMessage} className='btn download-btn'>Download CV</button>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Resume;
