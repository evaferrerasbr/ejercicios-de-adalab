import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <article className="shelves__article">
        <div className="shelves__article--imgContainer">
          <img
            className="shelves__article--img"
            src="./images/tshirt-simple-by_vexels.png"
          />
        </div>
        <h3 className="shelves__article--title">Camiseta</h3>
        <div className="shelves__article--buyPanel">
          <div className="buyPanel__size">
            <h4 className="buyPanel__section--title">Talla:</h4>
            <select name="" id="" className="buyPanel__size--select">
              <option value="" disabled selected>
                Escoge:
              </option>
              <option value="XL">XL</option>
              <option value="L">L</option>
              <option value="M">M</option>
              <option value="S">S</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <div className="buyPanel__amount">
            <h4 className="buyPanel__section--title">Cantidad:</h4>
            <button className="buyPanel__amount--add">+</button>
            <input
              type="text"
              name=""
              id=""
              className="buyPanel__amount--number"
              value="2"
            />
            <button className="buyPanel__amount--sub">-</button>
          </div>
          <div className="buyPanel__price">
            <h4 className="buyPanel__section--title">Precio:</h4>
            <span className="buyPanel__price--number">39</span>€
          </div>
          <button className="buyPanel__buy">Comprar</button>
        </div>
      </article>
    );
  }
}

export default Item;
