import { Link } from 'react-router-dom';

import '../assets/css/Navbar.css';

function Navbar() {
  return(
    <div className="navbar">
      <ul>
        <li><Link to="/">トップ</Link></li>
        <li><Link to="/concept">コンセプト</Link></li>
        <li><Link to="/download">ダウンロード</Link></li>
        <li><Link to="/credit">クレジット</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
