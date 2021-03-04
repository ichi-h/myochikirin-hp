import React from 'react';

import theme from '../assets/img/theme.jpg';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      overviewStyle: { backgroundImage: `url(${theme})` }
    };
  }

  render() {
    return (
      <div className="overview" style={this.state.overviewStyle}>
        <h1>概要</h1>
        <div className="explain1">
          <p>この地球のどこかに</p>
          <p>夜空が綺麗に見えるという</p>
          <p>「めうちきりん」な街があるらしい――</p>
        </div>
        <div className="explain2">
          <p>この物語にストーリーはありません。</p>
          <p>また登場人物もおらず、物語に関連した意図・メッセージといったものもありません。</p>
          <p>ただひたすらに今を忘れ、ちょっぴり不思議な夜の街の雰囲気に浸っていたい……。</p>
          <p>そんなひと時をお届けするのが、「めうちきりんのメトロポリス」です。</p>
        </div>
      </div>
    );
  }
}

export default Overview;
