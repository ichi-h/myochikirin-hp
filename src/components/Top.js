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
      <div className="top" style={this.state.topStyle}>
        <img className="title" src={title} alt="title"/>
      </div>
    );
  }
}

export default Top;
