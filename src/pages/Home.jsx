import ghostImage from '../images/download.jpg'; 

const HomePage = () => (
  <div className="home-section">
    <div className="home-content">
      <img 
        src={ghostImage} 
        alt="ghost" 
        className="home-img" 
      />
      <p className="home-description">
        BenTot
      </p>
    </div>
  </div>
);

export default HomePage;
