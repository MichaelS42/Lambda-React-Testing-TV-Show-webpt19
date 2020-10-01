import React from "react";
import { render } from "@testing-library/react";
import App, { episodes } from "./App";
import { fetchShow as mockFetchShow } from "./api/fetchShow";
import Edisodes from "./components/Episodes";

jest.mock("./api/fetchShow");
const mockData = [];

test("renders APp properly", () => {
  render(<App />);
});

test("renders Episodes properly", () => {
  render(<Episodes episodes={[]} />);
});

test("fetches and renders data", async () => {
  mockFetchShow.mockResolvedValueOnce({ mockData: episodes });
  const { queryAllByTestId, rerender } = render(<App error="" episodes={[]} />);
  const appTest = expect(queryAllByTestId("App")).toBeInTheDocument();
});
