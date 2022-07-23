/* eslint-disable */
import { render, screen } from "@testing-library/react";
import { mockData } from "../../../mockData";
import Gallery from "../Gallery";

test("renders Museum Header", () => {
    render(<Gallery />);
    const headerElement = screen.getByText(/MUSEUM/i);
    expect(headerElement).toBeInTheDocument();
  });


  test('shows Loading message while fetching request', () => {
    const {getByText} = render(<Gallery />)
  
    expect(getByText(/Loading.../i)).toBeInTheDocument()
  })



  