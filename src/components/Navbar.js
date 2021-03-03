import { Link } from 'react-router-dom'

function Navbar() {
  return(
    <div className="navbar">
      <ul>
        <Link to="/">トップ</Link>
        <Link to="/overview">概要</Link>
        <Link to="/download">ダウンロード</Link>
        <Link to="/credit">クレジット</Link>
      </ul>
    </div>
  );
}

export default Navbar;
