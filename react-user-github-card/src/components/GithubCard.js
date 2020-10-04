import React from 'react';

class GithubCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      githubData: props.data
    }
  }

  render() {
    return (
      <div>This is working.</div>
    )
  }
}

export default GithubCard;