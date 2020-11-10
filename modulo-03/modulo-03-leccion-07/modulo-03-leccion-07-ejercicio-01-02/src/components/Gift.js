function Gift(props) {
  const handleClick = () => {
    props.getGift();
  };

  return (
    <>
      <p>{props.gift}</p>
      <button onClick={handleClick}>Dame más regalos</button>
    </>
  );
}

export default Gift;
