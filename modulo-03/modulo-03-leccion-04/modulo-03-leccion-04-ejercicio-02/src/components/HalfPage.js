import React from 'react';

class HalfPage extends React.Component {
  render() {
    return <div className={this.props.styling}>{this.props.children}</div>;
  }
}

ReactDOM.render(
  <HalfPage styling="half--page">
    <h1>Hola mundo</h1>
    <p>Asasdflsj</p>
  </HalfPage>,
  document.getElementById('root')
);

export default HalfPage;
