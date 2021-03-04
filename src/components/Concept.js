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
              この物語にストーリーはありません。<br/>
              また、物語に関連した意図・メッセージといったものもありません。<br/>
              いわばこのゲームは、「言葉遊び」の世界です。
            </p>
            <p>
              ただひたすらに今を忘れ、<br/>
              ちょっぴり不思議な夜の街の雰囲気に浸っていたい……。<br/>
              そんなひと時をお届けするのが、「めうちきりんのメトロポリス」です。
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Concept;
