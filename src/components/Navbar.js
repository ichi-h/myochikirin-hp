import { Link } from 'react-router-dom';

import '../assets/css/Navbar.css';

function Navbar() {
  return(
    <div className="navbar">
      <div className="navbar-item">
        <Link to="/">トップ</Link>
      </div>
      <div className="navbar-item">
        <Link to="/news">お知らせ</Link>
      </div>
      <div className="navbar-item">
        <Link to="/worldview">世界観</Link>
      </div>
      <div className="navbar-item">
        <Link to="/download">ダウンロード</Link>
      </div>
      <div className="navbar-item">
        <Link to="/spec">スペック</Link>
      </div>
    </div>
  );
}

export default Navbar;
