import '../stylesheets/Card.scss';

function Card(props) {
  return (
    <div className="Card">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>{props.lang}</p>
      <p>{props.ages}</p>
    </div>
  );
}

export default Card;
