import React, { PureComponent } from "react";

export default class CityInfo extends PureComponent {
  render() {
    const { info } = this.props;
    const displayName = `${info.city}, ${info.state}`;

    return (
      <div>
        <div>
          {displayName} |{" "}
          <a
            target="_new"
            href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${displayName}`}
          >
            Wikipedia
          </a>
        </div>
          <img width={240} src={'data:image/jpg;base64,'+ info.image} />
      </div>
    );
  }
}
