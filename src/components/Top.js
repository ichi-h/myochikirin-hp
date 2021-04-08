import React from 'react';

import '../assets/css/Top.css';
import bar from '../assets/img/bar.jpg';
import theme from '../assets/img/theme.jpg';
import title from '../assets/img/title.png';

class Top extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topStyle: { backgroundImage: `url(${theme})` },
      loading: {
        opacity: 1,
        visibility: 'visible'
      }
    };
  }

  componentDidMount() {
    // マウント時に画像のプリロードを行う
    const imgList = [bar, theme, title];
    let imgs = new Array(imgList.length).fill(new Image());
    let loaded = new Array(imgList.length).fill(false);
  
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].src = imgList[i];
      imgs[i].addEventListener('load', () => {
        loaded[i] = true;
      }, false);
    }

    const loadAllImg = setInterval(() => {
      const res = loaded.every( (bool) => bool );
        // 全ての画像が読み込まれたかを確認

      if (res) {
        this.setState({
          loading: {
            opacity: 0,
            visibility: 'hidden'
        }});
        clearInterval(loadAllImg);
      }
    }, 500);
  }

  render() {
    return (
      <div className="top">

        <div className="loading" style={this.state.loading}>
          <p className="loading-text">Now Loading...</p>
        </div>

        <div className="top bg" style={this.state.topStyle} />
        <div className="content">
          <img className="title" src={title} alt="title"/>
        </div>

      </div>
    );
  }
}

export default Top;
