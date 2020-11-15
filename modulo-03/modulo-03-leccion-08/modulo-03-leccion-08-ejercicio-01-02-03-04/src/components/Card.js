import '../stylesheets/Card.scss';

function Card(props) {
  return (
    <div className="Card">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>{props.lang}</p>
      <p>{props.ages}</p>
      <p>{props.gen}</p>
      <image src={props.image} />
    </div>
  );
}

export default Card;
