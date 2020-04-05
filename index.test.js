import React from "react";
import renderer from "react-test-renderer";
import SplitText from "./index";

describe("<SplitText>", () => {
  it("Matches the snapshot", () => {
    const splitText = renderer.create(<SplitText>Test</SplitText>);
    expect(splitText.toJSON()).toMatchSnapshot();
  });
});
