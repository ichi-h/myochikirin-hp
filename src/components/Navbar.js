import { Link } from 'react-router-dom'

function Navbar() {
  return(
    <div className="navbar">
      <ul>
        <li><Link to="/">トップ</Link></li>
        <li><Link to="/overview">概要</Link></li>
        <li><Link to="/download">ダウンロード</Link></li>
        <li><Link to="/credit">クレジット</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
