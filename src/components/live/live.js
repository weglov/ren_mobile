import React from 'react';

export default class Live extends React.Component {
  render() {
    return (
      <div className="r__player">
      <h1>Прямой эфир</h1>
	      <div className="r__player_container">
	      <iframe className="r__player_embed" src="http://ren.tv/player/live4site?playlist=false&autoplay=true" width="100%" height="100%"></iframe>
	      </div>
      </div>
    );
  }
}
