import React from 'react';

import '../assets/css/Spec.css';
import bar from '../assets/img/bar.jpg';

class Spec extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      specStyle: { backgroundImage: `url(${bar})` }
    };
  }

  render() {
    return (
      <div className="spec">
        <div className="download bg" style={this.state.specStyle} />
        <div className="content">
          <h1>スペック</h1>
          <div className="spec-summary">
            <h2>タイトル</h2>
            <p>めうちきりんのメトロポリス</p>
            <h2>ジャンル</h2>
            <p>ノベルゲーム</p>
            <h2>作者</h2>
            <p>いっぺー</p>
            <h2>価格</h2>
            <p>無料</p>
            <h2>対応OS</h2>
            <p>Windows / macOS</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Spec;
