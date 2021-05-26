import React from 'react';
import ReactPlayer from "react-player";

import '../assets/css/Worldview.css'
import theme from '../assets/img/theme.jpg';

class Worldview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      worldviewStyle: { backgroundImage: `url(${theme})` }
    };
  }

  render() {
    return (
      <div className="worldview">
        <div className="worldview bg" style={this.state.worldviewStyle} />
        <div className="content">
          <h1>世界観</h1>
          <div className="explain">
            <div className="player">
              <ReactPlayer url="https://soundcloud.com/ippee/yrxrjxqhpzi7" height="180px" />
            </div>
            <p>
              このノベルゲームにストーリーはありません。<br/>
              また、詩のように独特のリズムを持つようなものでもありません。
            </p>
            <p>
              このゲームはいわば、<span className="text-large"> <u>言葉遊び</u> </span>の世界です。
            </p>
            <p>
              偶発的に鏤められた言葉の羅列と、<br/>
              飄々とした音楽に身を委ね、<br/>
              綺麗な夜空が見える、<br/>
              ちょっぴり不思議な夜の街の雰囲気に浸っていたい……。
            </p>
            <p>
              そんなひと時をお届けするのが、
            </p>
            <p className="text-title">
              <span className="myochikirin">めうちきりん</span>
              <span className="no">の</span>
              <span className="metropolis">メトロポリス</span>
            </p>
            <p>
              です。
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Worldview;
