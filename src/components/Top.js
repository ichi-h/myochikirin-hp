import React from 'react';

import theme from '../assets/img/theme.jpg';
import '../assets/css/Top.css';

class Top extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topStyle: { backgroundImage: `url(${theme})` }
    };
  }

  render() {
    return (
      <div className="top" style={this.state.topStyle} />
    );
  }
}

export default Top;
