function App(props) {
  const handleClick = () => {
    props.getAge();
  };

  return (
    <>
      <p>{props.age}</p>
      <button onClick={handleClick}>Hazme más vieja</button>
    </>
  );
}

export default App;
