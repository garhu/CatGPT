import logo from '../assets/paw-logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header-container">
      <Link to="/" style={{ textDecoration: 'none', color: '#eff6e0' }}>
        <div className="logo-container">
          CatGPT
          <img src={logo} alt="paw" className="header-logo" />
        </div>
      </Link>
    </div>
  );
}

export default Header;
