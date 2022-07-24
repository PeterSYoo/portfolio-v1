const ProjectsScroll = () => {
  return (
    <div className="projects-scroll-wrapper">
      <div className="projects-scroll">
        <div className="projects-scroll--br"></div>
        <div className="project-1--left">
          <img src="https://i.imgur.com/rQbdowK.png" alt="" />
        </div>
        <div className="project-1--right">
          <font className="project-1--name">Random Lit</font>
          <font className="project-1--number">1</font>
        </div>
        <div className="project-2--left">
          <font className="project-2--number">2</font>
          <font className="project-2--name">Tteok Bowl</font>
        </div>
        <div className="project-2--right">
          <img src="https://i.imgur.com/Slr8Z3h.png" alt="" />
        </div>
        <div className="projects-scroll--br-2"></div>
      </div>
    </div>
  );
};

export default ProjectsScroll;
