import React, { useEffect, useReducer } from "react";
import axios from "axios";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import reducer from "../../reducer/Reducer";
import "./Gallery.css";

function Gallery() {
  const [{ data, isLoading, error }, dispatch] = useReducer(reducer, {
    isLoading: false,
  });

  useEffect(() => {
    let ignore = false;

    dispatch({ type: "request" });
    axios(
      `https://www.rijksmuseum.nl/api/nl/collection?key=yW6uq3BV&involvedMaker=Rembrandt+van+Rijn`,
    ).then(
      (results) => {
        if (!ignore) dispatch({ type: "success", results: results.data });
      },
      // eslint-disable-next-line @typescript-eslint/no-shadow
      (error: string) => dispatch({ type: "failure", error }),
    );

    return (): void => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <h1>MUSEUM</h1>
      <div className="container">
        {isLoading && <span>Loading...</span>}
        {error && <span>Error: {error}</span>}
        <ul>
          {data &&
            data.artObjects &&
            data.artObjects.map((item) => (
              <div className="card" key={item.id}>
                <LazyLoadImage
                  src={item.webImage.url}
                  effect="blur"
                  alt="Gallery Images"
                />
                <p>{item.longTitle}</p>
              </div>
            ))}
        </ul>
      </div>
    </>
  );
}

export default trackWindowScroll(Gallery);
