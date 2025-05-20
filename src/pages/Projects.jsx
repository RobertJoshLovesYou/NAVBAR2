import permitImage from '../images/download3.jpg'; 

const ProjectsPage = () => (
  <div className="projects-section">
    <div className="projects-content">
      <img 
        src={permitImage} 
        alt="aba" 
        className="projects-img" 
      />
      <p className="projects-description">
        Ben Sot
      </p>
    </div>
  </div>
);

export default ProjectsPage;
