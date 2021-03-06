import React from 'react';

import '../assets/css/Download.css'
import bar from '../assets/img/bar.jpg';

class Download extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      downloadStyle: { backgroundImage: `url(${bar})` }
    };
  }

  render() {
    return (
      <div className="download">
        <div className="download bg" style={this.state.downloadStyle} />
        <div className="content">
          <h1>ダウンロード</h1>
          <div className="windows">
            <a className="download-button" href="https://drive.google.com/file/d/1EpP1-4gOh90B9J5_vCKV4oNER7B5NZWE/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <i className="icon-windows" /> Windows版 ダウンロード
            </a>
          </div>
          <div className="mac">
            <a className="download-button" href="https://drive.google.com/file/d/1ngekNsKTUR6KXRowd3qQcs3ozQ42TZ1W/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <i className="icon-apple" /> macOS版 ダウンロード
            </a>
          </div>
          <div className="addition">
            <p>i) このゲームはOS付属ブラウザのレンダリングエンジンを使用します（Windows: Edge、macOS: Safari）。</p>
            <p>ii) このゲームはWindows 10 Home、およびmacOS Catalina 10.15.7にて開発されました。</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Download;
