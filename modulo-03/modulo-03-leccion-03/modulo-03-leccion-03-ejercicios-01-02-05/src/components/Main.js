import React from 'react';

class Main extends React.Component {
  render() {
    return (
      <main className="App-section">
        <p className="App-paragraph">{this.props.description}</p>
        <div className="App-moreinfo">
          <a className="App-link" href="/" target="_blank">
            Leer más...
          </a>
          <div className="App-likes">
            <span>{this.props.likes}</span>
            <i class="App-heart fa fa-heart" aria-hidden="true"></i>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
