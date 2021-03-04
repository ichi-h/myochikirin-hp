import React from 'react';

import '../assets/css/Top.css';
import theme from '../assets/img/theme.jpg';
import title from '../assets/img/title.png';

class Top extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topStyle: { backgroundImage: `url(${theme})` }
    };
  }

  render() {
    return (
      <div className="top">
        <div className="top bg" style={this.state.topStyle} />
        <div className="content">
          <img className="title" src={title} alt="title"/>
        </div>
      </div>
    );
  }
}

export default Top;
