import { useState } from "react";

import Resource from "./Resource";

const ShowDog = () => {
  // states
  const [refresh, setRefresh] = useState();
  const [page, setPage] = useState(1);

  // page buttons
  const prevClick = () => {
    setRefresh(!refresh);
    setPage(page - 1);
  };

  const nextClick = () => {
    setRefresh(!refresh);
    setPage(page + 1);
  };

  // create array for each image
  const webURL = ["https://dog.ceo/api/breeds/image/random"];
  const arrayID = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  // render data
  const render = (data) => {
    if (data.loading === true) return <p>loading ...</p>;

    console.log("Got the data", data);

    return (
      <div>
        <img src={data.trans.message} alt="image" className="image"></img>
      </div>
    );
  };

  //show dog's breed type
  const breedType = (data) => {
    if (data.loading === true) {
      return <p>Loading...</p>;
    }

    // splitting the api link by locating the "/" to retrieve dog's breed type
    const breedArray = data.trans.message.split("/");
    return (
      <div className="breedContainer">
        <h1 className="breedText">
          Dog Breed
          <hr />
          {breedArray[4]}
        </h1>
      </div>
    );
  };

  return (
    <div>
      <div className="showlist">
        {arrayID.map((id) => (
          <div key={id}>
            <Resource
              path={`${webURL}?v${id}`}
              render={render}
              refresh={refresh}
              breedType={breedType}
            />
          </div>
        ))}
      </div>
      <div className="pageBtn">
        <button onClick={prevClick} disabled={page === 1}>
          Prev
        </button>
        <p>Page {page}/10</p>
        <button onClick={nextClick} disabled={page === 10}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ShowDog;
