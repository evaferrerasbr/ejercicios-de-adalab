import React from 'react';
import RandomCat from './RandomCat';
import '../stylesheets/CatList.scss';

class CatList extends React.Component {
  render() {
    return (
      <section className="section">
        <h1>All Cats Are Beautiful</h1>
        <ul className="section__list">
          <li>
            <RandomCat height="200" width="200" />
          </li>
          <li>
            <RandomCat height="200" width="400" />
          </li>
          <li>
            <RandomCat />
          </li>
        </ul>
      </section>
    );
  }
}

export default CatList;
