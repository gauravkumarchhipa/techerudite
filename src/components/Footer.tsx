import logo from '../assets/logo.png';
import '../styles/_footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__column footer__intro">
          <p className="footer__tagline">
            Tagline will go here. Lorem ipsum d oler sit amet...
          </p>
          <a href="mailto:user@email.com" className="footer__email">
            user@email.com
          </a>
        </div>

        <div className="footer__divider" />

        <div className="footer__column">
          <h4>Address</h4>
          <p>101 Office No,</p>
          <p>Road name,</p>
          <p>India</p>
        </div>

        <div className="footer__column">
          <h4>Contacts</h4>
          <p>user@email.com</p>
          <p>(276) 341-7690</p>
        </div>
      </div>

      <div className="footer__bottom">
        <img src={logo} alt="Gecko Accountancy" className="footer__logo" />
        <ul className="footer__links">
          <li>About</li>
          <li>Blogs</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
        <span className="footer__copyright">© 2025. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
