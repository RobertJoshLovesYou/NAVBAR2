import pieceImage from '../images/download2.jpg'; 

const ContactPage = () => (
  <div className="contact-section">
    <div className="contact-content">
      <img 
        src={pieceImage} 
        alt="aaaa" 
        className="contact-img" 
      />
      <p className="contact-description">
        Ben & Ben
      </p>
    </div>
  </div>
);

export default ContactPage;
