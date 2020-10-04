import React from 'react';
import axios from 'axios';
import './App.css';
import GithubCard from './components/GithubCard';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      githubData: {},
      followersData: []
    }
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/MychaelM`)
      .then((res) => {
        console.log("My GitHub data", res.data);
        this.setState({
          ...this.state,
          githubData: res.data
        })
      })
      .catch((err) => {
        console.log("Error: ", err)
      })

    axios
      .get(`https://api.github.com/users/MychaelM/followers`)
      .then((res) => {
        console.log("Followers Data", res.data)
        this.setState({
          ...this.state,
          followersData: res.data
        })
      })
      .catch((err) => {
        console.log("Followers error", err)
      })
  }

  render() {
  return (
    <div className="App">
      <h1>GitHub User Card</h1>
      <GithubCard data={this.state.githubData} />
      <div>
        <h3>My Followers:</h3>
        {this.state.followersData.map(follower => {
          return <GithubCard key={follower.id} data={follower} />
        })}
      </div>
    </div>
  );
  }
}

export default App;
