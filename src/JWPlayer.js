import React, { Component } from 'react';

export default class JWPlayer extends Component {
  render() {
    return (
      <div style={ this.props.wrapperStyle }>
        <iframe src={ this.props.src } { ...this.props.iframeStyle } />
      </div>
    )
  }
}

JWPlayer.defaultProps = {
  wrapperStyle: {
    position: 'relative',
    paddingBottom: '56.25%',
    overflow: 'hidden'
  },
  iframeStyle: {
    width: '100%',
    height: '100%',
    frameBorder: '0',
    scrolling: 'auto',
    style: {
      position: 'absolute',
    },
    allowFullScreen: true,
  }
}
