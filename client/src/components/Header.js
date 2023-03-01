import './Header.css';
import logo from '../assets/paw-logo.png';

function Header() {
  return (
    <div className="header-container">
      <div className="logo-container">
        CatGPT
        <img src={logo} alt="paw" className="header-logo" />
      </div>
    </div>
  );
}

export default Header;
