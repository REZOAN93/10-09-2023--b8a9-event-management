import imgfooter from "../../assets/footer.png";
import { GoStopwatch } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-basicColor text-white">
      <aside>
        <img src={imgfooter} alt="" />
        <p className=" font-bold text-4xl">Rezoan</p>
        <div className=" space-y-2">
          <p className="flex items-center gap-1 text-base"><GoStopwatch></GoStopwatch> Mon - Sat 8.00 - 18.00 Sunday CLOSED</p>
          <p className="flex items-center gap-1 text-base"><BsFillTelephoneFill></BsFillTelephoneFill> 1-677-124-44227</p>
          <p className="flex items-center gap-1 text-base"><FaLocationDot /> 826 Home Street, Bronx, New York</p>
          <p></p>
        </div>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
