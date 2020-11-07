import React from 'react';

let heartIcon;

class Mediacard extends React.Component {
  changeHeart() {
    if (this.props.heart) {
      heartIcon = 'fa fa-heart ';
    } else {
      heartIcon = 'fa fa-heart-o ';
    }
    return heartIcon;
  }

  render() {
    return (
      <div className="App-card">
        <header className="App-header">
          <img src={this.props.image} className="App-logo" alt="logo" />
          <div className="App-wrapper">
            <h1 className="App-title">{this.props.name}</h1>
            <h2 className="App-subtitle">{this.props.date}</h2>
          </div>
        </header>
        <main className="App-section">
          <p className="App-paragraph">{this.props.description}</p>
          <div className="App-moreinfo">
            <a className="App-link" href="/" target="_blank">
              Leer más...
            </a>
            <div className="App-likes">
              <span>{this.props.likes}</span>
              <i
                className={this.changeHeart() + 'App-heart'}
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Mediacard;
