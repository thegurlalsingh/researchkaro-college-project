import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";

function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect, Collaborate, and Innovate with Ease
            </div>
            <p>
              Find research collaborators, access cutting-edge papers, and explore new ideas—all in one place.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Access Research Across All Domains
            </div>
            <p>
              Discover and share high-quality research across diverse fields. Connect with experts and peers for collaboration without barriers.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Secure and Transparent Process
            </div>
            <p>
              Your research data and collaborations are protected. Enjoy transparency at every stage—from proposal to project completion.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Support When You Need It
            </div>
            <p>
              Our platform is designed to assist researchers 24/7 whether you need technical help or assistance finding collaborators.
            </p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls />
          </div>
        </div>
      </div>
      <div className="explore">
        <div className="container">
          <h1>Explore Other Fields</h1>
          <div className="items">
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Graphics & Design</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt=""
              />
              <div className="line"></div>

              <span>Digital Marketing</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Writing & Translation Models</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Video & Animation</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Audiography</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Programming & Tech</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Business</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Lifestyle</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Data</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Photo-elicitation</span>
            </div>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              Research <i>Karo</i>
            </h1>
            <h1>
            A Collaborative Hub Built for <i>Researchers</i>
            </h1>
            <p>
              Empowering researchers, PhD students, and innovators to connect, collaborate, and accelerate groundbreaking discoveries.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Find the Right Collaborator
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              AI-Driven Insights & Recommendations
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Streamline & Manage Projects
            </div>
            <button>Explore Research Paradise</button>
          </div>
          <div className="item">
            <img
              src="https://res.cloudinary.com/dvbqofaad/image/upload/v1739918607/Pngtree_educational_thinking_4764860_yveesm.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;
