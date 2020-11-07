import React from 'react';

const picturesObj = {
  Tokio:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTADN_o4scW3_VQAu6ih1F7UzTM84vyMgfrLQ&usqp=CAU',
  Sydney:
    'https://www.aussieyoutoo.com/wp-content/uploads/2018/05/vivir-en-Sydney-Australia-2000x951.jpg',
  Boston:
    'https://www.visittheusa.mx/sites/default/files/styles/hero_l_x2/public/images/hero_media_image/2017-06/de6f732d8950b74b550d885beab53c37.jpeg?itok=AHJDbUok',
};

class CityImage extends React.Component {
  render() {
    return (
      <img src={picturesObj[this.props.cityImage]} alt="Imagen de tu destino" />
    );
  }
}

export default CityImage;
