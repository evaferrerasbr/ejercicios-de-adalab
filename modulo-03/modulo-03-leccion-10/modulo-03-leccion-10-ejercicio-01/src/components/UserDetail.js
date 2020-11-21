import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/UserDetail.scss';

const UserDetail = (props) => {
  const { name, image, gender, email, city, country } = props.user;
  return (
    <div className="background">
      <div className="modal__window">
        <h2 className="modal__title">{name}</h2>
        <Link to="/">
          <span className="modal__close">X</span>
        </Link>
        <section>
          <img className="card__img" src={image} alt={name} />
          <ul className="ml-1 mt-1">
            <li>Género: {gender}</li>
            <li>Email: {email}</li>
            <li>Ciudad: {city}</li>
            <li>País: {country}</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default UserDetail;
