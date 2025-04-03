import logo from "../assets/logo.png";
import "../styles/_footer.scss";
import { useEffect } from "react";
import { fetchFrontendDetails } from "../redux/slices/footerSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";
const Footer = () => {
  const dispatch = useAppDispatch();
  const { data }: any = useAppSelector((state: RootState) => state.footer);
  console.log(data?.data, data?.data?.contact_no);
  useEffect(() => {
    dispatch(fetchFrontendDetails());
  }, [dispatch]);

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__column footer__intro">
          <p className="footer__tagline">
            Tagline will go here. Lorem ipsum d oler sit amet...
          </p>
          <a
            href={`mailto:${data?.data?.inquiry_mail}`}
            className="footer__email"
          >
            {data?.data?.inquiry_mail}
          </a>
        </div>

        <div className="footer__divider" />

        <div className="footer__column">
          <h4>Address</h4>
          <p>{data?.data?.address}</p>
        </div>

        <div className="footer__column">
          <h4>Contacts</h4>
          <p>{data?.data?.contact_mail}</p>
          <p>{data?.data?.contact_no}</p>
        </div>
      </div>

      <div className="footer__bottom">
        <img src={logo} alt="Gecko Accountancy" className="footer__logo" />
        <ul className="footer__links">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>
        <span className="footer__copyright">© 2025. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
