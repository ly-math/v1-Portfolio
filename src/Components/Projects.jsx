import React from "react";
import "./projects.scss";

function Projects() {
  return (
    <>
      <h2 className="h2-title" id="projects">
        <span>{"<"}</span>Projects <span>{"/>"}</span>
      </h2>
      <div className="projects-wrap">
        <div className="project">
          <img src="./src/assets/images/animelist.png" alt="project image" />
          <div className="text">
            <h4>animelist69</h4>
            <p>
              A web application designed for browsing your favorite animes and
              accessing detailed information about each of them. Implemented
              using <span>APIs, SCSS & React.js.</span>
            </p>
            <a href="https://animelist69.netlify.app/" target="blank">
              <div className="arrow-icon">
                <svg
                  width="35"
                  height="24"
                  viewBox="0 0 45 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.4481 13.7591L31.2866 0.548391C30.9325 0.208882 30.4595 0.0214931 29.969 0.0263367C29.4784 0.0311803 29.0092 0.227871 28.6619 0.574307C28.3145 0.920742 28.1166 1.38939 28.1105 1.87994C28.1043 2.37048 28.2904 2.84394 28.629 3.19897L38.5212 13.1263H1.8772C1.62149 13.1106 1.36528 13.1475 1.12434 13.2346C0.883402 13.3216 0.662838 13.4571 0.476227 13.6326C0.289616 13.8081 0.140908 14.02 0.0392584 14.2552C-0.062391 14.4903 -0.11483 14.7438 -0.11483 15C-0.11483 15.2562 -0.062391 15.5097 0.0392584 15.7448C0.140908 15.98 0.289616 16.1918 0.476227 16.3674C0.662838 16.5429 0.883402 16.6784 1.12434 16.7654C1.36528 16.8525 1.62149 16.8894 1.8772 16.8737H38.6689L28.636 26.794C28.4452 26.9637 28.2909 27.1705 28.1828 27.4018C28.0746 27.6332 28.0147 27.8841 28.0069 28.1394C27.9991 28.3947 28.0434 28.6488 28.1372 28.8864C28.231 29.1239 28.3722 29.3398 28.5523 29.5209C28.7324 29.7019 28.9476 29.8443 29.1846 29.9394C29.4216 30.0344 29.6756 30.0801 29.9309 30.0736C30.1862 30.0671 30.4375 30.0086 30.6694 29.9017C30.9013 29.7947 31.1089 29.6416 31.2796 29.4516L44.4411 16.4167C44.6158 16.2423 44.7544 16.0352 44.849 15.8072C44.9436 15.5792 44.9923 15.3347 44.9923 15.0879C44.9923 14.841 44.9436 14.5966 44.849 14.3686C44.7544 14.1406 44.6158 13.9334 44.4411 13.7591H44.4481Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div className="project">
          <div className="pseudo-only"></div>
          <img src="./src/assets/images/skin1004.png" alt="project image" />
          <div className="text">
            <h4>skin1004</h4>
            <p>
              A web homepage for the Skin1004 site. The project focuses on
              minimal functionality paired with exceptional UI design,
              implemented using pure <span>HTML, CSS, JS.</span>
            </p>
            <a
              href="https://ly-math.github.io/Skin1004-Homepage/"
              target="blank"
            >
              <div className="arrow-icon">
                <svg
                  width="35"
                  height="24"
                  viewBox="0 0 45 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.4481 13.7591L31.2866 0.548391C30.9325 0.208882 30.4595 0.0214931 29.969 0.0263367C29.4784 0.0311803 29.0092 0.227871 28.6619 0.574307C28.3145 0.920742 28.1166 1.38939 28.1105 1.87994C28.1043 2.37048 28.2904 2.84394 28.629 3.19897L38.5212 13.1263H1.8772C1.62149 13.1106 1.36528 13.1475 1.12434 13.2346C0.883402 13.3216 0.662838 13.4571 0.476227 13.6326C0.289616 13.8081 0.140908 14.02 0.0392584 14.2552C-0.062391 14.4903 -0.11483 14.7438 -0.11483 15C-0.11483 15.2562 -0.062391 15.5097 0.0392584 15.7448C0.140908 15.98 0.289616 16.1918 0.476227 16.3674C0.662838 16.5429 0.883402 16.6784 1.12434 16.7654C1.36528 16.8525 1.62149 16.8894 1.8772 16.8737H38.6689L28.636 26.794C28.4452 26.9637 28.2909 27.1705 28.1828 27.4018C28.0746 27.6332 28.0147 27.8841 28.0069 28.1394C27.9991 28.3947 28.0434 28.6488 28.1372 28.8864C28.231 29.1239 28.3722 29.3398 28.5523 29.5209C28.7324 29.7019 28.9476 29.8443 29.1846 29.9394C29.4216 30.0344 29.6756 30.0801 29.9309 30.0736C30.1862 30.0671 30.4375 30.0086 30.6694 29.9017C30.9013 29.7947 31.1089 29.6416 31.2796 29.4516L44.4411 16.4167C44.6158 16.2423 44.7544 16.0352 44.849 15.8072C44.9436 15.5792 44.9923 15.3347 44.9923 15.0879C44.9923 14.841 44.9436 14.5966 44.849 14.3686C44.7544 14.1406 44.6158 13.9334 44.4411 13.7591H44.4481Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div className="project">
          <img src="./src/assets/images/bitcoin.png" alt="project image" />
          <div className="text">
            <h4>Bitcoin</h4>
            <p>
              A web homepage for the Bitcoin site. The project focuses on
              minimal functionality paired with exceptional UI design,
              implemented using pure <span>HTML, CSS, JS.</span>
            </p>
            <a
              href="https://ly-math.github.io/Bitcoin-homepage-practice/"
              target="blank"
            >
              <div className="arrow-icon">
                <svg
                  width="35"
                  height="24"
                  viewBox="0 0 45 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.4481 13.7591L31.2866 0.548391C30.9325 0.208882 30.4595 0.0214931 29.969 0.0263367C29.4784 0.0311803 29.0092 0.227871 28.6619 0.574307C28.3145 0.920742 28.1166 1.38939 28.1105 1.87994C28.1043 2.37048 28.2904 2.84394 28.629 3.19897L38.5212 13.1263H1.8772C1.62149 13.1106 1.36528 13.1475 1.12434 13.2346C0.883402 13.3216 0.662838 13.4571 0.476227 13.6326C0.289616 13.8081 0.140908 14.02 0.0392584 14.2552C-0.062391 14.4903 -0.11483 14.7438 -0.11483 15C-0.11483 15.2562 -0.062391 15.5097 0.0392584 15.7448C0.140908 15.98 0.289616 16.1918 0.476227 16.3674C0.662838 16.5429 0.883402 16.6784 1.12434 16.7654C1.36528 16.8525 1.62149 16.8894 1.8772 16.8737H38.6689L28.636 26.794C28.4452 26.9637 28.2909 27.1705 28.1828 27.4018C28.0746 27.6332 28.0147 27.8841 28.0069 28.1394C27.9991 28.3947 28.0434 28.6488 28.1372 28.8864C28.231 29.1239 28.3722 29.3398 28.5523 29.5209C28.7324 29.7019 28.9476 29.8443 29.1846 29.9394C29.4216 30.0344 29.6756 30.0801 29.9309 30.0736C30.1862 30.0671 30.4375 30.0086 30.6694 29.9017C30.9013 29.7947 31.1089 29.6416 31.2796 29.4516L44.4411 16.4167C44.6158 16.2423 44.7544 16.0352 44.849 15.8072C44.9436 15.5792 44.9923 15.3347 44.9923 15.0879C44.9923 14.841 44.9436 14.5966 44.849 14.3686C44.7544 14.1406 44.6158 13.9334 44.4411 13.7591H44.4481Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
