import React from "react";

function Footer() {
    return (
        <footer className="fixed-bottom custom-bg1 text-center h-20">
        <div className="container">
        <a href="https://github.com/Danr55" target="_blank" rel="noopener noreferrer" className="mx-2">
            <img src="./src/assets/github_3291695.png" alt="GitHub" className="img-fluid"
            style={{ width: "30px", height: "30px"}}/>
        </a>
        <a href="https://www.linkedin.com/in/oscar-rendon-070b49326/" target="_blank" rel="noopener noreferrer" className="mx-2">
            <img src="./src/assets/linkedin_2504923.png" alt="LinkedIn" className="img-fluid"
            style={{ width: "30px", height: "30px"}}/>
        </a>
        <a href="https://x.com/danr1255" target="_blank" rel="noopener noreferrer" className="mx-2">
        <img src="./src/assets/Twitter.png" alt="Twitter" className="img-fluid"
            style={{ width: "30px", height: "30px"}}/>
        </a>
        </div>
        </footer>
    );
}

export default Footer;