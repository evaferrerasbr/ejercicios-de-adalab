import React from 'react';
import '../stylesheets/Form.scss';

let fr = new FileReader();

function Form(props) {
  const fileInput = React.createRef();

  function handleChange(ev) {
    const input = ev.currentTarget.name;
    const value = ev.currentTarget.value;
    props.handleChange(input, value);
  }

  function handleFile() {
    const myFile = fileInput.current.files[0];
    fr.addEventListener('load', writeImage);
    fr.readAsDataURL(myFile);
  }

  function writeImage() {
    const rawUrl = fr.result;
    props.handleFile(rawUrl);
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
              value="all"
              name="ages"
              onChange={handleChange}
              checked={props.ages === 'all' ? true : false}
            />
            Para todos los públicos
          </label>
        </div>
        <div>
          <label htmlFor="12">
            <input
              id="12"
              type="radio"
              value="12"
              name="ages"
              onChange={handleChange}
              checked={props.ages === '12' ? true : false}
            />
            12
          </label>
        </div>
        <div>
          <label htmlFor="+18">
            <input
              id="+18"
              type="radio"
              value="+18"
              name="ages"
              onChange={handleChange}
              checked={props.ages === '+18' ? true : false}
            />
            18
          </label>
        </div>
        <div>
          <p>Género</p>
          <label htmlFor="familia">
            <input
              id="familia"
              type="checkbox"
              value="Familia"
              name="gen"
              onChange={handleChange}
              selected={props.gen === 'Familia' ? true : false}
            />
            Familia
          </label>
        </div>
        <div>
          <label htmlFor="comedia">
            <input
              id="comedia"
              type="checkbox"
              value="Comedia"
              name="gen"
              onChange={handleChange}
              selected={props.gen === 'Comedia' ? true : false}
            />
            Comedia
          </label>
        </div>
        <div>
          <label htmlFor="drama">
            <input
              id="drama"
              type="checkbox"
              value="Drama"
              name="gen"
              onChange={handleChange}
              selected={props.gen === 'Drama' ? true : false}
            />
            Drama
          </label>
        </div>
        <div>
          <label htmlFor="fantasia">
            <input
              id="fantasia"
              type="checkbox"
              value="Fantasía"
              name="gen"
              onChange={handleChange}
              selected={props.gen === 'Fantasía' ? true : false}
            />
            Fantasía
          </label>
        </div>
        <input type="file" name="file" onChange={handleFile} ref={fileInput} />
      </form>
    </div>
  );
}

export default Form;
