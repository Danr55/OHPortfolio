import React from "react";
import { projectsData } from "../assets/projectsData";

const Portfolio = () => {
    return (
        <div className="container mt-5">
        <h2 className="text-center mb-4 fs-1 bordered-text">Portfolio</h2>
        <div className="row">
            {projectsData.map((project) => (
                <div className="col-md-4 mb-4" key={project.id}>
                    <div className="card h-100 position-relative portfolio-card">
                        <div
                            className="card-img-top"
                            style={{
                                backgroundImage: `url(${project.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                opacity: 0.3,
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                zIndex: 1,
                                transition: "opacity 0.5s ease",
                            }}
                        ></div>
                        <div className="card-body position-relative" style={{ zIndex: 2 }}>
                            <h5 className="card-title fs-2 bordered-text">{project.title}</h5>
                            <p className="card-text fs-4 bordered-text">{project.description}</p>
                            <div className="custom-btn-group">
                                <a
                                    href={project.url}
                                    className="btn btn-primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project
                                </a>
                                <a
                                    href={project.github}
                                    className="btn btn-primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Portfolio;