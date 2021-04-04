import React from 'react';
import firebase from 'firebase'

import '../assets/css/Download.css'
import bar from '../assets/img/bar.jpg';

class Download extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      downloadStyle: { backgroundImage: `url(${bar})` }
    };
  }

  downloadFile(filePath) {
    let storage = firebase.storage();
    let storageRef = storage.ref();
    let spaceRef = storageRef.child(filePath);

    spaceRef.getDownloadURL().then(function(url) {
      let xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        // let blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();

      window.location.href = url;

    }).catch(function(error) {
      alert(error.message);
    })
  }

  onClickButton(e) {
    switch (e.target.value) {
      case 'windows':
        console.log('windows');
        // this.downloadFile("めうちきりんのメトロポリス_for_win.zip");
        break
      case 'mac':
        console.log('mac');
        // this.downloadFile("めうちきりんのメトロポリス_for_mac.zip");
        break
      default:
        // do nothing
    }
  }

  render() {
    return (
      <div className="download">
        <div className="download bg" style={this.state.downloadStyle} />
        <div className="content">
          <h1>ダウンロード</h1>
          <div className="windows">
            <button className="download-button" value="windows" onClick={this.onClickButton}>
              <i className="icon-windows" /> Windows版 ダウンロード
            </button>
          </div>
          <div className="mac">
            <button className="download-button" value="mac" onClick={this.onClickButton}>
              <i className="icon-apple" /> macOS版 ダウンロード
            </button>
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
