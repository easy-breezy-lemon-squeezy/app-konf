import React, { PureComponent } from "react";

export default class CityInfo extends PureComponent {
  render() {
    const { info } = this.props;

    return (
      <div>
        <div>
          <p>{info.address}</p>
          <p>{info.description}</p>
        </div>
          <img width={240} src={info.image} />
      </div>
    );
  }
}
