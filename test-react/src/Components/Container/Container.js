import React from "react";
import PropTypes from "prop-types";
import Box from "../Box/Box";

const Container = (props) => (
  <Box
    sx={{
      maxWidth: "60%",
      mx: "auto",
      px: 3,
    }}
  >
    {props.children}
  </Box>
);

Container.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Container;
