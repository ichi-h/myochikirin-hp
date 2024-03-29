import React from 'react';

import '../assets/css/News.css';
import theme from '../assets/img/theme.jpg';

class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newsStyle: { backgroundImage: `url(${theme})` }
    };
  }

  render() {
    return (
      <div className="news">
        <div className="news bg" style={this.state.newsStyle} />
        <div className="content">
          <h1>お知らせ</h1>
          <div className="news-list">
            <ul>
              <div className="list-item">
                <li>2021/10/10: v1.0.3の公開</li>
                <ul>
                  <li>画像閲覧時に、メニューバーが表示されるバグの修正</li>
                  <li>スライドバーのデザインが崩れるバグを修正</li>
                  <li>Windows 11、macOS Big Surへの対応</li>
                </ul>
              </div>
              <div className="list-item">
                <li>2021/5/27: v1.0.2の公開</li>
                <ul>
                  <li>コードの修正</li>
                </ul>
              </div>
              <div className="list-item">
                <li>2021/4/4: v1.0.1の公開</li>
                <ul>
                  <li>コードの修正</li>
                  <li><s>あとがきの改訂</s></li>
                </ul>
              </div>
              <div className="list-item">
                <li>2021/3/4: 公式サイト、ゲーム公開</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
