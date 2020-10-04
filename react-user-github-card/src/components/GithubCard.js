import React from 'react';

class GithubCard extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   githubData: this.props.data.login
  //   // }
  // }

  render() {
    return (
    <div>
        <h2>{this.props.data.login}</h2>
    </div>
    )
  }
}

export default GithubCard;