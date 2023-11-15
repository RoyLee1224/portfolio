import './topbar.scss';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            作品
          </a>
          <a href="#intro" className="imgs">
            <img src="assets/logo.webp" className="img1" alt="" />
            <img src="assets/logo2.webp" className="img2" alt="" />
          </a>
          <a
            className="itemContainer"
            href="https://github.com/RoyLee1224"
            target="_blank"
          >
            <GitHubIcon className="icon" />
            <span>RoyLee1224</span>
          </a>
          <a
            className="itemContainer"
            href="mailto:leeggroy@gmail.com"
            target="_blank"
          >
            <EmailIcon className="icon" />
            <span>leeggroy@gmail.com</span>
          </a>
          <a
            className="itemContainer"
            href="https://www.facebook.com/roy.li.1610"
            target="_blank"
          >
            <FacebookIcon className="icon" />
            <span>李喆宸</span>
          </a>
          <a
            className="itemContainer"
            href="https://www.linkedin.com/in/roy-lee-76a6571b8/"
            target="_blank"
          >
            <LinkedInIcon className="icon" />
            <span>Roy Lee</span>
          </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
