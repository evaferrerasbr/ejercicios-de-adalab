import { Link } from 'react-router-dom';

const UserItem = (props) => {
  console.log(props);
  const { id, image, name, city, gender, age } = props.user;
  return (
    <Link to={`/user/${id}`}>
      <article className="users__card">
        <div className="users__card--imgContainer">
          <img
            className="users__card--img"
            src={image}
            alt={`Foto de ${name}`}
            title={`Foto de ${name}`}
          />
        </div>
        <h4 className="users__card--title">{name}</h4>
        <p className="users__card--description">
          {city} / {gender}
        </p>
        <p className="users__card--age">{age}</p>
      </article>
    </Link>
  );
};

export default UserItem;
