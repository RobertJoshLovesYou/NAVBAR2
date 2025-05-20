import sayoImage from '../images/download1.jpg'; 

const AboutPage = () => (
  <div className="about-section">
    <div className="about-content">
      <img 
        src={sayoImage} 
        alt="sayo" 
        className="about-img" 
      />
      <p className="about-description">
        Ben Caluag
      </p>
    </div>
  </div>
);

export default AboutPage;
