import React, { useMemo } from 'react';
import './Projects.css';
import { Col, Container, Row } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorSharp2 from '../../assets/img/color-sharp2.webp';
import { Project } from '../../types';
import projectsData from '../../data/projects.json';
import { useLanguage } from '../../hooks/useLanguage';
import { useScrollAnimation, useStaggeredScrollAnimation } from '../../hooks/useScrollAnimation';
import { resolveProjectImage } from '../../utils/assets';

const Projects = () => {
  const { t } = useLanguage();
  const projects: Project[] = useMemo(
    () =>
      (projectsData as Project[]).map((project) => ({
        ...project,
        imgUrl: resolveProjectImage(project.imgUrl)
      })),
    []
  );

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: projectsRef, visibleItems } = useStaggeredScrollAnimation(projects.length, {
    threshold: 0.1
  });

  const generateCards = () => {
    return projects.map((proj, index) => {
      return (
        <Col
          key={`proj-${proj.url}-${index}`}
          xs={12}
          sm={6}
          lg={6}
          xxl={4}
          className="project-col"
        >
          <div
            className={`project-item scroll-animate ${visibleItems[index] ? 'animate-in' : ''}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <ProjectCard card={proj} />
          </div>
        </Col>
      );
    });
  };

  return (
    <section className="project" aria-labelledby="projects-heading">
      <Container>
        <Row>
          <Col>
            <div
              ref={headerRef as React.RefObject<HTMLDivElement>}
              className={`projects-header scroll-animate ${headerVisible ? 'animate-in' : ''}`}
            >
              <h2 className="section-title" id="projects-heading">
                {t('projects.title')}
              </h2>
              <p className="section-description">{t('projects.description')}</p>
            </div>

            <div
              ref={projectsRef as React.RefObject<HTMLDivElement>}
              className="projects-grid"
              aria-label={t('projects.title')}
            >
              <Row className="g-4">{generateCards()}</Row>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        src={colorSharp2}
        alt=""
        className="background-image-right"
        aria-hidden="true"
        loading="lazy"
      />
    </section>
  );
};

export default Projects;
