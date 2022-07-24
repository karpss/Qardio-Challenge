/* eslint-disable */
import React, { render, screen } from "@testing-library/react";
import { mockData } from "../../../mockData";
import Gallery from "../Gallery";

test("renders Museum Header", () => {
  render(<Gallery />);
  const headerElement = screen.getByText(/MUSEUM/i);
  expect(headerElement).toBeInTheDocument();
});

test("shows Loading message while fetching request", () => {
  render(<Gallery />);
  const loadingMessage = screen.getByText(/Loading.../i);
  expect(loadingMessage).toBeInTheDocument();
});

test("matches snapshot", () => {
  const { container } = render(<Gallery {...mockData} />);
  expect(container.firstChild).toMatchSnapshot();
});
