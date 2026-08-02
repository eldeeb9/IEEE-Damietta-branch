"use client";

import "./questions.css";
import { FaAnchor } from "react-icons/fa";

const Questions = () => {
  const toggleQuestion = (e) => {
    const trigger = e.target.closest(".faq-question");
    if (trigger) trigger.closest(".faq-item").classList.toggle("active");
  };

  return (
    <section className="section faq-section">
      {/* <div className="faq-glow" aria-hidden="true"></div> */}

      <div className="container">
        <p className="faq-eyebrow">Need to know</p>
        <h1 className="section__header text-center">
          Frequently asked questions
        </h1>
        <p className="section_description text-center">
          Answers to the most frequently asked questions
        </p>

        <div className="faq-container" onClick={toggleQuestion}>
          <div className="faq-item">
            <button className="faq-question" type="button" aria-expanded="false">
              <span className="faq-icon"><FaAnchor /></span>
              <span className="faq-question-text">What is IEEE?</span>
              <span className="faq-toggle" aria-hidden="true"></span>
            </button>
            <div className="faq-answer">
              <div className="faq-answer-inner">
              <p>
                IEEE (Institute of Electrical and Electronics Engineers) is the
                world&apos;s largest technical professional organization, with more
                than 420,000 members across over 160 countries. Its mission is
                to advance technology for the benefit of humanity.
              </p>
              </div>
            </div>
          </div>

          <div className="faq-item">
            <button className="faq-question" type="button" aria-expanded="false">
              <span className="faq-icon"><FaAnchor /></span>
              <span className="faq-question-text">How can I join the IEEE Damietta Student Branch?</span>
              <span className="faq-toggle" aria-hidden="true"></span>
            </button>
            <div className="faq-answer">
              <div className="faq-answer-inner">
              <p>
                You can join by clicking the &quot;Join Now&quot; button on the homepage
                or navigation menu and completing the registration form.
                Membership is free for eligible students.
              </p>
              </div>
            </div>
          </div>

          <div className="faq-item">
            <button className="faq-question" type="button" aria-expanded="false">
              <span className="faq-icon"><FaAnchor /></span>
              <span className="faq-question-text">Is membership free?</span>
              <span className="faq-toggle" aria-hidden="true"></span>
            </button>
            <div className="faq-answer">
              <div className="faq-answer-inner">
              <p>
                Yes. Membership in the IEEE Damietta Student Branch is
                completely free for students. Members gain access to workshops,
                professional development opportunities, certificates, and
                training programs.
              </p>
              </div>
            </div>
          </div>

          <div className="faq-item">
            <button className="faq-question" type="button" aria-expanded="false">
              <span className="faq-icon"><FaAnchor /></span>
              <span className="faq-question-text">What are the benefits of membership?</span>
              <span className="faq-toggle" aria-hidden="true"></span>
            </button>
            <div className="faq-answer">
              <div className="faq-answer-inner">
              <p>As a member, you can enjoy:</p>
              <ul>
                <li>Free technical and professional workshops</li>
                <li>IEEE-recognized certificates of participation</li>
                <li>Internship and training opportunities</li>
                <li>Participation in competitions and events</li>
                <li>Networking with students, professionals, and industry leaders</li>
                <li>Access to a supportive technical community</li>
              </ul>
              </div>
            </div>
          </div>

          <div className="faq-item">
            <button className="faq-question" type="button" aria-expanded="false">
              <span className="faq-icon"><FaAnchor /></span>
              <span className="faq-question-text">Can I participate in events without being a member?</span>
              <span className="faq-toggle" aria-hidden="true"></span>
            </button>
            <div className="faq-answer">
              <div className="faq-answer-inner">
              <p>
                Yes. Most of our events are open to non-members. However,
                members receive priority registration and may enjoy additional
                exclusive benefits.
              </p>
              </div>
            </div>
          </div>

          <div className="faq-item">
            <button className="faq-question" type="button" aria-expanded="false">
              <span className="faq-icon"><FaAnchor /></span>
              <span className="faq-question-text">What are the membership requirements?</span>
              <span className="faq-toggle" aria-hidden="true"></span>
            </button>
            <div className="faq-answer">
              <div className="faq-answer-inner">
              <p>
                To become a member, you must be a student at the Faculty of
                Engineering, Damietta University, and complete the registration
                form. No additional requirements apply.
              </p>
              </div>
            </div>
          </div>

          <div className="faq-item">
            <button className="faq-question" type="button" aria-expanded="false">
              <span className="faq-icon"><FaAnchor /></span>
              <span className="faq-question-text">How can I contact the branch?</span>
              <span className="faq-toggle" aria-hidden="true"></span>
            </button>
            <div className="faq-answer">
              <div className="faq-answer-inner">
              <p>
                You can reach us through our official social media channels
                listed in the website footer or via the branch&apos;s official email
                address.
              </p>
              </div>
            </div>
          </div>

          <div className="faq-item">
            <button className="faq-question" type="button" aria-expanded="false">
              <span className="faq-icon"><FaAnchor /></span>
              <span className="faq-question-text">Are workshops held regularly?</span>
              <span className="faq-toggle" aria-hidden="true"></span>
            </button>
            <div className="faq-answer">
              <div className="faq-answer-inner">
              <p>
                Yes. We organize workshops and technical sessions throughout the
                year in various fields, including programming, robotics,
                artificial intelligence, electronics, and more. Follow our
                social media channels to stay updated on upcoming events and
                announcements.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
