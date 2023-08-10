// Please fix everything that is wrong here, you can rewrite it to a functional component.
// What's wrong here?
// If something is wrong, how can it be fixed?

import React from 'react';

class ListRenderer extends React.Component {
  state = {
    event: null
  };

  componentDidMount() {
    window.addEventListener('message', this.handleMessage)
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.handleMessage)
  }

  handleMessage = (e) => {
    console.log("Event: ", e)
    this.setState({ event: e })
  }

  render () {
    return (
        <div>
          {this.state.event && <p>Class component: {JSON.stringify(this.state.event.data.message)}</p>}
        </div>
      );
  }
}

export default ListRenderer;