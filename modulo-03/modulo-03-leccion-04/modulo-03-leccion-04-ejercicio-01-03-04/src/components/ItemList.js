import React from 'react';
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

const filteredArray = arrayOfItems.filter((arrayItem) => arrayItem.price < 10);

const arrayForRender = filteredArray.map((arrayItem) => {
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

class ItemList extends React.Component {
  render() {
    return <ul className="item-list">{arrayForRender}</ul>;
  }
}

export default ItemList;
