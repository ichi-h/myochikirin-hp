import React from 'react';

import '../assets/css/Concept.css'
import theme from '../assets/img/theme.jpg';

class Concept extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      conceptStyle: { backgroundImage: `url(${theme})` }
    };
  }

  render() {
    return (
      <div className="concept">
        <div className="concept bg" style={this.state.conceptStyle} />
        <div className="content">
          <h1>コンセプト</h1>
          <div className="explain">
            <p>
              このノベルゲームにストーリーはありません。<br/>
              また、詩のように独特のリズムを持つものでもありません。
            </p>
            <p>
              このゲームはいわば、「言葉遊び」の世界です。
            </p>
            <p>
              偶発的に鏤められた言葉の羅列と、<br/>
              飄々とした音楽に身を委ね、<br/>
              ちょっぴり不思議な夜の街の雰囲気に浸っていたい……。
            </p>
            <p>そんなひと時をお届けするのが、「めうちきりんのメトロポリス」です。</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Concept;
