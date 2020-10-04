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
      <img src={this.props.data.avatar_url} alt="My avatar"/>
      <h2>Username: {this.props.data.login}</h2>
      <p>Full Name: {this.props.data.name}</p>
      <p>
        Bio: {this.props.data.bio == null ? "Empty Biography" : this.props.data.bio}
      </p>
      <h5>Followers: {this.props.data.followers}</h5>
      <h5>Following: {this.props.data.following}</h5>
    </div>
    )
  }
}

export default GithubCard;