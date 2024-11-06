import React from "react";

const Resume = () => {
    return (
        <div>
            <h2 className="fs-2 bordered-text">Resume</h2>
            <p className="fs-5">Download my <a href="#" className="text-decoration-none">Resume</a></p>
                <h3 className="fs-4">FrontEnd Proficiencies</h3>
                <ul className="fs-6">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
                <h3 className="fs-4">BackEnd Proficiencies</h3>
                <ul className="fs-5">
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>PostgresSQL</li>
                </ul>
        </div>
    );
}

export default Resume;