// src/components/ProjectsSection.js
import React from 'react';
import './css/projects.css'; // Import component-specific CSS

const ProjectsSection = () => {
    return (
        <div className="projects-section">

            <div className="project-content">
                <ProjectBox
                    title="Stellar Scholars"
                    date="Jan 2024"
                    techStack="JavaScript, Git, Tailwind CSS, OpenAI API, Node.js, Pixi.js, React, Cloudflare Pages"
                    description="Built a web browser video game to teach kids 12 and under about the planets of the Solar System and their moons. Integrated the OpenAI API to create a context-aware chatbot that enhances the educational experience. Successfully deployed the game ahead of 50% of other hackathon participants. Awards: Won Best Software Design, Best AI Application built with Cloudflare, and placed 4th in the overall Software track and 3rd in the L3Harris Challenge."
                />
                <ProjectBox
                    title="Dropawf"
                    date="Apr 2024"
                    techStack="JavaScript, Git, Tailwind CSS, Node.js, React, Cloudflare Pages, Render, Azure, MySQL"
                    description="Developed a post office application as a team project for our databases course. Implemented features for tracking packages, checking delivery status, and managing addresses. Hosted the site on Cloudflare's frontend with Render backend connected to a MySQL instance on Azure. Utilized continuous deployment (CD) setup on GitHub for efficient development and updates. Collaborated with a team of five to design, develop, and deploy the application."
                />
            </div>
        </div>
    );
};

const ProjectBox = ({ title, date, techStack, description }) => {
     return (
         <div className="project-box">
             <h3>{title}</h3>
             <p>{date} | {techStack}</p>
             <p>{description}</p>
         </div>
     );
 };
 

export { ProjectsSection, ProjectBox };
