import React, { Component } from "react";
import { Loader, Dimmer } from "semantic-ui-react";

class Menu extends Component {
  state = {
    msg: '',
    loadingData: false,
  }

  async componentDidMount() {
    this.setState({ loadingData: true });
    document.title = "Indra | Menu";
    this.setState({ loadingData: false });
  }

  render() {
    if (this.state.loadingData) {
      return (
        <Dimmer active inverted>
          <Loader size='massive'>Loading...</Loader>
        </Dimmer>
      );
    }

    return (
      <div>
        <br />
        <h1 style={{ "textAlign": "center" }}>Welcome to the Indra ABM platform!
        </h1>
        <br /><br />

        <p>We will have the model menu displaying soon!</p>

        <br /><br />
      </div>
    );
  }
}

export default Menu;