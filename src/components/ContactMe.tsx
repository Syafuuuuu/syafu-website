const socialMedia = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/yourusername",
    icon: "./assets/insta.png", // Update this with the actual path to your icon
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yourusername",
    icon: "./assets/linkedin.png", // Update this with the actual path to your icon
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/yourusername",
    icon: "./assets/youtube.png", // Update this with the actual path to your icon
  },
  {
    name: "GitHub",
    url: "https://www.github.com/yourusername",
    icon: "./assets/github.png", // Update this with the actual path to your icon
  },
];

const ContactMe = () => (
  <footer className="footer">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 footer-left">
          <h5 className="text-offwhite">Get in Touch</h5>
          <p>Email: syafuedu.gmail.com</p>
        </div>
        <div className="col-md-6 footer-right">
          {socialMedia.map((media, index) => (
            <a
              key={index}
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <img src={media.icon} alt={media.name} className="social-icon" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default ContactMe;
