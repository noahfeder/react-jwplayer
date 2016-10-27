import React, { Component } from 'react';

const players = {
  '16': {
    id: '8EjS1km7',
    padding: '56.25%'
  },
  '4': {
    id: '7J2hxr9K',
    padding: '75%'
  },
};

export default class JWPlayer extends Component {
  static get defaultProps() {
    return {
      player: '16',
      wrapper: {
        position: 'relative',
        overflow: 'hidden'
      },
      iframe: {
        width: '100%',
        height: '100%',
        frameBorder: '0',
        scrolling: 'auto',
        style: {
          position: 'absolute',
        },
        allowFullScreen: true,
      },
    }
  }


  render() {
    return (
      <div
        style={{
          paddingBottom: players[this.props.player]['padding'],
          ...this.props.wrapper,
        }}
        className='jwplayer'
      >
        <iframe
          { ...this.props.iframe }
          src={ `//content.jwplatform.com/players/${this.props.videoId}-${players[this.props.player]['id']}.html` }
        />
      </div>
    )
  }
}
