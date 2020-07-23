import React from "react";
import PropTypes from "prop-types";

class Link extends React.Component<Prop> {
  constructor(prop: Prop) {
    super(prop);
  }
  render() {
    return (
      <button
        onClick={this.props.onClick}
        disabled={this.props.active}
        style={{
          marginLeft: "4px",
        }}
      >
        {this.props.children}
      </button>
    );
  }
}

/*
Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
*/

type Prop = {
  active?: boolean;
  children?: any;
  onClick: () => any;
};

export default Link;
