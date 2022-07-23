/* eslint-disable */
import { render, screen, waitFor } from "@testing-library/react";
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


  
    // test("renders gallery details", () => {
    //   render(<Gallery {...mockData.artObjects} />);
    //   const title = screen.getByText(/Zelfportret als de apostel Paulus, Rembrandt van Rijn, 1661/i)
    //   expect(title).toBeInTheDocument();
    // });


  