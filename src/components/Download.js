import React from 'react';

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
      <div className="download" style={this.state.downloadStyle}>
        <h1>ダウンロード</h1>
        <div className="windows"><button onClick="">Windows</button></div>
        <div className="mac"><button onClick="">macOS</button></div>
        <div className="spec">
          <p>このゲームはWindows 10 Home、およびmacOS Catalina 10.15.7にて開発されました。</p>
        </div>
      </div>
    );
  }
}

export default Download;
