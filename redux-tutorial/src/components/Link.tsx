import React from "react";
import PropTypes from "prop-types";

const Link = ({ active, children, onClick }: Prop): JSX.Element => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: "4px",
    }}
  >
    {children}
  </button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

type Prop = {
  active?: boolean;
  children?: any;
  onClick?: () => any;
};

export default Link;
