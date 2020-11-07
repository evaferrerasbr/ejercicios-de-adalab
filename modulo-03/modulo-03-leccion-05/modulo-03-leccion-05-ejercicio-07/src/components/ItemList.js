import React from 'react';
import CategoryButton from './CategoryButton';
import Item from './Item';

const arrayOfItems = [
  {
    name: 'Cereales con chocolate',
    description: 'Cereales rellenos de chocolate',
    quantity: 2,
    category: 'Cereales',
    price: 5,
  },
  {
    name: 'Hamburguesa con queso',
    description: 'Hamburguesa rica y saludable',
    quantity: 1,
    category: 'Fast-food',
    price: 15,
  },
  {
    name: 'Agua mineral',
    description: 'Agua de un charco del Himalaya',
    quantity: 2,
    category: 'Bebida',
    price: 5,
  },
  {
    name: 'Bebida de soja',
    quantity: 1,
    category: 'Bebida',
    price: 8,
  },
  {
    name: 'Barra de chocolate',
    quantity: 1,
    category: 'Fast-food',
    price: 2,
  },
];

let arrayCopied = arrayOfItems.slice();

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.filterArray = this.filterArray.bind(this);
  }

  renderArray() {
    const arrayForRender = arrayCopied.map((arrayItem) => {
      return (
        <li>
          <Item
            name={arrayItem.name}
            description={arrayItem.description}
            quantity={arrayItem.quantity}
            category={arrayItem.category}
            price={arrayItem.price}
          />
        </li>
      );
    });
    return arrayForRender;
  }

  filterArray(param) {
    if (param === 'Todas') {
      arrayCopied = arrayOfItems;
    } else {
      arrayCopied = arrayOfItems;
      arrayCopied = arrayCopied.filter((arrayItem) =>
        arrayItem.category.includes(param)
      );
    }
    this.forceUpdate();
  }

  render() {
    return (
      <>
        <ul className="item-list">{this.renderArray()}</ul>
        <CategoryButton category="Bebida" filterFunction={this.filterArray} />
        <CategoryButton category="Cereales" filterFunction={this.filterArray} />
        <CategoryButton
          category="Fast-food"
          filterFunction={this.filterArray}
        />
        <CategoryButton category="Todas" filterFunction={this.filterArray} />
      </>
    );
  }
}

export default ItemList;
