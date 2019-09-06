import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui">
          <div className="ui active transition visible dimmer">
          <div className="content"><div className="ui indeterminate text loader">{props.message}</div></div>
          </div>
          <img className="/images/wireframe/short-paragraph.png" className="ui image" />
        </div>
    );
}

Spinner.defaultProps = {
    message : "Loading ..."
}

export default Spinner
