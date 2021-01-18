import React from 'react';
import ReactDOM from 'react-dom';
import 'fontsource-roboto';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';

class GithubCard extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   githubData: this.props.data.login
  //   // }
  // }

  render() {
    return (
      <Card style={{ maxWidth: '45%', margin: '0 auto', marginTop: '15px'}}>
      <CardActionArea>
      <CardMedia
        style={{height: '40%'}}
        component="img"
        // height="0"
        // width="300"
        src={this.props.data.avatar_url}
        title="My Avatar"
        alt="My avatar"/>
      <CardContent>
      <Typography variant="h5" component="h2">Username: {this.props.data.login}</Typography>
      {this.props.data.name ? <p>Full Name: {this.props.data.name} </p> : null}
      <p>
        Bio: {this.props.data.bio == null ? "Empty Biography" : this.props.data.bio}
      </p>
      {this.props.data.followers ? <h5>Followers: {this.props.data.followers}</h5> : null}
      {this.props.data.following ? <h5>Following: {this.props.data.following}</h5> : null}
          </CardContent>
      </CardActionArea>
    </Card>
    )
  }
}

export default GithubCard;