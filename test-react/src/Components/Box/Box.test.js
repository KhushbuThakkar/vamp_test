import React from "react";
import renderer from "react-test-renderer";
import Box from "./Box";

it("render correctly Box component", () => {
  const component = renderer.create(
    <Box px={2} py={2} width={1 / 2}>
      <div>hello</div>
    </Box>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
