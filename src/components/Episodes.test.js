import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";

test("episodes render properly", () => {
  render(<Episodes episodes={[]} />);
});
