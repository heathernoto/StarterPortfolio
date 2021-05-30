import React from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import projects from './projectData';

export default function Project() {
  return (
    <>
      {projects.map((project) => {
        return (
          <div key={project.id} className="project-card">
            <img alt="Pin It" src={project.image} className="project-media" />
            <div className="project-content" align="center">
              <h2> {project.title}</h2>
              {project.shortDescription}
              <br />
              {project.longerDescription}
              <br />
              Tools: {project.tools}
              <br />
              <div className="project-links">
                {/* YouTube demo */}
                {project.youTube && (
                  <a
                    className="project-links-icon"
                    aria-label="Link to YouTube"
                    target="_blank"
                    href={project.youTube}
                    rel="noreferrer">
                    <YouTubeIcon />
                  </a>
                )}
                {/* link if deployed */}
                {project.link && (
                  <a
                    className="project-links-icon"
                    aria-label="Link to deployed project"
                    target="_blank"
                    href={project.link}
                    rel="noreferrer">
                    <LinkIcon />
                  </a>
                )}
                {/* GitHub repo */}
                <a
                  className="project-links-icon"
                  aria-label="Link to Github repo"
                  target="_blank"
                  href={project.gitHub}
                  rel="noreferrer">
                  <GitHubIcon />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
