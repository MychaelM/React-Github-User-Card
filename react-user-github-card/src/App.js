import React from 'react';
import axios from 'axios';
import './App.css';
import GithubCard from './components/GithubCard';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      githubData: {}
    }
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/MychaelM`)
      .then((res) => {
        console.log("My GitHub data", res.data);
        this.setState({
          githubData: res.data
        })
      })
      .catch((err) => {
        console.log("Error: ", err)
      })
  }

  render() {
  return (
    <div className="App">
      <h1>GitHub User Card</h1>
      <GithubCard data={this.state.githubData} />
    </div>
  );
  }
}

export default App;
