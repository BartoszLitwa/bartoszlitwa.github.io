import React, { useMemo, useState } from 'react';
import './Projects.css';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
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

  const [eventKey, setEventKey] = useState('All');
  const filteredProjects = projects.filter(
    (proj) => eventKey === 'All' || proj.type.includes(eventKey)
  );

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: projectsRef, visibleItems } = useStaggeredScrollAnimation(filteredProjects.length, {
    threshold: 0.1
  });

  const generateCards = () => {
    return filteredProjects.map((proj, index) => {
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

  const projectTypeFilters = useMemo(
    () => [
      { key: 'All', label: t('projects.filters.all') },
      { key: '.Net', label: t('projects.filters.dotnet') },
      { key: 'Angular', label: t('projects.filters.angular') },
      { key: 'React', label: t('projects.filters.react') },
      { key: 'Flutter', label: t('projects.filters.flutter') },
      { key: 'C++', label: t('projects.filters.cpp') },
      { key: 'Java', label: t('projects.filters.java') }
    ],
    [t]
  );

  return (
    <section className="project" id="projects" aria-labelledby="projects-heading">
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

            <Tab.Container id="projects-tabs" defaultActiveKey="All">
              <Nav
                variant="pills"
                className={`nav-pills mb-5 justify-content-center align-items-center scroll-animate ${headerVisible ? 'animate-in' : ''}`}
                id="pills-nav"
                style={{ transitionDelay: '0.2s' }}
                role="tablist"
                aria-label={t('projects.filters.ariaLabel')}
              >
                {projectTypeFilters.map((filter) => (
                  <Nav.Item key={filter.key}>
                    <Nav.Link
                      eventKey={filter.key}
                      onClick={() => setEventKey(filter.key)}
                      className={eventKey === filter.key ? 'active' : ''}
                      role="tab"
                      aria-selected={eventKey === filter.key}
                      aria-controls={`projects-tab-panel-${filter.key}`}
                    >
                      {filter.label}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>

              <Tab.Content>
                <div
                  ref={projectsRef as React.RefObject<HTMLDivElement>}
                  className="projects-grid"
                  role="tabpanel"
                  id={`projects-tab-panel-${eventKey}`}
                  aria-labelledby={`projects-tab-${eventKey}`}
                >
                  <Row className="g-4">{generateCards()}</Row>
                </div>
              </Tab.Content>
            </Tab.Container>
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
