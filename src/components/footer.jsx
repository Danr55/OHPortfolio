import React from "react";

function Footer() {
    return (
        <footer className="fixed-bottom custom-bg1 text-center h-20">
        <div className="container">
        <a href="https://github.com/Danr55" target="_blank" rel="noopener noreferrer" className="mx-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Github_logo_svg.svg/1200px-Github_logo_svg.svg.png?20230420150203" alt="GitHub" className="img-fluid"
            style={{ width: "30px", height: "30px"}}/>
        </a>
        <a href="https://www.linkedin.com/in/oscar-rendon-070b49326/" target="_blank" rel="noopener noreferrer" className="mx-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png?20140125013055" alt="LinkedIn" className="img-fluid"
            style={{ width: "30px", height: "30px"}}/>
        </a>
        <a href="https://x.com/danr1255" target="_blank" rel="noopener noreferrer" className="mx-2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/640px-X_logo_2023.svg.png" alt="Twitter" className="img-fluid"
            style={{ width: "30px", height: "30px"}}/>
        </a>
        </div>
        </footer>
    );
}

export default Footer;