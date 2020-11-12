import '../stylesheets/Form.scss';

function Form(props) {
  function handleChange(ev) {
    console.log(ev.currentTarget.name, ev.currentTarget.value);
    const input = ev.currentTarget.name;
    const value = ev.currentTarget.value;
    props.handleChange(input, value);
  }

  return (
    <div className="Form">
      <form>
        <div>
          <label className="Form__label" htmlFor="name">
            Nombre de la película
          </label>
          <input
            className="Form__input"
            id="Name"
            name="name"
            type="text"
            value={props.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="Form__label" htmlFor="description">
            Descripción
          </label>
          <textarea
            className="Form__input"
            id="description"
            name="description"
            value={props.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="Form__label" htmlFor="size">
            Idioma:
          </label>
          <select
            className="Form__input"
            id="lang"
            name="lang"
            value={props.lang}
            onChange={handleChange}
          >
            <option value="Inglés" name="lang">
              Inglés
            </option>
            <option value="Español" name="lang">
              Español
            </option>
            <option value="Francés" name="lang">
              Francés
            </option>
          </select>
        </div>
        <h3>Clasificación por edades:</h3>
        <div>
          <label htmlFor="all">
            <input
              id="all"
              type="radio"
              value={props.ages}
              name="ages"
              onChange={handleChange}
            />
            Para todos los públicos
          </label>
        </div>
        <div>
          <label htmlFor="12">
            <input
              id="12"
              type="radio"
              value={props.ages}
              name="ages"
              onChange={handleChange}
            />
            12
          </label>
        </div>
        <div>
          <label htmlFor="+18">
            <input
              id="+18"
              type="radio"
              value={props.ages}
              name="ages"
              onChange={handleChange}
            />
            18
          </label>
        </div>
      </form>
    </div>
  );
}

export default Form;
