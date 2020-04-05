import React from "react";
import PropTypes from "prop-types";
import { Box as RBox } from "rebass";

const Box = (props) => {
  return <RBox {...props}>{props.children}</RBox>;
};

Box.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Box;
