import React, { Component } from "react";

class ImageList extends Component {
  render() {
    const images = this.props.images.map(({ id, urls, description }) => {
      return <img key={id} src={urls.regular} alt={description} />;
    });
    return <div>{images}</div>;
  }
}

export default ImageList;
